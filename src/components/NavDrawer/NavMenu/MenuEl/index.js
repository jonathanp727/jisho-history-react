import React from 'react';
import { connect } from 'react-redux';

import { closeNavDrawer } from '../../../../services/ui/actions';
import styles from './style.css';

const MenuEl = ({ name, closeNavDrawer }) => (
  <li className={styles.cont} onClick={() => closeNavDrawer()}>
    <h1 className={styles.name}>{name}</h1>
  </li>
);

const mapDispatchToProps = dispatch => ({
  closeNavDrawer: () => dispatch(closeNavDrawer()),
});

export default connect(null, mapDispatchToProps)(MenuEl);
