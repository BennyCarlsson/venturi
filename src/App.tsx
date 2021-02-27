import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StartPage from './src/views/StartPage';
import Favorites from './src/views/Favorite';
import Destination from './src/views/Destination';
import NotFound from './src/views/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route path="/favorites">
            <Favorites/>
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">About</Link>
            </li>
            <li>
              <Link to="/destination">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
    </div>
  );
}

export default App;
