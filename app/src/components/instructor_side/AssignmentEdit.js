import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loading from '../shared/Loading'
import Navbar from '../shared/Navbar'

export default class AssignmentEdit extends React.Component
{
	constructor()
	{
		super()
		this.state =
		{
			courseCode: '',
			courseTitle: ''
		}
	}

	componentDidMount()
	{	


		this.setState(
		{
			courseCode: "CS 200",
			courseTitle: "Introduction to Programming"
		})
	}

	render()
	{	
		const styles =
		{
			CourseHeadingStyle:
			{
				color: 'white',
				margintop: 100
			}
		}	

		var buttonStyle=		
		{
			margin: 'auto',
			width: '20%',
		}

		var textbox=
		{
			display: "block",
			float: 'left',
			height: '32px',
			width: '70%',
			marginbottom: '10%'
		}

		var button=
		{
			display: 'block',
			float: 'left',
			height: '32px',
			marginleft: '210px',
			width: '15%'
		}

		return(
			<div>
				<Navbar/>
					<div className = 'row'>
						<div className = 'col-md-4 col-md-offset-4' >
							<div> 
								<h3 class = "page-header text-center" style = {styles.CourseHeadingStyle} > {this.state.courseCode} { this.state.courseTitle } </h3>
								<h4 align="center">Assignment Information</h4>	
									<div>
										<label className = 'control-label'>Assignment Name </label>
			        					<div class="column">
											<div class='row eq'>
												<input 
													style = {textbox}
													type = 'text'
													name = 'EditName'
													className = 'form-control'
													readonly = '1'
													defaultValue = 'Assignment 1'>
												</input>
					                			<input type='button' style={button} defaultValue='Edit' onClick={()=>{console.log('Edit Clicked')}}></input>
											</div>
										</div>
									</div>

									<div>
										<label className = 'control-label'>Due Date</label>
			        					<div class="column">
											<div class='row eq'>
												<input 
													style = {textbox}
													type = 'text'
													name = 'EditDate'
													className = 'form-control'
													readonly = '1'
													defaultValue = '30th December 2017'>
												</input>
					                			<input type='button' style={button} defaultValue='Edit' onClick={()=>{console.log('Edit Clicked')}}></input>
											</div>
										</div>
									</div>

									<div className = 'form-group' style = {buttonStyle}>
										<button class="btn btn-lg btn-success"> Save Changes </button>
									</div>
							</div>
						</div>
					</div>
			</div>
		)
	}
}