import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LoginHeader from './loginheader';
import UserHeader from './userheader';
import SignupHeader from './signupHeader';
import styles from './style.css';

const Header = ({ history }) => (
  <div className={styles.header}>
    <Link className={styles.title} to='/'>Jisho History</Link>
    <Switch>
      <Route exact path='/' component={LoginHeader}/>
      <Route path='/signup' component={LoginHeader}/>
      <Route path='/' component={UserHeader}/>
    </Switch>
  </div>
)

export default Header;
