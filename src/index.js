import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import fetchUser from './actions';
import Root from './components/root';
import reducer from './reducer';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

// If already logged in, go to user homepage
const user = window.localStorage.getItem('user');
console.log(user);
if (user != null) {
  history.push({ pathname: '/home' });
  store.dispatch(fetchUser(user));
}

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);

module.hot.accept();
