import React from 'react';
import Navbar from './shared/Navbar'
import CodeEditorTextArea from './ReactAce'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { sendCode } from '../Actions/ConsolePageActions'

class CodeEditor extends React.Component 
{   
	constructor()
	{
		super()
		this.state = 
		{
			submitButtonClicked:false,
			runButtonClicked:false 
		}
		this.submitButton = this.submitButton.bind(this)
		this.runButton = this.runButton.bind(this)
		
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
		console.log(this.props.userCode)
		this.props.sendCodeToSever(this.props.userCode).then( (response) => console.log(response.data) )
	}

	runButton(event)
	{
		event.preventDefault();
		console.log("Run Button Clicked")
		this.setState(
		{
			runButtonClicked:true
		})
		this.props.sendCodeToSever(this.props.userCode).then( (response) => console.log(response.data) )

		//this.props.sendCode(socket, "heyy");
	}

    render()
    {
    	const sendCode  = this.props.sendCode
	    return(
	    	<div>
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
	userCode: PropTypes.object.isRequired,
	sendCodeToSever: PropTypes.func.isRequired
}


const mapDispatchToProps = (dispatch) =>
({
	sendCodeToSever: (code) => dispatch(sendCode(code))
});



function mapStateToProps(state)
{
	return { userCode: state.userCode }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);