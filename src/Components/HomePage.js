import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';

const baseUrl = "http://localhost:7001/"

class HomePage extends Component {
  state = {
    users: {},
    error: "",
    showLogin: false
  }

  toggleLogin = (value) => {
    this.setState({showLogin: value})
  }

  saveUser = users => {
    console.log(users)
    fetch(baseUrl + "users", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: users.username,
            firstName: users.firstName,
            lastName: users.lastName,
            password: users.password
        }),
      })
      .then(response => response.json())
      .then((users) => {
        this.setState(users);
        this.props.history.push('/GamePageMemory');
      })
    
  }

  login = (username, password) => {
    fetch(baseUrl + "login" , {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }, body: JSON.stringify({
          username,
          password
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result.token){
        localStorage.setItem('token', result.token)
        this.setState({
          users: result.users
        })
        this.props.history.push('/GamePageMemory')
      } else {
        this.setState({
          error: result.error
        })
      }
    })
  }

render(){
  // console.log(this.state)
  return (
    <div className="HomePage">
      <div>
      <h1 className='homepage-title'>Note-Set-Match</h1>
        {this.state.showLogin
          ? <Login toggleLogin={this.toggleLogin} login={this.login} error={this.state.error}/>
          : <SignUp toggleLogin={this.toggleLogin} saveUser={this.saveUser}/>
          
        }
      </div>
      <div className="button-div">
        <Link to="/GamePageMemory">
          <button className="game-button">Start Game</button>
        </Link>
      </div>
    </div>
    );
  }
}

export default HomePage;
