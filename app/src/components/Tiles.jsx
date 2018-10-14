import React from 'react'
import history from './history/History'

import Navbar from './shared/Navbar'
import SemesterItem from './SemesterItem'

export default class App extends React.Component
{
	componentWillMount()
	{
		window.addEventListener("hashchange", function(e) 
		{
			history.goBack()
		})

	}
	
	render()
	{	 /*
			You can't have commas and pipes in SemesterName, CourseCode and Course Titles.
		*/
		//console.log('in tiles')
		//console.log(history.location)
		//console.log(window.history)
		var SemesterInfo=[]
		let incomingCourseInfo=this.props.location.state.StudentCourses;
		console.log("incomingCourseInfo")
		console.log(incomingCourseInfo)

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



