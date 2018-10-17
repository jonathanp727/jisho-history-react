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

import {
  REQUEST_JOIN,
  RECIEVE_JOIN,
} from './components/welcomePage/signupForm/actions.js';

import {
  SORT_BY_NEW,
  SORT_BY_TOP,
} from './components/homePage/actions.js';

const defaultState = {
  request_user: 'pending',
  request_login: 'pending',
  request_join: 'pending',
  user: null,
  words: [],
  curWord: null,
  isSortedNew: true,
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
      localStorage.removeItem('jisho-history-userId');
      localStorage.removeItem('jisho-history-userToken');
      return Object.assign({}, state, { user: null });
    case OPEN_WORD_ELEMENT:
      if(state.curWord === action.word)
        return Object.assign({}, state, { curWord: null });
      else
        return Object.assign({}, state, { curWord: action.word });
    case REQUEST_JOIN:
      return Object.assign({}, state, { request_join: 'ongoing' });
    case RECIEVE_JOIN:
      return Object.assign({}, state, { request_Join: 'success', user: action.user, words: [] });
    case SORT_BY_NEW:
      state.words.sort((a, b) => {
        return b.latestIncrement - a.latestIncrement;
      });
      return Object.assign({}, state, { isSortedNew: true });
    case SORT_BY_TOP:
      state.words.sort((a, b) => {
        return a.count - b.count;
      });
      return Object.assign({}, state, { isSortedNew: false });
    default:
      return state
  }
}

export default reducer;
