import {
  CONNECTION_FAILURE,
  REQUEST_USER,
  RECIEVE_USER,
} from './actions';

const defaultState = {
  request_user: 'pending',
  user: null,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CONNECTION_FAILURE:
      return Object.assign({}, state, { request_user: 'failure' });
    case REQUEST_USER:
      return Object.assign({}, state, { request_user: 'ongoing' });
    case RECIEVE_USER:
      return Object.assign({}, state, { request_user: 'success', user: action.user, words: action.words});
    default:
      return state
  }
}

export default reducer;
