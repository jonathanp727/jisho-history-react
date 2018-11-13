import React from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';

import styles from './style.css';

const NavDrawer = ({ navDrawerOpen }) => (
  <Drawer visible={navDrawerOpen} className={styles.drawer}>
    <div className={styles.content}/>
  </Drawer>
);

const mapStateToProps = state => ({
  navDrawerOpen: state.ui.navDrawerOpen,
});

export default connect(mapStateToProps)(NavDrawer);