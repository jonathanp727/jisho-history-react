export const OPEN_WORD_ELEMENT = 'OPEN_WORD_ELEMENT';
export const openWordElement = ( word ) => ({
  type: OPEN_WORD_ELEMENT,
  word, 
});

export const SORT_BY_NEW = 'SORT_BY_NEW';
export const sortByNew = () => ({
  type: SORT_BY_NEW,
});

export const SORT_BY_TOP = 'SORT_BY_TOP';
export const sortByTop = () => ({
  type: SORT_BY_TOP,
});

export const OPEN_NAV_DRAWER = 'OPEN_NAV_DRAWER';
export const openNavDrawer = () => ({
  type: OPEN_NAV_DRAWER,
});

export const CLOSE_NAV_DRAWER = 'CLOSE_NAV_DRAWER';
export const closeNavDrawer = () => ({
  type: CLOSE_NAV_DRAWER,
});

export const OPEN_MANUAL_TAB = 'OPEN_MANUAL_TAB';
export const openManualTab = () => ({
  type: OPEN_MANUAL_TAB,
});

export const OPEN_PHOTO_TAB = 'OPEN_PHOTO_TAB';
export const openPhotoTab = () => ({
  type: OPEN_PHOTO_TAB,
});
