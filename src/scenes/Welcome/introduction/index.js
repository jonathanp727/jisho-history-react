import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './style.css';

const Introduction = ({ gotoSignupForm, isMobile }) => (
  <div className={styles.introCont}>
    <div className={styles.headerCont}>
      <h1 className={styles.header}>Don't forget what you've already learned.</h1>
      <h2 className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
      <div className={styles.linkCont}>
        { isMobile && <Link className={[styles.link, styles.login].join(' ')} to='/login'>Login</Link>}
        <Link className={styles.link} to='/signup'>Sign up</Link>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  isMobile: state.ui.isMobile,
});

export default connect(mapStateToProps, null)(Introduction);
