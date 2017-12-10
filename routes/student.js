import Router from 'koa-router2'
import passport from 'koa-passport'
import ls from 'passport-local'
import child_process from 'child_process'

import semester_courses from '../database/semester_courses'
import Batch_18 from '../database/Batch_18'
import students_credentials from '../database/students_credentials'

export default function(app, passport, queue)
{
	const LocalStrategy = ls.Strategy
	const router = new Router({prefix : '/loginS'})

	queue.create('email', 
	{
		title: 'Welcome to the site',
		to: 'user@example.com',
		template: 'welcome-email'
	}).priority('low').save();

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

	router.post('/loginS',  passport.authenticate('student', { successRedirect: '/loginS/student', failureRedirect: '/loginS', failureFlash: true }))

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


	router.get('/loginS', async ctx => 
	{
		ctx.body = {student: false, error_username: error_username, error_password: error_password}
	})

	// response.send == ctx.body
	router.get('/loginS/student', (ctx) => /// TILES PAGE 
	{
		queue.process('email', function(job, done) 
		{
			//console.log(job.data);
		});
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

	router.post('/loginS/student/course/console', async ctx =>
	{
		console.log('code issssss')
		console.log(ctx.request.body)
		ctx.body = { effoff: 'effoff' }
	})

	function executeCode(scriptParams, callback) 
	{
		const child = childProcess.execFile(
			scriptParams.src,
			scriptParams.params,
			{ cwd: scriptParams.cwd },
			(err, stdout, stderr) => {
				if (err) callback(true);
				callback(false);
			});
	}


	return router
}
