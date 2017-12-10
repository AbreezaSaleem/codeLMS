import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './Stores/configureStore'

import Layout from './components/Layout'
import Courses from './pages/Courses'
import Routes from './components/Routes'


const app = document.getElementById('app')
//document.body.style.backgroundColor = "#ecf0f1"

const initialState = 
{
	isLoading: false, 
	errorOccured: false,
	dataFetched: {}
}

const store = configureStore(initialState)

ReactDOM.render(
	<Provider store = { store } >
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	</Provider>,
app);
