import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_style.scss';
import App from './App';
import { Store } from 'redux';
import { Provider } from 'react-redux'
import { store } from './store';
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

declare global {
  var _store: Store;
  var dataLayer: any;
}
window._store = store;
const TRACKING_ID = "UA-196673480-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


const history = createBrowserHistory();
// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <Router history={history}>
          <App />
        </Router>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
reportWebVitals();
