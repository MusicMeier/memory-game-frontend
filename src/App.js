import './App.css';
import HomePage from './Components/HomePage'
import { Route, Link, Switch, } from 'react-router-dom'
import GamePageMemory from './Components/GamePageMemory';

function App() {

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/GamePageMemory" render={(routerProps) => {
            return <GamePageMemory {...routerProps}/> 
          }} 
          />
        </Switch>
      </div>
    );

}

export default App;

