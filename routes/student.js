import Router from 'koa-router2'
import passport from 'koa-passport'
import ls from 'passport-local'
import child_process from 'child_process'
import fs from 'fs'

import semester_courses from '../database/semester_courses'
import Batch_18 from '../database/Batch_18'
import students_credentials from '../database/students_credentials'

var gitlabConfig = JSON.parse(fs.readFileSync(__dirname + '/../gitlab/gitlab_config.js', 'utf8'));

export default function(io, app, passport, queue)
{
	const LocalStrategy = ls.Strategy
	const router = new Router({prefix : '/loginS'})

	var error_username = ''
	var error_password = ''

	let langs = JSON.parse(fs.readFileSync(__dirname + "/../sandbox/langs.json"), 'utf8')

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
		let user = await students_credentials.findUserbyUsername(username) 
		try {
			if (user)
			{
				/// SO IF YOU GET COURSES HERE YOU CAN JUST SAVE THEM AND SEND THEM TO POST. 
				/// BUT SERVER IS ONE AND IT CANT KEEP A LIST OF COURSES OF SO MANY INSTRUCTORS AT THE SAME TIME. FIX???
				/// SEND IT TO SUCCESS REDIRECT SOMEHOW???
				//let found_password = await instructors_credentials.comparePassword(user.password, password) 
				let found_password = ''
				students_credentials.comparePassword(password, user.password, function(err, isMatch) // BCRYPT IMPLEMENTATION
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

	
	
	io.on('connection', function(socket)
	{
		console.log('connection made')
		socket.on('CodeToRun',(code)=>
		{
			console.log('code issssss')
			console.log(code.userCode)
			fs.writeFile("repository/test.py", code.userCode, function(err) 
			{
				if(err) return console.log(err);
				console.log("The file was saved!");	
			}) 
			// time to run the code! ^_^
			var params = 
			[
				langs["python"]["cmd"],
				langs["python"]["ext"]
			]
			var runScript = child_process.execFile(__dirname + '/../codeRunner/runWebCode.sh', params);
			runScript.on('close', bleh =>
			{
				console.log('done')
				fs.readFile(__dirname + "/../repository/output.txt", "utf8", (err, data) => 
				{
					if (err)
						throw err;
					fs.readFile(__dirname + "/../repository/errors.log", "utf8", (err1, data1) => 
					{
						if (err1)
							throw err1;
						console.log("output is")
						console.log(data)
						console.log(data1)
						socket.emit('returnOutput', { output: data, errors: data1 })
					})
				});
			});

			runScript.stderr.on('data', function(data)
			{
				console.log(data);
				// triggerErrorStuff(); 
			});
			//ctx.body = { output: 'effoff' }
			
		})

		socket.on('uploadCode', data =>
		{
			console.log('upload code')
			console.log(data)

			let dir = 'temp' // will store the code here temporarily

			let params = 
			[
				data.name,
				data.dirname,
				dir,
				gitlabConfig["gitlab-root"]["gitServer"]
			]
			console.log(params)
			// clone the repository
			var runScriptDownload = child_process.execFile(__dirname + '/../gitlab/download_code.sh', params);
			runScriptDownload.on('close', bleh =>
			{
				console.log('done downloading')
				// now modify the file
				fs.writeFile('gitlab/temp/' + data.dirname + '/test.py', data.code, function(err) 
				{
					if(err) return console.log(err);
					console.log("The file was saved!");	
					// now push new changes
					let dir2 = 'temp/' + data.dirname
					let params2 =
					[
						data.name,
						dir2
					]
					console.log(params2)
					var runScriptUpload = child_process.execFile(__dirname + '/../gitlab/git_push.sh', params2);
					runScriptUpload.on('close', bleh =>
					{
						console.log('done uploading')
					})
				})
			})


		})
	})


	router.post('/signupS', async ctx => 
	{
		students_credentials.addStudent(ctx.request.body)
		ctx.body = { bleh: 'bleh' }
	})



	return router
}