import dispatcher from '../dispatcher'
import axios from 'axios'

// actions
export const COURSES_ENROLLED = 'COURSES_ENROLLED'

export const ACTIVE_COURSE = 'ACTIVE_COURSE'

export const GET_STUDENTS_ENROLLED = 'GET_STUDENTS_ENROLLED'

// action creators
export function addEnrolledCourses(enrolledCourses) // will be an array of courses #lame
{
	return { type: COURSES_ENROLLED, enrolledCourses }
}


export function addActiveCourse(activeCourse)
{
	return { type: ACTIVE_COURSE, activeCourse }
}


export const getStudentsEnrolled = course =>
{
	console.log('getting students enrolled...')
	console.log(course)
	return (dispatch) =>
	{
		return axios.post('/loginI/instructor/course/roster', course)
	}
}

export function createRepositories(courseName, studentsEnrolled)
{
	console.log('create repos!!!')
	console.log(courseName)
	console.log(studentsEnrolled)
	return (dispatch) =>
	{
		return axios.post('/loginI/instructor/course/new', {course: courseName, students: studentsEnrolled})
	}
}
