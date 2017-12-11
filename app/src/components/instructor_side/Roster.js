import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getStudentsEnrolled } from '../../Actions/CoursesActions'
import history from '../history/History'
import Loading from '../shared/Loading'
import Navbar from '../shared/Navbar'

class Roster extends React.Component
{
	constructor()
	{
		super()
		this.state =
		{
			studentsEnrolledOriginal: [],
			studentsEnrolled: [],
			studentsFound: false,
			courseCode: '',
			courseTitle: ''
		}
		this.onChange = this.onChange.bind(this)
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
			this.props.getStudentsEnrolled({courseCode: this.state.courseCode})
			.then(response =>
			{
				this.setState(
				{
					studentsEnrolledOriginal : response.data.studentList.students_enrolled,
					studentsEnrolled: response.data.studentList.students_enrolled,
					studentsFound: true
				})
			})
		})
	}

	onChange(event)
	{
		console.log('calling on change!')
		console.log(event.target.value)
		let newArr = this.state.studentsEnrolledOriginal.filter(student => student.toLowerCase().indexOf(event.target.value.toLowerCase()) == 0 )
		console.log(newArr)
		event.preventDefault()
		this.setState( { studentsEnrolled: newArr } )
	}

	render()
	{	
		const styles =
		{
			CourseHeadingStyle:
			{
				color: 'white'
			}
		}	
	
		var createStudentList = function(item, index)
		{
			return <StudentsEnrolled name = { item }  />
		};

		return(
			<div>
				<Navbar/>
				{ this.state.studentsFound?
					<div className = 'row'>
						<div className = 'col-md-4 col-md-offset-4' >
							<div> 
								<h3 class = "page-header text-center" style = {styles.CourseHeadingStyle} > { this.state.courseTitle } </h3>
								<input class = "search-bar" type="search" placeholder="Search" onChange = {this.onChange}/>
								<ul>
									{ this.state.studentsEnrolled.map(createStudentList) } 
								</ul>
							</div>
						</div>
					</div>
					: <Loading/> 
				}
			</div>
		)
	}
}


Roster.propTypes = 
{
	getStudentsEnrolled: PropTypes.func.isRequired
}

const mapDisptachToProps = (dispatch) =>
({
	getStudentsEnrolled: (course) => dispatch(getStudentsEnrolled(course))
});



class StudentsEnrolled extends React.Component
{
	
	render()
	{
		return(
			<li> <h4 class="text-muted "> { this.props.name } </h4> </li>
		)

	}

}

export default connect(null, mapDisptachToProps) (Roster)