import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import history from './history/History'
import { addActiveAssignment } from '../Actions/GCActions'

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
		console.log('I clicked: ' + this.props.GradeComponentName)
		this.props.activeAssignment(this.props.GradeComponentName)
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


GradeComponentItemNumber.propTypes = 
{
	activeAssignment: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
({
	activeAssignment: (assignment) => dispatch(addActiveAssignment(assignment))
});

export default connect(null, mapDispatchToProps)(GradeComponentItemNumber)
