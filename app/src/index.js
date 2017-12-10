import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './Stores/ConfigureStore'
import Routes from './components/Routes'
import history from './components/history/History'


const app = document.getElementById('app')
//document.body.style.backgroundColor = "#ecf0f1"

const store = configureStore()

ReactDOM.render(
	<Provider store = { store } >
		<Router history = { history }>
			<Routes/>
		</Router>
	</Provider>,
app);
