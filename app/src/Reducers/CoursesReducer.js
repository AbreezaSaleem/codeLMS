import { COURSES_ENROLLED, ACTIVE_COURSE, GET_STUDENTS_ENROLLED } from '../Actions/CoursesActions'



export const enrolledCourses = (state = false, action) => // state should NOT be false by default :(
{
	console.log(action.type)
	switch (action.type) 
	{
		case COURSES_ENROLLED:
			//console.log('u wanna add courses?')
			//console.log(action.enrolledCourses)
			return Object.assign({}, state, 
			{
				enrolledCourses: action.enrolledCourses
			})
		default:
			return state;
	}
}


export const activeCourse = (state = false, action) => 
{
	switch (action.type) 
	{
		case ACTIVE_COURSE:
			console.log('reducer for activate courses!')
			console.log(action.activeCourse)
			return Object.assign({}, state, 
			{
				activeCourse: action.activeCourse
			})
		default:
			return state;
	}
}




