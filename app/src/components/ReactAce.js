import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addUserCode } from '../Actions/ConsolePageActions'

class CodeEditorTextArea extends Component 
{
  
  constructor()
  {
    super()
    this.onChange = this.onChange.bind(this)
  }


  onChange(newValue, e) 
  {
    console.log(newValue, e);
 
    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue()); // Outputs the value of the editor
    this.props.addCode(editor.getValue())
  }


  render() 
  {
    if(this.props.runButtonClicked)
    {
      console.log("run Button Clicked in Console");
    }

    if(this.props.submitButtonClicked)
    {
      console.log("submit Button Clicked in Console");
    }


    return (
      <ReactAce
        mode="javascript"
        theme="eclipse"
        onChange={this.onChange}
        style={{ height: '400px' }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}

CodeEditorTextArea.propTypes = 
{
  addCode: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
({
  addCode: (code) => dispatch(addUserCode(code))
});

export default connect(null, mapDispatchToProps)(CodeEditorTextArea)