import dispatcher from '../dispatcher'
import axios from 'axios'

// actions
export const USER_CODE = 'USER_CODE'

// action creators
export function addUserCode(userCode) // will be an array of courses #lame
{
	return { type: USER_CODE, userCode }
}


export const sendCode = code =>
{
	console.log("going to send code!")
	console.log(code)
	return (dispatch) =>
	{
		return axios.post('/loginS/student/course/console', code)
	}
}
