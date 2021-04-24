import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {Store} from 'redux';
import store from './store';
declare global {
  var _store: Store;
}

window._store = store;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
