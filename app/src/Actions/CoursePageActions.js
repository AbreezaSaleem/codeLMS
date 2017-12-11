import axios from 'axios'

export const getSubcomponentsNamesOnCoursePage = (courseData) =>
{
	return (dispatch) =>
	{
		console.log('Getting Course Information...')
		//console.log(courseData)
		return axios.post('/loginS/student/course', courseData)
	}
}

export const getSubcomponentsNamesOnCoursePageIns = (courseData) =>
{
	return (dispatch) =>
	{
		console.log('Getting Course Information... INSTRUCTOR')
		console.log(courseData)
		return axios.post('/loginI/instructor/course', courseData)
	}
}