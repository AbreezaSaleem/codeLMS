import mongoose from 'mongoose'

var semester_coursesSchema = mongoose.Schema(
{
	SemesterName:String,
	Courses: 
	[
		{
		    courseCode: String,
            instructorName: String,
            assignments: [String],
            labs: [String],
            quizzes: [String]

		}
	]

})

var semester_courses = module.exports =  mongoose.model('semester_courses', semester_coursesSchema, 'semester_courses') // IN ES6???
//var Fall_17_Courses = module.exports =  mongoose.model('Fall_17_Courses', Fall_17_Courses_Schema, 'Fall_17_Courses') // IN ES6???

module.exports.getSubComponentsNameForCoursePage = function(courseCode, SemesterName) 
{	console.log("getting subcomponents for");
	console.log(courseCode);
	console.log(SemesterName);
	let SemesterDocument=semester_courses.findOne({ SemesterName: SemesterName});
	return semester_courses.findOne({ SemesterName: SemesterName});
}

