import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { fetchUser } from './actions';
import Root from './components/root';
import reducer from './reducer';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  form: formReducer,
  main: reducer,
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
const userId = window.localStorage.getItem('userId');
if (userId != null) {
  store.dispatch(fetchUser(userId, window.localStorage.getItem('userToken')));
  store.dispatch(push({ pathname: '/home' }));
}

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);

module.hot.accept();
