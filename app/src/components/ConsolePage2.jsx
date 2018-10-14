import React from 'react';
import Navbar from './shared/Navbar'
import ReactAce from './ReactAce'

export default class CodeEditor extends React.Component 
{   

    render()
    {
    	var PageStyle=		
		{
			height: 'auto',
			width:'30%',
			display: 'inline-block',
			background:'rgba(225,225,225, 0.3)',
			// padding: 0,
			margin: 3
		}

		var Chatbox=		
		{
			height: '83%',
			width:'100%',
			display: 'inline-block'
		}

		var buttonStyle=		
		{
			margin: 'auto',
			width: '15%',
			float: 'center'
		}
		
		console.log('CoursePage props')
		console.log("back againnnn");
	    return(
	    	<div>
	    	 	<Navbar/>
		     	<form align="center">
			      <fieldset align="center">
			        <legend>Assignment 1</legend>
			        <div class="row" align="center">
			        	<div class="column" align="center" style={PageStyle}>
				          	<h3>Instructions</h3>
							   <div class="panel-group" role="tablist">
							    	<div class="panel panel-default">
								        <div class="panel-heading" role="tab" id="collapseListGroupHeading1">
								            <h4 class="panel-title">
								              <a class="collapsed" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="false" aria-controls="collapseListGroup1">
								               Questions
								              </a>
								            </h4>
								        </div>
								        <div id="collapseListGroup1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
								            <p>Write a function for Fibonacci</p>
								        </div>
							    	</div>
							  </div>
							   <div class="panel-group" role="tablist">
							    	<div class="panel panel-default">
								        <div class="panel-heading" role="tab" id="collapseListGroupHeading1">
								            <h4 class="panel-title">
								              <a class="collapsed" data-toggle="collapse" href="#collapseListGroup1" aria-expanded="false" aria-controls="collapseListGroup1">
								              Instructions
								              </a>
								            </h4>
								        </div>
								        <div id="collapseListGroup1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
								            <p>Write a code in using code editor</p>
								        </div>
							    	</div>
							  </div>							  
				        	</div>	        
			        	
			        	<div class="column" align="center" style={PageStyle}>
				          	<h3>Code Editor</h3>
				          	<ReactAce/>		          		
				           	<div class="row eq" align="left">        
				                <input type='button' style={buttonStyle} defaultValue='Run' onClick={()=>{console.log('Run Clicked')}}></input>
				                <input type='button' style={buttonStyle} defaultValue='Submit' onClick={()=>{console.log('Submit Clicked')}}></input> 
				           	</div>
				        </div>  
			        	<div class="column" align="center" style={PageStyle}>
				          	<h3>Chat Box</h3>
				          	<textarea placeholder="Type your comment here..." style={Chatbox}></textarea>
				          	<div class='row eq' align="left">
				           		<input type='button' style={buttonStyle} defaultValue='Post' onClick={()=>{console.log('Post Clicked')}}></input>
				          	</div>
				        </div>       				                
			        </div>
			      </fieldset>
			    </form>
		    </div>
	    );
	}
}

