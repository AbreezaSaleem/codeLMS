import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from '../history/History'
import Navbar from '../shared/Navbar'
import SemesterItem from './SemesterItem'

import { addEnrolledCourses } from '../../Actions/CoursesActions'

class Tiles extends React.Component
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
		console.log('wtf')
		var SemesterInfo=[]
		let incomingCourseInfo=this.props.location.state.InstructorCourses;

		this.props.enrolledCourses(incomingCourseInfo) // this is an action! <3
		console.log('fucking done')
		var semesterName, SemesterCourseInfo;
		
		for (var i = 0; i < incomingCourseInfo.length; i++)
		{	
			SemesterCourseInfo=(incomingCourseInfo[i]).split(",");
			semesterName=SemesterCourseInfo.shift();
			SemesterInfo.push({name:semesterName, enrolledInCourses:SemesterCourseInfo }) 
		};		

		var createSemesterItem = function(item, index)
		{
			return <SemesterItem key={ item.name + index }  term={ item.name } semesterCourses={ item.enrolledInCourses } />
		};
		console.log(SemesterInfo)
		return (
			<div>
				<Navbar/>
				<div>
					{ SemesterInfo.map(createSemesterItem) }
				</div>
			</div>
		);
	}
}


Tiles.propTypes = 
{
	enrolledCourses: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
({
	enrolledCourses: (courses) => dispatch(addEnrolledCourses(courses))
});

export default connect(null, mapDispatchToProps)(Tiles)
