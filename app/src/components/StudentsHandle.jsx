import React from 'react'
import AssignmentItem from './AssignmentItem.jsx'
import Navbar from './shared/Navbar'

export default class App extends React.Component
{
  render()
  {	
  	var navLinks=
	[
		{
			title: "Home",
			href: "#"
		},
		{
			title: "Profile",
			href: "#"
		},
		{
			title: "Notifications",
			href: "#"
		}
	];

	var GradeComponents=
	[
		{
			type:"Assignments",
			subcomponents: [ "Assignment 1 ", "Assignment 2 ", "Assignment 3 "]
		},
		{
			type:"Quizzes",
			subcomponents: [ "Quiz 1 ", "Quiz 2 ", "Quiz 3 "]
		},
		{
			type:"Labs",
			subcomponents: [ "Lab 1 ", "Lab 2 ", "Lab 3 "]
		}
	];

	var createAssignmentItem = function(item){
      return <AssignmentItem Type={item.type}  subcomponents= {item.subcomponents} />
  	};

  	return (
  		<div>
  			<Navbar/>
  			<div>
  				<h1 class='text-dark header clearfix' > CS 200 Introduction to Programming </h1>
  			</div>
  			{ GradeComponents.map(createAssignmentItem) }
  		</div>
    );
  }
}