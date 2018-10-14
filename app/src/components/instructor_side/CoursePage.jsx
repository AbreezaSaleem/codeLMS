import React from 'react'
import AssignmentItem from './AssignmentItem'
import Navbar from '../shared/Navbar'

export default class CoursePage extends React.Component
{
	componentWillMount()
	{
		window.addEventListener("hashchange", function(e) 
		{
			history.goBack()
		})

	}
	render()
	{	
		console.log(this.props.location.state)
		let CourseCode =this.props.location.state.CourseCode;
		let CourseTitle = this.props.location.state.CourseTitle; 
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
			return <AssignmentItem Type={item.type}  subcomponents= {item.subcomponents} CourseCode = { CourseCode } CourseTitle = { CourseTitle } />
			};
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