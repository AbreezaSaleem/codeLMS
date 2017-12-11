import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import Logo from './Logo'
import history from '../history/History'
import { registerInstructor } from '../../Actions/SignupActions'

class Signup extends React.Component
{
	componentWillMount()
	{
		window.addEventListener("hashchange", function(e) 
		{
			history.goBack()
		})

	}

	constructor()
	{
		super()

		this.state = 
		{
			name: '',
			email: '',
			password: '',
			user_type: '?',
			confirm_password: '',
			error_email: '',
			error_password: '',
			error_username: '',
		}

		this.onChange = this.onChange.bind(this)
		this.onButtonClick = this.onButtonClick.bind(this)
	}

	onChange(event)
	{
		this.setState(
		{ 
			[event.target.name]: event.target.value,
			error_email: '',
			error_password: '',
			error_username: ''
		})
		//console.log(this.state)
		event.preventDefault()
	}

	onButtonClick(event)
	{
		var type = event.target.name
		this.setState({user_type: type})
		if (this.state.password != this.state.confirm_password)
			this.setState({error_password: 'Passwords dont match.'})
		console.log(type)
		if (this.state.name && this.state.email && this.state.password && this.state.confirm_password )
		{	
			if(type == 'Instructor')
			{
				console.log('here!!')
				this.props.instructorSignup({username: this.state.name, password: this.state.password})
				.then(response =>
				{
					history.push(
					{
						pathname: '/'
					})	
				})
			}
		}
		else
		{
			this.setState(
			{
				error_password: 'Please fill all the required fields', 
				error_username: 'Please fill all the required fields',
				error_email: 'Please fill all the required fields'
			})
		}
		event.preventDefault()
	}

	/*onSubmit(event) why tf have i not deleted this already
	{
		console.log('fucking here')
		if (this.state.password != this.state.confirm_password)
			this.setState({error_password: 'Passwords dont match.'})
		if (this.state.name && this.state.email && this.state.password && this.state.confirm_password )
		{	
			console.log('GONNA UPDATE USER INFO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
			this.prop.userSignup({username: name, password: password})
		}
		else
		{
			this.setState(
			{
				error_password: 'Please fill all the required fields', 
				error_username: 'Please fill all the required fields',
				error_email: 'Please fill all the required fields'
			})
		}
		event.preventDefault()
	}*/

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
				<Navbar/>
				<div className = 'row'>
					<div className = 'col-md-4 col-md-offset-4'>
						<Logo/>
						<div class="header clearfix">
							<h3 class="text-muted text-center page-header"> Signup</h3>
						</div>

						<form name = "lps">
							<div class="form-group" className = {classnames('form-group', {'has-error': this.state.error_username})}>
								<label>Name</label>
								<input 
									type="text" 
									class="form-control" 
									placeholder="Name" 
									name="name"
									onChange = {this.onChange}
								/>
								{this.state.error_username && <span className = 'help-block'> { this.state.error_username } </span>}
							</div>

							<div class="form-group" className = {classnames('form-group', {'has-error': this.state.error_email})}>
								<label>Email</label>
								<input 
									type="email" 
									class="form-control" 
									placeholder="Email" 
									name="email"
									onChange = {this.onChange}
								/>
								{this.state.error_email && <span className = 'help-block'> { this.state.error_email } </span>}
							</div>

							<div class="form-group" className = {classnames('form-group', {'has-error': this.state.error_password})}>
								<label>Password</label>
								<input 
									type="password" 
									class="form-control" 
									placeholder="Password" 
									name="password"
									onChange = {this.onChange}
								/>
								{this.state.error_password && <span className = 'help-block'> { this.state.error_password } </span>}
							</div>

							<div class="form-group" className = {classnames('form-group', {'has-error': this.state.error_password})}>
								<label>Confirm Password</label>
								<input 
									type="password" 
									class="form-control" 
									placeholder="Password" 
									name="confirm_password"
									onChange = {this.onChange}
								/>
								{this.state.error_password && <span className = 'help-block'> { this.state.error_password } </span>}
							</div>

							<div>
								<div class = 'float-left' >
									<button class="btn btn-lg btn-success" onClick = {this.onButtonClick} name = 'Student'> Register as Student </button>
								</div>
								<div class = 'float-right' >
									<button class="btn btn-lg btn-success" onClick = {this.onButtonClick} name = 'Instructor'> Register as Instructor </button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}



Signup.propTypes = 
{
	instructorSignup: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
({
	instructorSignup: (x) => dispatch(registerInstructor(x))
});


export default connect(null, mapDispatchToProps) (Signup);