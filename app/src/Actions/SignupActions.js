import axios from 'axios'

// action creators

export const registerUser = data =>
{
	return (dispatch) =>
	{
		console.log('here...')
		console.log(data)
		return axios.post('/', data)
	}
}




