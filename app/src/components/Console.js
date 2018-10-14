import Console from 'react-console'
import React from 'react';



//var Console = require('react-console');
export default class ConsolePage extends React.Component
{ 
	render()
	{
		return (
			<Console command={this.command} toggle={this.toggleConsole} alive={this.state.log.alive} log={this.state.log}  />  
		);
	}
	command(value) 
	{
		// value is text box value 
	},
	toggleConsole(e) 
	{
		this.setState({ log: {alive: !this.state.log.alive} });
	},
	openConsole() 
	{
		this.setState({ log: {alive: true} });
	},
	logger(data) {
		var log = {
			alive: this.state.log,
			message: data.message,
			doc: data.doc,
			error: data.error,
		};
		
		this.setState({log : log});
	},
	debugLogger(msg) {
		var log = {
			alive: this.state.log,
			message: msg
		};
		
	this.setState({log : log});
	}
}