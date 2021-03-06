import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';
import ViewPage from './pages/ViewPage';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/purrrfect-match">
        <Header />
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
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
      </Router>
    </div>
  );
}

export default App;
