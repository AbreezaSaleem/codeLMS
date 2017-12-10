import React from 'react'
import Logo from './Logo.js'
import Input from './Input.js'

export default class Layout extends React.Component
{
  render()
  {
    const margin = 430
    
      console.log(this.props.children)
    return (
      <div>
        <h1 style = {styles.loginStyle}> Login </h1>
          <div style = {styles.container}>
            <Logo margin = {margin} /><br/><br/>
            <Input/>
          </div>
      </div>
    );
  }
}

const styles =
{
  loginStyle:
  {
    textAlign: 'center',
    backgroundColor: '#1A237E',
    color: 'white',
    height: 50
  },
  container:
  {
    marginLeft: 500,
    marginTop: 10,
    marginRight: 400
  }
}
