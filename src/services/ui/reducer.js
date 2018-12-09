import {
  OPEN_WORD_ELEMENT,
  SORT_BY_NEW,
  SORT_BY_TOP,
  OPEN_NAV_DRAWER,
  CLOSE_NAV_DRAWER,
  OPEN_MANUAL_TAB,
  OPEN_PHOTO_TAB,
  SELECT_TOKEN,
  SET_DEVICE_TYPE,
  CHANGE_PAGE_INDEX,
} from './actions';

import {
  RECIEVE_TOKENS_FROM_MOBILE,
  RECIEVE_ADD_WORD,
} from '../api/actions';

const defaultState = {
  curWord: null,
  isSortedNew: true,
  navDrawerOpen: false,
  photoTabOpen: false,
  tokenIndex: null,
  token: null,
  isMobile: false,
  wordsListPageIndex: 0,
  pageSize: 50,
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_WORD_ELEMENT:
      if(state.curWord === action.word)
        return Object.assign({}, state, { curWord: null });
      else
        return Object.assign({}, state, { curWord: action.word });
    case SORT_BY_NEW:
      return Object.assign({}, state, { isSortedNew: true, wordsListPageIndex: 0 });
    case SORT_BY_TOP:
      return Object.assign({}, state, { isSortedNew: false, wordsListPageIndex: 0 });
    case OPEN_NAV_DRAWER:
      return Object.assign({}, state, { navDrawerOpen: true });
    case CLOSE_NAV_DRAWER:
      return Object.assign({}, state, { navDrawerOpen: false });
    case OPEN_MANUAL_TAB:
      return Object.assign({}, state, { photoTabOpen: false });
    case OPEN_PHOTO_TAB:
      return Object.assign({}, state, { photoTabOpen: true });
    case SELECT_TOKEN:
      return Object.assign({}, state, { tokenIndex: action.tokenIndex, token: action.token });
    case SET_DEVICE_TYPE:
      return Object.assign({}, state, { isMobile: action.isMobile });
    case RECIEVE_TOKENS_FROM_MOBILE:
      return Object.assign({}, state, { photoTabOpen: true });
    case RECIEVE_ADD_WORD:
      return Object.assign({}, state, { token: null, tokenIndex: null });
    case CHANGE_PAGE_INDEX:
      return Object.assign({}, state, { wordsListPageIndex: state.wordsListPageIndex + action.delta });
    default:
      return state;
  }
}

export default reducer;
