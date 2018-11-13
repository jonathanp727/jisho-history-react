import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { logout } from '../../../services/api/actions';
import styles from './style.css'

const UserHeaderComponent = ({ logout }) => (
  <div>
    <button className={styles.button} onClick={() => logout()}>logout</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  logout: () => {
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('userToken');
    dispatch(logout());
    dispatch(push('/'));
  },
});

const UserHeader = connect(
  null,
  mapDispatchToProps
)(UserHeaderComponent);

export default UserHeader;
