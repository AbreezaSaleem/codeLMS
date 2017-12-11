import React from 'react';
import Logo from './Logo'

export default class Loading extends React.Component
{
	render()
	{
		return( // must be a better way of doing the br shit :))))))
				<div className = 'row'>
					<div className = 'col-md-4 col-md-offset-4' >
						<br/>	
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<Logo/>
						<h3 class="text-muted text-center">    Loading Code LMS... </h3>
						<div class="sk-circle">
						<div class="sk-circle1 sk-child"></div>
						<div class="sk-circle2 sk-child"></div>
						<div class="sk-circle3 sk-child"></div>
						<div class="sk-circle4 sk-child"></div>
						<div class="sk-circle5 sk-child"></div>
						<div class="sk-circle6 sk-child"></div>
						<div class="sk-circle7 sk-child"></div>
						<div class="sk-circle8 sk-child"></div>
						<div class="sk-circle9 sk-child"></div>
						<div class="sk-circle10 sk-child"></div>
						<div class="sk-circle11 sk-child"></div>
						<div class="sk-circle12 sk-child"></div>
						</div>
					</div>
				</div>
		)
	}
}