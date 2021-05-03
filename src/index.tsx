import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux'
import { store } from './store';
import { CookiesProvider } from 'react-cookie';

declare global {
  var _store: Store;
}

window._store = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <Router>
          <App />
        </Router>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
