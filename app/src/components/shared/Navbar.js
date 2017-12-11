import React from 'react'

export default class Navbar extends React.Component // how will the session terminate when the user logs out?
{
	render()
	{
		return(
			<nav class = 'navbar navbar-expand-sm navbar-custom'>
				<a href = '/' class = 'navbar-brand'>
					<div class="header clearfix">
						<h3 class="text-muted">Code LMS</h3>
					</div>
				</a>
				<div class="navbar-collapse collapse navbar-brand" id="navbar4">
					<ul class = 'navbar-nav pull-right'>
						<li class="nav-item">
							<a class = 'nav-link' href="/loginS/student"> <span class = 'src-only'>Profile</span> </a>
						</li>
						<li class = 'nav-item'>
							<a class = 'nav-link' href="/loginS/student"> <span class = 'src-only'>Notifications</span> </a>
						</li>
						<li class = 'nav-item'>
							<a class = 'nav-link' href="/"> <span class = 'src-only'>Logout</span> </a> 
						</li>
					</ul>
				</div>
			</nav>
		)	
	}
}