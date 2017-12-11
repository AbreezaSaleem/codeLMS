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
import renderToString from 'react-dom/server'
import kue from 'kue'

import studentRouter from './routes/student'
import instructorRouter from './routes/instructor'
import instructors_credentials from './database/instructors_credentials'

const app = new Koa();
var queue = kue.createQueue()
const basicRouter = new Router()
//app.use(studentRouter.routes())

var db_url = 'mongodb://code_lms:ex700ledbe3@ds121543.mlab.com:21543/code_lms'
app.keys = ['keys'] /// wtf does this do

app.use(serve(__dirname + '/app/build'))
app.use(bodyParser())
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(db_url)

//studentRouter(app, passport)

app.use(studentRouter(app, passport, queue).routes())
app.use(instructorRouter(app, passport).routes())
app.use(basicRouter.routes())

app.listen(8080, function() 
{
	console.log('listening on 8080')
}) 


queue.create('pls', 
{
	no: 'Welcome to the site'
}).priority('high').save();



queue.process('pls', function(job, done) 
{
	console.log(job.data);
});
