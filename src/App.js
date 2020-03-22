import React from 'react';
import './App.css';
import Display from './Components/DisplayJsonComponent';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
          <Switch>
              <Route path="/" exact component={LoginPage} />
              <Route path="/Display"  component={Display} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
