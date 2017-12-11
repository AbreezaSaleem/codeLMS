import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../Reducers/FinalReducer'

const initialState = 
{
	loggedIn: false,
	isLoading: false, // miss
	errorOccured: false, // miss
	dataFetched: {}, // miss
	enrolledCourses: [],
	activeCourse: '',
	userCode: ''
}

export default function configureStore() 
{
	//console.log(initialState)
	return createStore
	(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);
}