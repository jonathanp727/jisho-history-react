import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { join } from './actions';
import styles from './style.css';

const SignupFormComponent = ({ handleSubmit, join }) => (
  <div className={styles.cont}>
    <form className={styles.form} onSubmit={handleSubmit(join)}>
      <Field className={styles.input} name='username' component='input' type='text' autoComplete='off'/>
      <Field className={styles.input} name='password' component='input' type='password' />
      <button className={styles.button} name='login-button' type='submit'>sign up</button>
    </form>
  </div>
)

const mapDispatchToProps = dispatch => ({
  join: (values) => {dispatch(join(values.username, values.password))},
});

const SignupForm = connect(
  null,
  mapDispatchToProps
)(reduxForm({ form: 'join' })(SignupFormComponent));

export default SignupForm;
