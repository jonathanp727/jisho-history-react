import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginHeader from './loginheader';
import UserHeader from './userheader';

const Header = () => (
  <div>
    <Route>
      <Switch>
        <Route exact path='/' component={LoginHeader}/>
        <Route path='/' component={UserHeader}/>
      </Switch>
    </Route>
  </div>
)

export default Header;
