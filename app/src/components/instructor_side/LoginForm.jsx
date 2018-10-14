import React from 'react'
import Center from 'react-center'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import isEmpty from 'lodash/isEmpty'
import { browserHistory } from 'react-router'
import { Route, Redirect, Link } from 'react-router-dom'

import Logo from '../shared/Logo'
import Routes from '../Routes'
import Tiles from '../Tiles'
import history from '../history/History'

export default class LoginForm extends React.Component
{
	constructor()
	{
		super()

		this.state = 
		{
			username: '',
			password: '',
			instructor: false,
			error_password: '',
			error_username: '',
			courses: [],
			CoursesReceived:false
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(event)
	{
		this.setState({error_username:'', error_password:'', [event.target.name]: event.target.value})
		event.preventDefault()
	}

	onSubmit(event)
	{
		event.preventDefault()
		if (this.state.username && this.state.password)
		{
			// fire action that updates the store...
			this.props.instructorLoginRequest({username: this.state.username, password: this.state.password})
			.then(response => /// ctx.body's data will be available HERE in reponse variable
			{	
				this.props.loggedIn(true)
				this.setState(
				{	// successful login! now you need to set the logged_in value in the store to true <3 for that you'll call an action
					instructor: response.data.instructor, // response should be the list of courses student is enrollrd in
					error_username: response.data.error_username, 
					error_password: response.data.error_password
				})
			
				if(this.state.instructor)
				{
					this.props.getInstructorCourses({username: this.state.username})
					.then(response =>
					{
						this.setState(
						{
							courses:response.data.courses,
							CoursesReceived:true
						})
						
						history.push(
						{
							pathname: '/loginI/instructor',
							state: { InstructorCourses : this.state.courses }
						})						
					})
				}
			})
		}
		else
			this.setState({error_username: 'Please enter username', error_password: 'Please enter password.'})
	}

	componentWillMount()
	{
		window.addEventListener("hashchange", function(e) 
		{
			history.goBack()
		})

	}

	render()
	{
		const styles =
		{
			buttonStyle:
			{
				margin: 'auto',
				width: '83'
			}
		}

	
		return(
		<div>
			<Logo/>
			<div class="header clearfix">
				<h3 class="text-muted text-center page-header"> Instructor Login</h3>
			</div>
			<form onSubmit = {this.onSubmit}>
				<div className = {classnames('form-group', {'has-error': this.state.error_username})}>
					<label className = 'control-label'> Username </label>
					<input 
						type = 'text'
						name = 'username'
						className = 'form-control'
						onChange = {this.onChange}
					/>
					{this.state.error_username && <span className = 'help-block'> { this.state.error_username } </span>}
				</div>

				<div className = {classnames('form-group', {'has-error': this.state.error_password})}>
					<label className = 'control-label'> Password </label>
					<input 
						type = 'password'
						name = 'password'
						className = 'form-control'
						onChange = {this.onChange}
					/>
					{this.state.error_password && <span className = 'help-block'> { this.state.error_password } </span>}
				</div>

				<div className = 'form-group' style = {styles.buttonStyle}>
					<button class="btn btn-lg btn-success"> Login </button>
				</div>
			</form>
		</div>
		)
	}
}

LoginForm.propTypes = 
{
	loggedIn: PropTypes.func.isRequired,
	instructorLoginRequest: PropTypes.func.isRequired,
	getInstructorCourses: PropTypes.func.isRequired
}