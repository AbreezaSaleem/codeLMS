import dispatcher from '../dispatcher'
import axios from 'axios'

// actions
export const USER_CODE = 'USER_CODE'

// action creators
export function addUserCode(userCode) // will be an array of courses #lame
{
	return { type: USER_CODE, userCode }
}

export const sendCodeToTheServer = (socket, code) =>
{
	return (dispatch) =>
	{
		socket.emit('CodeToRun', code)
		console.log('Sending Code...')
	}
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

export const uploadCodeToGitlab = (socket, code, name, dirname) =>
{
	console.log('upload action')
	console.log(code)
	console.log(name)
	console.log(dirname)
	return dispatch =>
	{
		socket.emit('uploadCode', {code, name, dirname})
	}
}