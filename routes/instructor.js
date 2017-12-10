import Router from 'koa-router2'
import passport from 'koa-passport'
import ls from 'passport-local'

import semester_courses from '../database/semester_courses'
import Batch_18 from '../database/Batch_18'
import instructor_info from '../database/instructor_info'
import instructors_credentials from '../database/instructors_credentials'
import Fall_17_Courses from '../database/Fall_17_Courses'

export default function(app, passport)
{
	const LocalStrategy = ls.Strategy
	const router = new Router({prefix : '/loginI'})

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
				let found_password = await instructors_credentials.comparePassword(user.password, password) 
				/*instructors_credentials.comparePassword(password, user.password, function(err, isMatch) // BCRYPT IMPLEMENTATION
				{
					console.log('answer...?')
					console.log(isMatch)
					if(err) throw err;
					if(isMatch)
					{
						console.log('SUCCESS')
						return done(null, user);
					} else 
					{
						console.log('nope')
						error_password = 'Invalid password.'
						return done(null, false)
					}
				})*/

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


	return router
}
