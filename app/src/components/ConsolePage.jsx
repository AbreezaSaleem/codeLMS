import React from 'react';
import Navbar from './shared/Navbar'
import CodeEditorTextArea from './ReactAce'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import io from 'socket.io-client'

import history from './history/History'
import { sendCodeToTheServer, uploadCodeToGitlab, analyzeCode } from '../Actions/ConsolePageActions'


let socket

class CodeEditor extends React.Component 
{   
	constructor()
	{
		super()
		socket=io.connect('http://localhost:8080')

		this.state = 
		{
			codeOutput: 'wtf',
			submitButtonClicked:false,
			runButtonClicked:false 
		}
		this.submitButton = this.submitButton.bind(this)
		this.runButton = this.runButton.bind(this)
		this.uploadButton = this.uploadButton.bind(this)
	}

	
	submitButton(event)
	{
		event.preventDefault();
		console.log("Submit Button Clicked")
		this.setState(
		{
			submitButtonClicked:true
		})
		console.log('user code is')
		console.log(this.props.state.userCode)
		/*this.props.sendCodeToSever(this.props.userCode).then( response => 
		{
			console.log('here')
			console.log( response.data.output )
			this.setState({ codeOutput: response.data.output, errors: response.data.errors }) 
		console.log('updated state')
		console.log(this.state)
		})*/
		this.props.sendCode(socket, this.props.state.userCode)
		socket.on('returnOutput', ret => 
		{
			console.log(ret.output)
			console.log(ret.errors)
		})
	}

	runButton(event)
	{
		event.preventDefault();
		console.log("Run Button Clicked")
		this.setState(
		{
			runButtonClicked:true
		})
		//this.props.sendCodeToSever(this.props.userCode).then( response => this.setState({ codeOutput: response.data.effoff }) )
		this.props.analyzeUserCode(socket, this.props.state.userCode)
		socket.on('analyzeCode', ret => 
		{
			console.log(ret)
			history.push(
			{
				pathname: '/loginS/student/course/console/report',
				state: 
				{ 
					username : this.props.state.currentUsername.currentUsername,
					course: this.props.state.activeCourse.activeCourse,
				 	report: ret.results,
				 	testCases: ret.test_cases
				}
			})	
		})
		//this.props.sendCode(socket, "heyy");
	}

	uploadButton(event)
	{
		event.preventDefault()
		// send code, username and dir name
		let data = this.props.state
		console.log('uploading')
		console.log(data)
		let courseCode = (( data.activeCourse.activeCourse).split('|'))[0]
		console.log('code')
		console.log(courseCode)
		this.props.uploadCode(socket, data.userCode.userCode, data.currentUsername.currentUsername, courseCode)
	}

    render()
    {
    	const sendCode  = this.props.sendCode
	    return(
	    	<div>
	    		<input type='button' defaultValue='Upload code' onClick={ this.uploadButton }></input> 
	    	 	<Navbar/>
		     	<form>
			      <fieldset>
			        <legend align='left'> {this.props.location.state.GradeComponentName}</legend>
			        <div class="modal-body row">
			        	<div class='col-lg-2 col-md-4 col-sm-6'>
				          	<h3 align="left">Instructions</h3>
				          	<input type = "text"
				                id = "myText"
				                defaultValue = "Write a function for Sum" />
			        	</div>         
			        	<div class='col-lg-4 col-md-6 col-sm-8'>
				          	<h3>Code Editor</h3>
				          	< CodeEditorTextArea runButtonClicked={this.state.runButtonClicked } submitButtonClicked={this.state.submitButtonClicked } />			          		
				           	<div class="row eq">        
				                <input type='button' defaultValue='Submit' onClick={ this.submitButton }></input>
				                <input type='button' defaultValue='Run' onClick={ this.runButton }></input> 
				           	</div>
				        </div>  
			        	<div class='col-lg-6 col-md-8 col-sm-10'>
				          	<h3>Chat Box</h3>
				          	<textarea id = "myTextArea"
				                rows = "10"
				                cols = "20"
				                defaultValue="Type your comment...">
				            </textarea>
				          	<div class='row eq'>
				           		<input type='button' defaultValue='Post' onClick={()=>{console.log('Post Clicked')}}></input>
				          	</div>
				          	<h1>
				          		{this.state.codeOutput}
				          	</h1>
				        </div>       				                
			        </div>
			      </fieldset>
			    </form>
		    </div>
	    );
	}
}


CodeEditor.propTypes = 
{
	state: PropTypes.object.isRequired,
	sendCode: PropTypes.func.isRequired,
	uploadCode: PropTypes.func.isRequired,
	analyzeUserCode: PropTypes.func.isRequired
}


const mapDispatchToProps = (dispatch) =>
({
	sendCode: (socket, code) => dispatch(sendCodeToTheServer(socket, code)),
	uploadCode: (socket, code, name, dirname) => dispatch(uploadCodeToGitlab(socket, code, name, dirname)),
	analyzeUserCode: (socket, code) => dispatch(analyzeCode(socket, code))
});



function mapStateToProps(state)
{
	console.log(state)
	return {state} 		// TAKE ONLY THE THINGS U NEED >:(
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);