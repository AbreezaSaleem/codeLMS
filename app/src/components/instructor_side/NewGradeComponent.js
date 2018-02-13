import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getStudentsEnrolled, createRepositories } from '../../Actions/CoursesActions'
import history from '../history/History'

class NewGradeComponent extends React.Component
{
	constructor()
	{
		super()
		this.state =
		{
			studentsEnrolled: [],
			courseCode: '',
			courseTitle: ''
		}
		this.onCreate = this.onCreate.bind(this)
	}

	componentWillMount()
	{
		window.addEventListener("hashchange", function(e) 
		{
			history.goBack()
		})

	}

	componentDidMount()
	{	
		let CourseTitle = this.props.location.state.courseTitle.activeCourse

		this.setState(
		{
			courseCode: ((CourseTitle).split('|'))[0],
			courseTitle: ((CourseTitle).split('|'))[1]
		}, () =>
		{
			/*this.props.getStudentsEnrolled({courseCode: this.state.courseCode})
			.then(response =>
			{
				this.setState(
				{
					studentsEnrolled: response.data.studentList.students_enrolled,
				})
				console.log('students enrolled are!!!')
				console.log(this.state.studentsEnrolled)
			})*/
			this.setState( // uhhh u gotta do the spilliting here! fak
			{
				studentsEnrolled: "18100115"  
			})
		})
	}

	onCreate(event)
	{
		event.preventDefault()
		this.props.createRepos(this.state.courseCode, this.state.studentsEnrolled).then(response => console.log('bleh)'))
	}


	render()
	{
		return(
			<div>
				<h1> { this.props.location.state.courseTitle.activeCourse } </h1>
				<button class = 'btn-custom' onClick = { this.onCreate } > Create! </button>
			</div>
		)
	}
}

const mapDisptachToProps = (dispatch) =>
({
	getStudentsEnrolled: (course) => dispatch(getStudentsEnrolled(course)),
	createRepos: (course, students) => dispatch(createRepositories(course, students))
});


export default connect(null, mapDisptachToProps) (NewGradeComponent)