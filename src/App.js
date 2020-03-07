import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';
import ViewPage from './pages/ViewPage';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">List Page</Link>
              </li>
              <li>
                <Link to="/create">Form Page</Link>
              </li>
              <li>
                <Link to="/view">View Page</Link>
              </li>
            </ul>
          </nav> */}
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/create">
              <FormPage />
            </Route>
            <Route path="/view">
              <ViewPage />
            </Route>
            <Route path="/">
              <ListPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
