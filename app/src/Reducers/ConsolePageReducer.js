import { USER_CODE } from '../Actions/ConsolePageActions'

export const userCode = (state = false, action) => // state should NOT be false by default :(
{
	switch (action.type) 
	{
		case USER_CODE:
			//console.log('u wanna add courses?')
			//console.log(action.enrolledCourses)
			return Object.assign({}, state, 
			{
				userCode: action.userCode
			})
		default:
			return state;
	}
}
