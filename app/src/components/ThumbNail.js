import React from 'react'
import { browserHistory } from 'react-router'
import { Route, Redirect } from 'react-router-dom'

import history from './history/History'

export default class ThumbNail extends React.Component 
{
	constructor()
	{
		super()

		this.state = 
		{
			courseSubComponents:{} 
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick(event)
	{
		let courseCode = ((this.props.CourseTitle).split('|'))[0];
		let Semester=this.props.SemesterName;
		console.log(Semester)
		this.props.getSubcomponents({CourseCode:courseCode, SemesterName:Semester})
		.then(response =>
		{
			this.setState(
			{
				courseSubComponents:response.data	
			});

			let courseCode =((this.props.CourseTitle).split('|'))[0]; // repetition here.... alina pls fix this -abreeza
			let	courseTitle = ((this.props.CourseTitle).split('|'))[1]; 

			history.push(
			{
				pathname: '/loginS/student/course',
				state: { CourseCode : courseCode, CourseTitle: courseTitle, SubComponents:this.state.courseSubComponents}
			})
		})
		event.preventDefault();	
	}

	render()
	{
		var ThumbNailStyle=		
		{
			width:200,
			height: 300,
			margin:40,
			fontSize:20,
			overflow:'hidden',
			verticalalign:'top',
			float:'left',
			background:"#f1f4d8"
		}

		var ImageStyle=
		{
			height:'auto'
		}
	
		//console.log('thumbnail')
		//console.log(this.props)
		let courseCode =((this.props.CourseTitle).split('|'))[0];
		let	courseTitle = ((this.props.CourseTitle).split('|'))[1];	
		return(
			<div style={ThumbNailStyle} display="inline-block" onClick={this.onClick} className="thumbnail">
				<img  src='/images/icon.png'  class="img-circle"/>
				<p>{courseCode}</p>
				<p>{courseTitle}</p>
			</div> 			
		)
	}
}


