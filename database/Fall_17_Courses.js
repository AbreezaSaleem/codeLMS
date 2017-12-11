import mongoose from 'mongoose'

var Fall_17_Courses_Schema = mongoose.Schema(
{
	courseCode: String,
    instructorName: String,
    assignments: [String],
    labs: [String],
    quizzes: [String]
})

var Fall_17_Courses = module.exports =  mongoose.model('Fall_17_Courses', Fall_17_Courses_Schema, 'Fall_17_Courses') // IN ES6???


module.exports.getSubComponentsNameonCoursePage = function(courseCode) 
{
	return Fall_17_Courses.findOne({ courseCode: courseCode});
}


module.exports.getStudentsEnrolled = function(courseCode)
{
	return Fall_17_Courses.findOne({ courseCode }, 'students_enrolled')
}