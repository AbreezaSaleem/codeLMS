import mongoose from 'mongoose'

var instructors_credentialsSchema = mongoose.Schema(
{
	email: String,
	password: String, 	//alphanumeric?
	courses: [String]
})

var instructors_credentials = module.exports =  mongoose.model('instructors_credentials', instructors_credentialsSchema, 'instructors_credentials') // IN ES6??? wth

module.exports.findUserbyUsername = function(username) 
{
	return instructors_credentials.findOne({email: username});
}

module.exports.findUserbyId = function(id, callback) 
{
    instructors_credentials.findById(id, (err) => console.log(err));
}

/// BCRYPT?????
module.exports.comparePassword = function(password) 
{
    return instructors_credentials.findOne({password: password});
}