import {
  CONNECTION_FAILURE,
  REQUEST_USER,
  RECIEVE_USER,
} from './actions';

import {
  REQUEST_LOGIN,
  RECIEVE_LOGIN,
} from './components/header/loginheader/loginform/actions.js';

import {
  LOGOUT,
} from './components/header/userheader/actions.js';

const defaultState = {
  request_user: 'pending',
  request_login: 'pending',
  user: null,
  words: [],
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CONNECTION_FAILURE:
      return Object.assign({}, state, { request_user: 'failure' });
    case REQUEST_USER:
      return Object.assign({}, state, { request_user: 'ongoing' });
    case RECIEVE_USER:
      return Object.assign({}, state, { request_user: 'success', user: action.user, words: action.words });
    case REQUEST_LOGIN:
      return Object.assign({}, state, { request_login: 'ongoing'});
    case RECIEVE_LOGIN:
      return Object.assign({}, state, { request_login: 'success', user: action.user, words: action.words });
    case LOGOUT:
      return Object.assign({}, state, { user: null });
    default:
      return state
  }
}

export default reducer;
