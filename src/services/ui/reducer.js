import {
  OPEN_WORD_ELEMENT,
  SORT_BY_NEW,
  SORT_BY_TOP,
  OPEN_NAV_DRAWER,
  CLOSE_NAV_DRAWER,
} from './actions';

const defaultState = {
  curWord: null,
  isSortedNew: true,
  navDrawerOpen: false,
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
    case OPEN_NAV_DRAWER:
      return Object.assign({}, state, { navDrawerOpen: true });
    case CLOSE_NAV_DRAWER:
      return Object.assign({}, state, { navDrawerOpen: false });
    default:
      return state;
  }
}

export default reducer;
