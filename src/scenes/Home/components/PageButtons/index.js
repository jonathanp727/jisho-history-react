import React from 'react';
import { connect } from 'react-redux';

import { changePageIndex } from '../../../../services/ui/actions';
import Button from '../../../../components/Button';

import styles from './style.css';

const PageButtons = ({ pageIndex, numWords, pageSize, changeIndex }) => {
  const isLeftmostPage = pageIndex === 0;
  const isRightmostPage = pageIndex > ((numWords) / pageSize) - 1;
  return (
    <div className={styles.cont}>
      <Button
        style={isLeftmostPage ? [styles.button, styles.grey].join(' ') : styles.button}
        onClick={isLeftmostPage ? null : () => changeIndex(-1)}
        text="<"
      />
      <Button
        style={isRightmostPage ? [styles.button, styles.grey].join(' ') : styles.button}
        onClick={isRightmostPage ? null : () => changeIndex(1)}
        text=">"
      />
    </div>
  );
}

const mapStateToProps = state => ({
  pageIndex: state.ui.wordsListPageIndex,
  numWords: state.api.curWords.length,
  pageSize: state.ui.pageSize,
});

const mapDispatchToProps = dispatch => ({
  changeIndex: (delta) => {
    window.scrollTo(0, 0);
    dispatch(changePageIndex(delta))
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(PageButtons);
