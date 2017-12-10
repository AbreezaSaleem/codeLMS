import { USER_LOGGED_IN } from '../Actions/LoginActions'

export const loggedIn = (state = false, action) => // state should NOT be false by default :(
{
	switch (action.type) 
	{
		case USER_LOGGED_IN:
			//return action.input;
			//console.log('reducer activated!')
			//console.log(action.input)
			return Object.assign({}, state, 
			{
				loggedIn: action.input
			})
		default:
			return state;
	}
}

export const errorOccured = (state = false, action) => 
{
	switch (action.type) 
	{
		case 'ERROR_OCCURED':
			return action.errorOccured;
		default:
			return state;
	}
}

export const isLoading = (state = false, action) =>
{
	switch (action.type)
	{
		case 'LOADING':
			return action.isLoading;
		default:
			return state;
	}
}


export const dataFetched = (state = [], action) =>
{
	switch (action.type) 
	{
		case 'DATA_FETCHED':
			return action.data;
		default:
			return state;
	}
}



































