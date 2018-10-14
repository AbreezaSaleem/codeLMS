import React from 'react';
import ReactTable from "react-table"
import "react-table/react-table.css"
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

class Report extends React.Component 
{
	constructor()
	{
		super()

		this.state = 
		{
			data:'',
			testCasesResults:'',
			username: '',
			courseCode: '',
			courseTitle: '',
			assignmentTitle: ''
		}
	}

	componentWillMount()
	{
		const feedback = this.props.location.state
		this.setState(
		{
			data: feedback.report, 
			testCasesResults: feedback.testCases,
			username: feedback.username, 
			courseCode: feedback.course.split('|')[0],
			courseTitle: feedback.course.split('|')[1],
			assignmentTitle: this.props.state.activeAssignment.activeAssignment
		})
	}

	render() 
	{
		console.log('results are')
		const data = this.props.location.state.report;
		console.log(this.props.location)
		console.log(data)
		console.log('arsehole')
		console.log(this.state)
		let meh= this.props.state.activeAssignment.activeAssignment
		console.log('ACTIVE ASSIGNMENT')
		console.log(meh)

/*return(
  <ReactTable className = '-striped -highlight'
	 minRows={3}
	 data={data}
	 columns={columns}
	 getTrProps={(state, rowInfo, column) => {
	 return {
		style: {
		  background: rowInfo.row.Offset > 20 ? '#cc443b' : void 0
		}
	 };
  }}/>);*/
		const columns = 
		[{
			Header: 'Name',
			accessor: 'Name' // String-based value accessors!
		}, 
		{
			Header: 'Offset',
			accessor: 'Offset',
			Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		}]
	
		var numCases = Object.keys(data[0]).length - 2
		var temp = [...Array(numCases).keys()].map(x => ++x)
		console.log(temp)
		temp.map(num => columns.push( {id: 'Test Case ' + num, Header: 'Test Case ' + num, accessor: d => d[num] } ) )

		var createTestCasesResults = function(data, index)
		{
			return <li style = {styles.listStyle} key={index} > Test Case {data.TestCase}: {data.result}  </li>
		};

		return(
		<div>
			<h3 style = {styles.headingStyle}> Report for {this.state.assignmentTitle} </h3>
			<h3 style = {styles.headingStyle}> { this.state.username } </h3>
			<h3 style = {styles.headingStyle}> {this.state.courseTitle} </h3>
			<h3 style = {styles.headingStyle}> {this.state.courseCode} </h3>
			<ReactTable className = '-striped -highlight'
			minRows={this.state.data.length}
			showPaginationBottom={false}
			data={this.state.data}
			columns={columns}/>
			{ this.state.testCasesResults.map(createTestCasesResults) }
		</div>);

	}
}


Report.propTypes = 
{
	state: PropTypes.object.isRequired
}

function mapStateToProps(state)
{
	console.log(state)
	return {state} 		// y me lyk dis
}


export default connect(mapStateToProps, null)(Report)


const styles = 
{
	headingStyle:
	{ 
		color: '#b48608',
		fontFamily: 'Droid serif',
		fontSize: 24,
		fontWeight: 400, 
		fontStyle: 'italic', 
		textAlign: 'center' 
	},
	listStyle:
	{ 
		color: '#b48608',
		fontFamily: 'Droid serif',
		fontSize: 18,
		fontWeight: 400, 
		fontStyle: 'italic', 
		textAlign: 'center' 
	}
}