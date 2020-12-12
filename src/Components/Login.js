import React, { useState } from 'react';

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = event => setUsername(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <label>Username</label>
        <input name="username" value={username} onChange={handleUsernameChange}/>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
        <input type="submit" value="Login"/>
      </form>
      
    </div>
  );
}

export default Login;
