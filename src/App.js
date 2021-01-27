import './App.css';
import HomePage from './Components/HomePage'
import { Route, Switch } from 'react-router-dom'
import GamePageMemory from './Components/GamePageMemory';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import {useState} from 'react'

function App() {
  const [user, setUser] = useState([])

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}>
          </Route>
          <Route path="/login" render={(routerProps) => {
            return <Login user={user} setUser={setUser} {...routerProps}/> 
          }} 
          />
          <Route path="/GamePageMemory" render={(routerProps) => {
            return <GamePageMemory {...routerProps}/> 
          }} 
          />
        </Switch>
      </div>
    );

}

export default App;

