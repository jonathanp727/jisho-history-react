import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Welcome from './scenes/Welcome';
import Home from './scenes/Home';
import AddWord from './scenes/AddWord';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';

const App = () => (
  <div>
    <Header />
    <NavDrawer />
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/signup' component={Welcome}/>
      <Route path='/login' component={Welcome}/>
      <Route path='/home' component={Home}/>
      <Route path='/new' component={AddWord}/>
    </Switch>
  </div>
)

const mapStateToProps = state => ({
  user: state.api.user,
});

export default App;
