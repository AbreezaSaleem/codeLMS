import Router from 'koa-router2'
import passport from 'koa-passport'
import ls from 'passport-local'
import child_process from 'child_process'

import semester_courses from '../database/semester_courses'
import Batch_18 from '../database/Batch_18'
import instructor_info from '../database/instructor_info'
import instructors_credentials from '../database/instructors_credentials'
import Fall_17_Courses from '../database/Fall_17_Courses'

import gradecomponent_creator from '../gitlab/gradecomponent_creator.js'

export default function(app, passport)
{
	const LocalStrategy = ls.Strategy
	const router = new Router({prefix : '/loginI'})

	var error_username = ''
	var error_password = ''

	passport.serializeUser((user, done) => 
	{
		done(null, user);
	})

	passport.deserializeUser((id, done) =>
	{
		instructors_credentials.findUserbyId(id, function(err, user) 
		{
			done(err, user)
		})
	})

	router.get('/loginI', async ctx => 
	{
		ctx.body = {instructor: false, error_username: error_username, error_password: error_password}
	})

	router.post('/loginI',  passport.authenticate('instructor', { successRedirect: '/loginI/instructor', failureRedirect: '/loginI', failureFlash: true }))

	passport.use('instructor', new LocalStrategy(async (username, password, done) => 
	{
		let user = await instructors_credentials.findUserbyUsername(username) 
		try {
			if (user)
			{
				/// SO IF YOU GET COURSES HERE YOU CAN JUST SAVE THEM AND SEND THEM TO POST. 
				/// BUT SERVER IS ONE AND IT CANT KEEP A LIST OF COURSES OF SO MANY INSTRUCTORS AT THE SAME TIME. FIX???
				/// SEND IT TO SUCCESS REDIRECT SOMEHOW???
				//let found_password = await instructors_credentials.comparePassword(user.password, password) 
				let found_password = ''
				instructors_credentials.comparePassword(password, user.password, function(err, isMatch) // BCRYPT IMPLEMENTATION
				{
					if(err) throw err;
					if(isMatch)
					{
						found_password = 'found'
						return done(null, user);
					} else 
					{
						error_password = 'Invalid password.'
						return done(null, false)
					}
				})

				/*if (found_password) 
				{
					console.log("found")
					done(null, user)
				}
				else
				{
					error_password = 'Invalid password.'
					done(null, false)
				}*/
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
		console.log("?")
		ctx.body = {instructor: true, error_username: '', error_password: ''}
	})


	router.post('/loginI/instructor', async ctx =>
	{
		console.log("!!!!")
		if(ctx.request.body)
		{
			let instructorName = ctx.request.body.username
			console.log(instructorName)
			let courseList = await instructor_info.getInstructorCourses(instructorName) 
			ctx.body = {instructor: true, error_username: '', error_password: '', courses: courseList.courses}
		}
	})


	router.post('/loginI/instructor/course', async (ctx) =>
	{
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

	router.post('/loginI/instructor/course/new', async ctx =>	// do the gitlab-project shit here!!!
	{
		console.log('your call has been heard!!!')
		var workingDir = __dirname + '/../gitlab/'
		/*var params =
		[
			ctx.request.body.course,
			ctx.request.body.students,
			workingDir
		]
		console.log(__dirname + '/../gitlab/repository_creator.sh')
		var runScript = child_process.execFile(workingDir + '/repository_creator.sh', params);
		runScript.on('close', bleh =>
		{
			console.log('done')
		})*/
		gradecomponent_creator(ctx.request.body.students, ctx.request.body.course)
		ctx.body = { studentList: 'studentList' }
	})


	router.post('/signupI', async ctx => 
	{
		instructors_credentials.addInstructor(ctx.request.body)
		ctx.body = { bleh: 'bleh' }
	})


	return router
}
