import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from './history/History'

class GradeComponentItemNumber extends React.Component
{
	constructor()
	{
		super()
		this.onClick = this.onClick.bind(this)
	}

	componentWillMount()
	{
		window.addEventListener("hashchange", function(e) 
		{
			history.goBack()
		})

	}

	onClick(event)
	{
		history.push(
		{
			pathname: '/loginS/student/course/console',
			state: { hey: "abc"}
		})
		event.preventDefault()
	}

	render()
	{
		return <li className="list-group-item"  onClick= {this.onClick} >{ this.props.GradeComponentName}</li>
	}
}

/*
GradeComponentItemNumber.propTypes = 
{
	activeCourse: PropTypes.string.isRequired
}

function mapStateToProps(state)
{
	return { activeCourse: state.activeCourse }
}
*/
//connect(mapStateToProps, null)
export default  (GradeComponentItemNumber)
