import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Favorites from 'views/Favorite';
import Destination from 'views/Destination';
import NotFound from 'views/NotFound';
import StartPage from 'views/StartPage';
import Menu from 'Menu';

// Todo: use Browser router when not hosting on github pages
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="Content">
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
            <Route path="/options">
              <Destination />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Menu />
      </HashRouter>
    </div>
  );
}

export default App;
