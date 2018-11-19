import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginHeader from './loginheader';
import UserHeader from './userheader';
import styles from './style.css';
import MenuButton from './MenuButton';

const Header = ({ history, user }) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleCont}>
        <MenuButton />
        <Link className={styles.title} to='/'>Jisho History</Link>
      </div>
      <Switch>
        <Route exact path='/' component={user ? UserHeader : LoginHeader}/>
        <Route path='/signup' component={user ? UserHeader : LoginHeader}/>
        <Route path='/' component={UserHeader}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.api.user,
});

export default connect(mapStateToProps)(Header);
