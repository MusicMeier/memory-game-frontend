import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SignUp extends Component {

  state = {
    username: "",
    firstName: "",
    lastName: "",
    password: ""
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.saveUser(this.state)
<<<<<<< HEAD
=======
    // return <Redirect to="GamePageMemory" />
>>>>>>> 7b9845b7c2d73a1bdf6faceba8371bfa530ceb44
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1 className="signup-title">Sign Up!</h1>
          <label>Username</label>
          <input name="username" value={this.state.username} onChange={this.handleChange}></input>
          <label>First Name</label>
          <input name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
          <label>Last Name</label>
          <input name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
          <label>Password</label>
          <input name="password" value={this.state.password} onChange={this.handleChange}></input>
          <input type="submit" value="Sign Up!"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
