import { combineReducers } from 'redux'
import { isLoading, errorOccured, dataFetched, loggedIn } from './LoginReducer'
import { enrolledCourses, activeCourse } from './CoursesReducer'
import { userCode } from './ConsolePageReducer'

export default combineReducers
({
	loggedIn,
	errorOccured,
	isLoading,
	dataFetched,	
	enrolledCourses,
	activeCourse,
	userCode
});