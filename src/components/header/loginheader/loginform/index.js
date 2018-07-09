import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { login } from './actions';

const LoginFormComponent = ({ handleSubmit, login }) => (
  <div>
    <form onSubmit={handleSubmit(login)}>
      <Field name='username' component='input' type='text' />
      <Field name='password' component='input' type='password' />
      <button name='login-button' type='submit' />
    </form>
  </div>
)

const mapDispatchToProps = dispatch => ({
  login: (values) => {dispatch(login(values.username, values.password))},
});

const LoginForm = connect(
  null,
  mapDispatchToProps
)(reduxForm({ form: 'login' })(LoginFormComponent));

export default LoginForm;
