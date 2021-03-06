import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { organizationReducer } from './redux/reducers/organizationReducer';
import { supporterReducer } from './redux/reducers/supporterReducer';
import { loginReducer } from './redux/reducers/loginReducer';
import { signUpReducer } from './redux/reducers/signUpReducer';
import { campaignsReducer } from './redux/reducers/campaignsReducer';

import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
  organizationReducer,
  supporterReducer,
  loginReducer,
  signUpReducer,
  campaignsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
