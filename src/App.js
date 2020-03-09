import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';
import ViewPage from './pages/ViewPage';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
      </Router>
    </div>
  );
}

export default App;
