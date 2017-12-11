import dispatcher from '../dispatcher'

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
		socket.emit('CodeToRun', code);
		console.log('Sending Code...')
		
	}
}