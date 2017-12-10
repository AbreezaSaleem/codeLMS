import React from 'react';
import history from '../history/History'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class GradeComponentItemNumber extends React.Component
{
	constructor()
	{
		super()
		this.onClick = this.onClick.bind(this)
	}

	onClick(event)
	{
		history.push(
		{
			pathname: '/loginI/instructor/course/roster',
			state: { courseTitle: this.props.activeCourse }
		})
		event.preventDefault()
	}

	render()
	{
		//console.log('GradeComponentItemNumber')
		//console.log(this.props.activeCourse)
		return(
			<div>
				<div class = 'pull-left'>
					<li className="list-group-item">{ this.props.GradeComponentName}</li>
				</div>
				<div class = 'pull-right'>
					<div>
						<button class = 'btn-custom' onClick = { this.onClick } > Solution </button>
						<button class = 'btn-custom btn-custom btn-hover'> Mean </button>
						<button class = 'btn-custom hover'> Edit </button>
					</div>
				</div>
			</div>
		)

	}
}


GradeComponentItemNumber.propTypes = 
{
	activeCourse: PropTypes.string.isRequired
}

function mapStateToProps(state)
{
	return { activeCourse: state.activeCourse }
}

export default connect(mapStateToProps, null) (GradeComponentItemNumber)
