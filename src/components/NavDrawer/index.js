import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import NavMenu from './NavMenu';
import { closeNavDrawer } from '../../services/ui/actions';
import styles from './style.css';

const NavDrawer = ({ navDrawerOpen, closeNavDrawer }) => (
  <Drawer
    open={navDrawerOpen}
    onClose={() => closeNavDrawer()}
  >
    <NavMenu />
  </Drawer>
);

const mapStateToProps = state => ({
  navDrawerOpen: state.ui.navDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  closeNavDrawer: () => dispatch(closeNavDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
