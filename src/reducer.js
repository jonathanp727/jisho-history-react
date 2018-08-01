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

import {
  OPEN_WORD_ELEMENT,
} from './components/homePage/dateElement/dateWordElement/actions.js';

const defaultState = {
  request_user: 'pending',
  request_login: 'pending',
  user: null,
  words: [],
  curWord: null
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
    case OPEN_WORD_ELEMENT:
      if(state.curWord === action.word)
        return Object.assign({}, state, { curWord: null });
      else
        return Object.assign({}, state, { curWord: action.word });
    default:
      return state
  }
}

export default reducer;
