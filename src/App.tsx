import React from 'react';
import './App.css';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';

import Favorites from 'views/Favorite';
import Destination from 'views/Destination';
import NotFound from 'views/NotFound';
import StartPage from 'views/StartPage';

// Todo: use Browser router when not hosting on github pages
function App() {
  return (
    <div className="App">
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
