import React from 'react'
import Center from 'react-center'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'react-redux'

import LoginForm from './LoginForm'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'


import { instructorLoginRequest, getInstructorCourses, loggedIn } from '../../Actions/LoginActions'

class Login extends React.Component
{
	render()
	{
		const styles =
		{
			logoStyle:
			{
				margin: 'auto',
				width: '153'
			},
			textStyle:
			{
				textAlign: 'center'
			}
		}

		const instructorLoginRequest = this.props.instructorlogin
		const getInstructorCourses = this.props.getInstructorCourses
		const loggedIn = this.props.loggedIn
		return(
			<div>
				<Navbar/>
				<div className = 'row'>
					<div className = 'col-md-4 col-md-offset-4' style = {styles.major}>
						<LoginForm loggedIn = { loggedIn } instructorLoginRequest = { instructorLoginRequest } getInstructorCourses = { getInstructorCourses } />
						<Footer/>
					</div>
				</div>
			</div>
		)
	}
}

Login.propTypes = 
{
	loggedIn: PropTypes.func.isRequired,
	instructorlogin: PropTypes.func.isRequired,
	getInstructorCourses: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
({
	loggedIn: (x) => dispatch(loggedIn(x)),
	instructorlogin: (userData) => dispatch(instructorLoginRequest(userData)),
	getInstructorCourses: (username) => dispatch(getInstructorCourses(username))
});


export default connect(null, mapDispatchToProps) (Login);