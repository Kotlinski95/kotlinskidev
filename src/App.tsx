import React from 'react';
import logo from './assets/logo.svg';
import Home from '../src/pages/home'
import Nav from '../src/components/nav'
import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Nav></Nav>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
