import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';

class HomePage extends Component {
  state = {
    user: {}
  }

  saveUser = user => {
    fetch("http://localhost:7001/users", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password
          }
        }),
      })
      .then(response => response.json())
      .then(({user}) => this.setState({user}))
  }
render(){
  console.log(this.state)
  return (
    <div className="HomePage">
      <div>
        {this.state.user.username
          ? <Redirect to="/GamePageMemory" />
          : (
            <>
              <SignUp saveUser={this.saveUser}/>
              <Login />
            </>
          )
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
