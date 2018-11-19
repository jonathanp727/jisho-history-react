import {
  CONNECTION_FAILURE,
  REQUEST_USER,
  RECIEVE_USER,
  REQUEST_LOGIN,
  RECIEVE_LOGIN,
  LOGOUT,
  REQUEST_JOIN,
  RECIEVE_JOIN,
  REQUEST_PARSE_IMAGE,
  RECIEVE_PARSE_IMAGE,
} from './actions';

import {
  SORT_BY_NEW,
  SORT_BY_TOP
} from '../ui/actions';

const defaultState = {
  requestUser: 'pending',
  requestLogin: 'pending',
  requestJoin: 'pending',
  requestParseImage: 'pending',
  user: null,
  words: [],
  imageParsing: null,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CONNECTION_FAILURE:
      return Object.assign({}, state, { requestUser: 'failure' });
    case REQUEST_USER:
      return Object.assign({}, state, { requestUser: 'ongoing' });
    case RECIEVE_USER:
      return Object.assign({}, state, { requestUser: 'success', user: action.user, words: action.words });
    case REQUEST_LOGIN:
      return Object.assign({}, state, { requestLogin: 'ongoing'});
    case RECIEVE_LOGIN:
      return Object.assign({}, state, { requestLogin: 'success', user: action.user, words: action.words });
    case LOGOUT:
      localStorage.removeItem('jisho-history-userId');
      localStorage.removeItem('jisho-history-userToken');
      return Object.assign({}, state, { user: null });
    case REQUEST_JOIN:
      return Object.assign({}, state, { requestJoin: 'ongoing' });
    case RECIEVE_JOIN:
      return Object.assign({}, state, { requestJoin: 'success', user: action.user, words: [] });
    case SORT_BY_NEW:
      state.words.sort((a, b) => {
        return b.latestIncrement - a.latestIncrement;
      });
      return Object.assign({}, state);
    case SORT_BY_TOP:
      state.words.sort((a, b) => {
        return b.count - a.count;
      });
      return Object.assign({}, state);
    case REQUEST_PARSE_IMAGE:
      return Object.assign({}, state, { requestParseImage: 'ongoing' });
    case RECIEVE_PARSE_IMAGE:
      return Object.assign({}, state, { requestParseImage: 'success', imageParsing: action.result });
    default:
      return state;
  }
}

export default reducer;
