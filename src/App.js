import './App.css';
import HomePage from './Components/HomePage'
import { Route, Link, Switch, } from 'react-router-dom'
import GamePageMemory from './Components/GamePageMemory';
import SignUp from './Components/SignUp'
import {useState} from 'react'

function App() {
  const [user, setUser] = useState([])

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}>
          </Route>
          <Route path="/SignUp" render={(routerProps) => {
            return <SignUp user={user} setUser={setUser} {...routerProps}/> 
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

