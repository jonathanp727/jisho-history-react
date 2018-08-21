import React from 'react';
import Header from '../header';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from '../welcomePage';
import HomePage from '../homePage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/signup' component={WelcomePage}/>
      <Route path='/home' component={HomePage}/>
    </Switch>
  </div>
)

export default App;
