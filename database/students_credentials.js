import mongoose from 'mongoose'

var students_credentialsSchema = mongoose.Schema(
{
	email: String,
	password: String 	//alphanumeric?
})

var students_credentials = module.exports =  mongoose.model('students_credentials', students_credentialsSchema) // IN ES6???

module.exports.findUserbyUsername = function(username) 
{
	return students_credentials.findOne({email: username});
}

module.exports.findUserbyId = function(id, callback) 
{
    students_credentials.findById(id, (err) => console.log(err));
}

/// BCRYPT?????
module.exports.comparePassword = function(password) 
{
    return students_credentials.findOne({password: password});
}
