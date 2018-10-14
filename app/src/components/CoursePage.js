import React from 'react'
import AssignmentItem from './AssignmentItem'
import Navbar from './shared/Navbar'

export default class CoursePage extends React.Component
{
	render()
	{	
		console.log('CoursePage props')
		console.log(this.props)
		console.log(this.props.location) // the data from the backend will be available in this thingy
		let CourseCode =this.props.location.state.CourseCode;
		let CourseTitle = this.props.location.state.CourseTitle;  // where is this coming from???
		let AssignmentTitles = this.props.location.state.SubComponents.CourseInfo.assignments;
		let QuizzesTitles = this.props.location.state.SubComponents.CourseInfo.quizzes;
		let LabsTitles = this.props.location.state.SubComponents.CourseInfo.labs;

	var GradeComponents=
	[
		{
			type:"Assignments",
			subcomponents: AssignmentTitles
		},
		{
			type:"Quizzes",
			subcomponents:QuizzesTitles
		},
		{
			type:"Labs",
			subcomponents: LabsTitles		
		}
	];

	var CourseHeadingStyle=
	{
		color:'white'
	}

	var createAssignmentItem = function(item)
	{
		return <AssignmentItem Type={item.type}  subcomponents= {item.subcomponents} />
		};
		console.log('grade Component')
		console.log(GradeComponents)
		return (
			<div>
				<Navbar/>
				<div>
					<div>
						<h1 style={CourseHeadingStyle}> {CourseCode} {CourseTitle}</h1>
					</div>
					{ GradeComponents.map(createAssignmentItem) }
				</div>
			</div>
		);
	}
}