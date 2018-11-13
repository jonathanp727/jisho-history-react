import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Welcome from './scenes/Welcome';
import HomePage from './scenes/Home';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/signup' component={Welcome}/>
      <Route path='/home' component={HomePage}/>
    </Switch>
  </div>
)

export default App;
