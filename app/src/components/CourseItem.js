import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ThumbNail from './ThumbNail'
import { getSubcomponentsNamesOnCoursePage } from '../Actions/CoursePageActions'

class CourseItem extends React.Component
{
	render()
	{
		var CourseItemStyle=
		{
			marginRight: "50px"
		};
		const getSubcomponents = this.props.getSubcomponents
		return (
			<div style={ CourseItemStyle }>
				<ThumbNail getSubcomponents={getSubcomponents} CourseTitle={ this.props.CourseName } SemesterName= { this.props.SemesterName}/>
			</div>
		);
	}
}

/*
CourseItem.propTypes = 
{
	getSubcomponentsNamesOnCoursePage: PropTypes.func.isRequired
}
*/

const mapDispatchToProps = (dispatch) =>
({
	getSubcomponents: (courseData) => dispatch(getSubcomponentsNamesOnCoursePage(courseData))
});


export default connect(null, mapDispatchToProps) (CourseItem);