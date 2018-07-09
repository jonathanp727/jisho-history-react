import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import fetchUser from './actions';
import Root from './components/root';
import reducer from './reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  form: formReducer,
  main: reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

// If already logged in, go to user homepage
const userId = window.localStorage.getItem('userId');
if (userId != null) {
  history.push({ pathname: '/home' });
  store.dispatch(fetchUser(userId, window.localStorage.getItem('userToken')));
}

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);

module.hot.accept();
