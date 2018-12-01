import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import { openNavDrawer } from '../../../services/ui/actions';
import styles from './style.css';

const classes = theme => ({
  icon: {
     [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '4em',
      marginLeft: '.2em',
    },
  },
});

const MenuButton = ({ isLoggedIn, openNavDrawer,  classes}) => {
  if(!isLoggedIn) {
    return null;
  }
  return (
    <IconButton
      onClick={() => openNavDrawer()}
    >
      <MenuIcon
        className={classes.icon}
      />
    </IconButton>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.api.user,
});

const mapDispatchToProps = dispatch => ({
  openNavDrawer: () => dispatch(openNavDrawer()),
});

export default withStyles(classes)(connect(mapStateToProps, mapDispatchToProps)(MenuButton));
