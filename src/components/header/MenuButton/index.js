import React from 'react';
import { connect } from 'react-redux';

import { openNavDrawer } from '../../../services/ui/actions';

const MenuButton = ({ isLoggedIn, openNavDrawer }) => {
  if(!isLoggedIn) {
    return null;
  }
  return (
    <button
      onClick={() => openNavDrawer()}
    >x
    </button>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.api.user,
});

const mapDispatchToProps = dispatch => ({
  openNavDrawer: () => dispatch(openNavDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
