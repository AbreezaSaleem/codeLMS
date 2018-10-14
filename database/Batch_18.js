import mongoose from 'mongoose'

var Batch_18_Schema = mongoose.Schema(
{
	username:String,
	password:String,
	name: String,
	courses: [String],
	notifications:[String]
})

var Batch_18 = module.exports =  mongoose.model('Batch_18', Batch_18_Schema, 'Batch_18') // IN ES6???

module.exports.getCourseByUsernameAfterLoginSuccess = function(studentusername) 
{
	return Batch_18.findOne({ username: studentusername.username}); 		// FMLS
}