import {
  OPEN_WORD_ELEMENT,
  SORT_BY_NEW,
  SORT_BY_TOP,
  OPEN_NAV_DRAWER,
  CLOSE_NAV_DRAWER,
  OPEN_MANUAL_TAB,
  OPEN_PHOTO_TAB,
} from './actions';

const defaultState = {
  curWord: null,
  isSortedNew: true,
  navDrawerOpen: false,
  photoTabOpen: false,
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
    case OPEN_MANUAL_TAB:
      return Object.assign({}, state, { photoTabOpen: false });
    case OPEN_PHOTO_TAB:
      return Object.assign({}, state, { photoTabOpen: true });
    default:
      return state;
  }
}

export default reducer;
