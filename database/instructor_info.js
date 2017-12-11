import mongoose from 'mongoose'

var instructor_infoSchema = mongoose.Schema(
{
	email: String,
	password: String, 	//alphanumeric?
	name: String,
	courses: [String],
	notifications: [String]
})

var instructor_info = module.exports =  mongoose.model('instructor_info', instructor_infoSchema, 'instructor_info') // IN ES6??? wth

module.exports.findUserbyUsername = function(username) 
{
	return instructor_info.findOne({email: username});
}

module.exports.findUserbyId = function(id, callback) 
{
    instructor_info.findById(id, (err) => console.log(err));
}


module.exports.getInstructorCourses = function(username)
{
	return instructor_info.findOne({email: username})
}