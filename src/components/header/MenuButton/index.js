import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { openNavDrawer } from '../../../services/ui/actions';
import styles from './style.css';

const MenuButton = ({ isLoggedIn, openNavDrawer }) => {
  if(!isLoggedIn) {
    return null;
  }
  return (
    <IconButton
      onClick={() => openNavDrawer()}
    >
      <MenuIcon />
    </IconButton>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.api.user,
});

const mapDispatchToProps = dispatch => ({
  openNavDrawer: () => dispatch(openNavDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
