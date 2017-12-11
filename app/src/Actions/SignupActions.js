import axios from 'axios'

// action creators

export const registerInstructor = data =>
{
	return (dispatch) =>
	{
		console.log('here...')
		console.log(data)
		return axios.post('/signupI', data)
	}
}




