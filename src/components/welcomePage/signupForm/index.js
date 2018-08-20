import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
//import { login } from './actions';
//import styles from './style.css';

const SignupFormComponent = ({ handleSubmit, login }) => (
  <div>
    <form className={styles.form} onSubmit={handleSubmit(login)}>
      <Field className={styles.input} name='username' component='input' type='text' autoComplete='off'/>
      <Field className={styles.input} name='password' component='input' type='password' />
      <button className={styles.button} name='login-button' type='submit'>login</button>
    </form>
  </div>
)

const mapDispatchToProps = dispatch => ({
  login: (values) => {dispatch(login(values.username, values.password))},
});

const SignupForm = connect(
  null,
  mapDispatchToProps
)(reduxForm({ form: 'login' })(SignupFormComponent));

export default SignupForm;
