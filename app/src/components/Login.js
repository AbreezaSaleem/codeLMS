import React from 'react'
import Center from 'react-center'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'react-redux'

import LoginForm from './LoginForm.js'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'


import { studentLoginRequest, instructorLoginRequest, getCoursesAfterLoginSuccess } from '../Actions/LoginActions'
import { addCourse } from '../Actions/CoursesActions'

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

		const studentLoginRequest  = this.props.studentlogin
		const instructorLoginRequest = this.props.instructorlogin
		const getCourses = this.props.getCourses
		return(
			<div>
				<Navbar/>
				<div className = 'row'>
					<div className = 'col-md-4 col-md-offset-4' style = {styles.major}>
						<LoginForm studentLoginRequest = { studentLoginRequest } instructorLoginRequest = { instructorLoginRequest } getCourses = { getCourses } />
						<Footer/>
					</div>
				</div>
			</div>
		)
	}
}

Login.propTypes = 
{
	studentlogin: PropTypes.func.isRequired,
	instructorlogin: PropTypes.func.isRequired,
	getCourses: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
({
	studentlogin: (userData) => dispatch(studentLoginRequest(userData)),
	instructorlogin: (userData) => dispatch(instructorLoginRequest(userData)),
	getCourses: (username) => dispatch(getCoursesAfterLoginSuccess(username))
});


export default connect(null, mapDispatchToProps) (Login);