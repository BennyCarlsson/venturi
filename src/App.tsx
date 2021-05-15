import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Departures from 'views/Departures';
import Destination from 'views/Destination';
import NotFound from 'views/NotFound';
import StartPage from 'views/StartPage';
import Menu from 'Menu';
import store from './redux/store';
import { Provider } from 'react-redux';

// Todo: use Browser router when not hosting on github pages
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <StartPage />
              </Route>
              <Route path="/venturi">
                <StartPage />
              </Route>
              <Route path="/departures">
                <Departures />
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
      </Provider>
    </div>
  );
}

export default App;
