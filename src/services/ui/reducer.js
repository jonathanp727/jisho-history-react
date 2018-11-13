import {
  OPEN_WORD_ELEMENT,
} from './actions';

import {
  SORT_BY_NEW,
  SORT_BY_TOP,
} from './actions';

const defaultState = {
  curWord: null,
  isSortedNew: true,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_WORD_ELEMENT:
      if(state.curWord === action.word)
        return Object.assign({}, state, { curWord: null });
      else
        return Object.assign({}, state, { curWord: action.word });
    case SORT_BY_NEW:
      return Object.assign({}, state, { isSortedNew: true });
    case SORT_BY_TOP:
      return Object.assign({}, state, { isSortedNew: false });
    default:
      return state;
  }
}

export default reducer;
