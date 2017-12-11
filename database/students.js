import mongoose from 'mongoose'

var studentSchema = mongoose.Schema(
{
	email: String,
	password: String 	//alphanumeric?
})

var students = module.exports =  mongoose.model('students', studentSchema) // IN ES6???

module.exports.findUserbyUsername = function(username) 
{
	return students.findOne({email: username});
}

module.exports.findUserbyId = function(id, callback) 
{
    students.findById(id, (err) => console.log(err));
}

/// BCRYPT?????
module.exports.comparePassword = function(password) 
{
    return students.findOne({password: password});
}
