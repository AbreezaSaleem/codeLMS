import React from 'react';


export default class Signup extends React.Component
{
	render()
	{
		return(
			<div>
				<h2 class="page-header">Register</h2>

				<form>
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-control" placeholder="Name" name="name">
					</div>

					<div class="form-group">
						<label>Username</label>
						<input type="text" class="form-control" placeholder="Username" name="username">
					</div>

					<div class="form-group">
						<label>Email</label>
						<input type="email" class="form-control" placeholder="Email" name="email">
					</div>

					<div class="form-group">
						<label>Password</label>
						<input type="password" class="form-control" placeholder="Password" name="password">
					</div>

					<div class="form-group">
						<label>Confirm Password</label>
						<input type="password" class="form-control" placeholder="Password" name="password2">
					</div>

					<button type="submit" class="btn btn-default">Submit</button>
				</form>
			</div>
		)
	}
}