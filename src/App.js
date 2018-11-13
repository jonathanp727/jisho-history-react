import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from './scenes/Welcome';
import Home from './scenes/Home';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/signup' component={Welcome}/>
      <Route path='/home' component={Home}/>
    </Switch>
  </div>
)

const mapStateToProps = state => ({
  user: state.api.user,
});

export default App;
