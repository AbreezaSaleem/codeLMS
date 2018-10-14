// HAAALLOOOOOOO
import Koa from 'koa'
import session from 'koa-session'
import Router from 'koa-router2'
import send from 'koa-send'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import validator from 'validator'
import mongo from 'mongodb'
import mongoose from 'mongoose'
import passport from 'koa-passport'
import ls from 'passport-local'
import renderToString from 'react-dom/server'

import studentRouter from './routes/student'
//import userRouter from './routes/user'

import students_credentials from './database/students_credentials'
import instructors_credentials from './database/instructors_credentials' 
import instructor_info from './database/instructor_info'
import Batch_18 from './database/Batch_18'
import Fall_17_Courses from './database/Fall_17_Courses'
import semester_courses from './database/semester_courses'

var LocalStrategy = ls.Strategy
const app = new Koa();
const router = new Router()
const MongoClient = mongo.MongoClient


app.use(studentRouter.routes())
app.use(studentRouter.allowedMethods())


var db_url = 'mongodb://code_lms:ex700ledbe3@ds121543.mlab.com:21543/code_lms'
app.keys = ['keys'] /// wtf does this do

app.use(serve(__dirname + '/app/build'))
app.use(bodyParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(router.routes())


mongoose.connect(db_url)

var error_username = ''
var error_password = ''

app.listen(8080, function() 
{
	console.log('listening on 8080')
}) 

function validateInput(input) // not getting used at the moment
{
	const errors = {}
	const student = true

	if (validator.isEmpty(input.username))
		errors.username = 'Field is empty'

	if (validator.isEmpty(input.password))
		errors.password = 'Field is empty'

	return { errors, isValid: true, student}
}



router.get('/', async ctx => 
{
	console.log('hi')
	await send(ctx, './index.html');
});



router.get('/loginS', async ctx => 
{
	ctx.body = {student: false, error_username: error_username, error_password: error_password}
})

router.get('/loginI', async ctx => 
{
	ctx.body = {instructor: false, error_username: error_username, error_password: error_password}
})



passport.serializeUser((user, done) => 
{
	done(null, user);
})

passport.deserializeUser((id, done) =>
{
	students_credentials.findUserbyId(id, function(err, user) 
	{
		done(err, user)
	})
})


/// LOGIN PAGE
router.post('/loginS',  passport.authenticate('student', { successRedirect: '/loginS/student', failureRedirect: '/loginS', failureFlash: true }))

router.post('/loginI',  passport.authenticate('instructor', { successRedirect: '/loginI/instructor', failureRedirect: '/loginI', failureFlash: true }))

passport.use('student', new LocalStrategy(async (username, password, done) => 
{
	var pls = 'students_credentials'
	let user = await students_credentials.findUserbyUsername(username)  
	try {
		if (user)
		{
			let found_password = await students_credentials.comparePassword(password)
			if (found_password) 
			{
				done(null, user)
			}
			else
			{
				error_password = 'Invalid password.'
				done(null, false)
			}
		}
		else
		{
			error_username = 'Invalid username.'
			done(null, false)
		}
	} catch (error)
	{
		throw error
	}
}))


passport.use('instructor', new LocalStrategy(async (username, password, done) => 
{
	let user = await instructors_credentials.findUserbyUsername(username)  
	try {
		if (user)
		{
			/// SO IF YOU GET COURSES HERE YOU CAN JUST SAVE THEM AND SEND THEM TO POST. 
			/// BUT SERVER IS ONE AND IT CANT KEEP A LIST OF COURSES OF SO MANY INSTRUCTORS AT THE SAME TIME. FIX???
			/// SEND IT TO SUCCESS REDIRECT SOMEHOW???
			let found_password = await instructors_credentials.comparePassword(password) 
			if (found_password) 
			{
				done(null, user)
			}
			else
			{
				error_password = 'Invalid password.'
				done(null, false)
			}
		}
		else
		{
			error_username = 'Invalid username.'
			done(null, false)
		}
	} catch (error)
	{
		throw error
	}
}))

router.get('/loginI/instructor', (ctx) =>
{
	ctx.body = {instructor: true, error_username: '', error_password: ''}
})


router.post('/loginI/instructor', async ctx =>
{
	if(ctx.request.body)
	{
		let instructorName = ctx.request.body.username
		let courseList = await instructor_info.getInstructorCourses(instructorName) 
		ctx.body = {instructor: true, error_username: '', error_password: '', courses: courseList.courses}
	}
})

// response.send == ctx.body
router.get('/loginS/student', (ctx) => /// TILES PAGE 
{
	//sending login success confirmation 
	ctx.body = {student: true, error_username: '', error_password: ''}
})

//Giving CoursesList of the successfully logged in student
router.post('/loginS/student', async (ctx) =>
{
	if(ctx.request.body)
	{
		let BatchID=(ctx.request.body.username).substring(0,2);
		//check for batch here when you will add new batches
		let user = ctx.request.body.username
		let studentInfo= await Batch_18.getCourseByUsernameAfterLoginSuccess(ctx.request.body); 
		let courseList=studentInfo.courses;
		ctx.body = {student: true, error_username: '', error_password: '', courses : courseList}	
	}

})

//Giving Courses SubComponents Name
router.post('/loginS/student/course', async (ctx) =>
{
	let SemesterDocument = await semester_courses.getSubComponentsNameForCoursePage(ctx.request.body.CourseCode, ctx.request.body.SemesterName)
	let CourseArr=SemesterDocument.Courses;
	let CourseInfo = CourseArr.filter(function(course){ return course.courseCode==ctx.request.body.CourseCode;})
	ctx.body = { CourseInfo: CourseInfo[0]}
})


router.post('/loginI/instructor/course', async (ctx) =>
{
	console.log('HERE')
	let SemesterDocument = await semester_courses.getSubComponentsNameForCoursePage(ctx.request.body.CourseCode, ctx.request.body.SemesterName)
	let CourseArr=SemesterDocument.Courses;
	let CourseInfo = CourseArr.filter(function(course){ return course.courseCode==ctx.request.body.CourseCode;})
	ctx.body = { CourseInfo: CourseInfo[0]}
})



router.post('/loginI/instructor/course/roster', async ctx =>
{
	let studentList = await Fall_17_Courses.getStudentsEnrolled(ctx.request.body.courseCode)
	ctx.body = { studentList: studentList }
})



