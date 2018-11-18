import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import LoginHeader from './loginheader';
import UserHeader from './userheader';
import styles from './style.css';
import MenuButton from './MenuButton';

const Header = ({ history }) => (
  <div className={styles.header}>
    <div className={styles.titleCont}>
      <MenuButton />
      <Link className={styles.title} to='/'>Jisho History</Link>
    </div>
    <Switch>
      <Route exact path='/' component={LoginHeader}/>
      <Route path='/signup' component={LoginHeader}/>
      <Route path='/' component={UserHeader}/>
    </Switch>
  </div>
)

export default Header;
