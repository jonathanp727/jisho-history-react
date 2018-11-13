import React from 'react';
import { connect } from 'react-redux';

import { sortByNew, sortByTop } from '../../../../services/ui/actions';

import styles from './style.css';

const OptionsBar = ({ isSortedNew, sortByNew, sortByTop }) => (
  <div className={styles.cont}>
    <div>
      sort by
      <button
        className={[isSortedNew ? styles.active : null, styles.button].join(' ')}
        onClick={() => sortByNew()}
      >new</button>
      <button
        className={[!isSortedNew ? styles.active : null, styles.button].join(' ')}
        onClick={() => sortByTop()}
      >top</button>
    </div>
    <input className={styles.search} />
  </div>
)

const mapStateToProps = state => ({
  isSortedNew: state.ui.isSortedNew,
});

const mapDispatchToProps = dispatch => ({
  sortByNew: () => {dispatch(sortByNew())},
  sortByTop: () => {dispatch(sortByTop())},
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBar);
