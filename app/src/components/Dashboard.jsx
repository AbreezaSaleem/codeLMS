import React from 'react'
import { Redirect } from 'react-router-dom'

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Logo from './shared/Logo'
import history from './history/History'
//import sand from '../images/sand.png'

export default class Dashboard extends React.Component
{
	constructor()
	{
		super()
		this.studentButton = this.studentButton.bind(this)
		this.instructorButton = this.instructorButton.bind(this)
	}


	studentButton(event)
	{
		event.preventDefault()
		history.push('/loginS')
		//this.setState({student: true})
	}

	instructorButton(event)
	{
		event.preventDefault()
		history.push('/loginI')
		//this.setState({instructor: true})
	}


	render()
	{
		const styles =
		{
			textStyle:
			{
				textAlign: 'center'
			},
			back:
			{
				backgroundImage: "url('./images/sand.png')"
			}
		}

		return(
			<div>
				<Navbar/>
				<div className = 'row'>
					<div className = 'col-md-4 col-md-offset-4' /*style = {styles.back}*/>
						<Logo/>
						<br/>
						<div>
							<div class = 'float-left'>
								<button class="btn btn-lg btn-success" onClick = {this.studentButton}>Student Login</button>
							</div>
							<div class = 'float-right'>
								<button class="btn btn-lg btn-success" onClick = {this.instructorButton} >Instructor Login</button>
							</div>
						</div>
						<div class = 'float-left'>
						<Footer/>
						</div>
					</div>
				</div>	
			</div>
		)
	}
}