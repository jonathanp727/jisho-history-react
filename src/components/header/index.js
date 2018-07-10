import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginHeader from './loginheader';
import UserHeader from './userheader';

const Header = () => (
  <div>
    <Switch>
      <Route exact path='/' component={LoginHeader}/>
      <Route path='/' component={UserHeader}/>
    </Switch>
  </div>
)

export default Header;
