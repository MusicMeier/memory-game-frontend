import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = ({login, error, toggleLogin}) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = event => setUsername(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    login(username, password)
  }

  return (
    <div className='HomePage'> 
      <div>
        <h1 className='homepage-title'>Note-Set-Match</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <label>Username</label>
        <input name="username" value={username} onChange={handleUsernameChange}/>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
        {error 
          ? <p style={{color: 'red'}}>{error}</p>
          : null}
        <input className='form-button' type="submit" value="Login"/>
        <p className='change-page-sentence'>Don't have an account? <button onClick={() => toggleLogin(false)}>Signup!</button></p>
      </form>
      
    </div>
  );
}

export default Login;
