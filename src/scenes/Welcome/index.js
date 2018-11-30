import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignupForm from './signupForm';
import LoginForm from './LoginForm';
import Introduction from './introduction';
import styles from './style.css';

const Welcome = () => (
  <div className={styles.background}>
    <div className={styles.imageFader}>
      <Switch>
        <Route exact path='/' component={Introduction}/>
        <Route path='/signup' component={SignupForm}/>
        <Route path='/login' component={LoginForm}/>
      </Switch>
    </div>
  </div>
)

export default Welcome;
