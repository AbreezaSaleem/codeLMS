import React from 'react';
import CourseItem from './CourseItem'

export default class SemesterItem extends React.Component
{
	constructor()
	{
		super()
	
		this.state =
		{
			Courses: []
		}
	}

	render()
	{
		this.state.Courses=this.props.semesterCourses;
		let SemesterTitle=this.props.term;
		var SemesterHeadingStyle =
		{
			color:'white'
		}

		var SemesterItemStyle=
		{
			clear:'both',
			margin: 50

		}
		var createCourseItem = function(item, index)
		{
			return <CourseItem  CourseName={item} SemesterName= {SemesterTitle}/>
		};

		return (
			<div style={SemesterItemStyle }>
				<br></br>
				<br></br>
						<h1 style={SemesterHeadingStyle}> {this.props.term} </h1>
						{this.state.Courses.map(createCourseItem)}
				<br></br>
				<br></br>
			</div> 
			);
	}
}