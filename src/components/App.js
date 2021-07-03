import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Test from './Test/Test';
import TestCreate from './Test/TestCreate/TestCreate';
import history from '../history';
import './App.css';
import './css/Theme.css';

const App = () => (
  <div>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/tests" exact component={Test} />
          <Route path="/tests/create" exact component={TestCreate} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
