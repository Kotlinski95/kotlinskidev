import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux'
import {store, RootState} from './store';

declare global {
  var _store: Store;
}

window._store = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
