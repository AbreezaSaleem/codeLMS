import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Login from './Login'
import LoginI from './instructor_side/Login'
import Dashboard from './Dashboard'
import StudentsHandle from './StudentsHandle'
import CourseItem from './CourseItem'
import SemesterItem from './SemesterItem'
import Logo from './shared/Logo'
import Tiles from './Tiles'
import CodeEditor from './ConsolePage'
import TilesI from './instructor_side/Tiles'
import CoursePage from './CoursePage'
import CoursePageI from './instructor_side/CoursePage'
import Roster from './instructor_side/Roster'
import SignUp from './shared/SignUp1'
import Console from './ConsolePage2'
import Thumbnail from './ThumbNail'
import R from './instructor_side/AssignmentEdit'



class Routes extends React.Component
{
	render()   // protected routes, should you display tiles page if the user isnt logged in? no, duh  https://www.youtube.com/watch?v=UVQ0ATR0vpI&t=678s
	{
		console.log('ROUTESSSSSSSSSSSSSSSSSSSSS')
		return(
			<Switch>
				<Route exact path = '/' component = { Dashboard }/>
				<Route exact path = '/signup' component = { SignUp } />
				<Route exact path = '/loginS' component = { Login } />
				<Route exact path = '/loginS/student' component = {Tiles} />
				<Route exact path = '/loginS/student/course' component= {CoursePage}/>
				<Route exact path = '/loginS/student/course/console' component= {Console}/>
				<Route exact path = '/loginI' component = { LoginI } />
				<Route exact path = '/loginI/instructor' component = { TilesI } />
				<Route exact path = '/loginI/instructor/course' component = { CoursePageI } />
				<Route exact path = '/loginI/instructor/course/roster' component = { Roster } />
			</Switch>
		);
	}
} 

// here you'll access the store...
// check if logged in is true
// if it is, do the shit
// i. hope. im. right

Routes.propTypes = 
{
	loggedIn: PropTypes.bool.isRequired
}

function mapStateToProps(state)
{
	console.log('HERE')
	console.log(state)
	return { loggedIn: state.loggedIn }
}

//connect(mapStateToProps, null) 
export default (Routes);























