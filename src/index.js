import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, push, ConnectedRouter } from 'connected-react-router';

import App from './App';
import { fetchUser } from './services/api/actions';
import uiReducer from './services/ui/reducer';
import apiReducer from './services/api/reducer';
import './reset.css'

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  form: formReducer,
  ui: uiReducer,
  api: apiReducer,
});

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(history),
  )
);

// If already logged in, go to user homepage
const userId = localStorage.getItem('jisho-history-userId');
if (userId != null) {
  store.dispatch(fetchUser(userId, localStorage.getItem('jisho-history-userToken')));
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App userId={userId} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

if (userId != null) {
  store.dispatch(push('/home'));
}

module.hot.accept();
