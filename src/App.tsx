import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Favorites from 'views/Favorite';
import Destination from 'views/Destination';
import NotFound from 'views/NotFound';
import StartPage from 'views/StartPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route path="/venturi">
              <StartPage />
            </Route>
            <Route path="/favorites">
              <Favorites />
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
