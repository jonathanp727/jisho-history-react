import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { login } from '../../../services/api/actions';
import styles from './style.css';

const LoginForm = ({ handleSubmit, login }) => (
  <div className={styles.cont}>
    <form className={styles.form} onSubmit={handleSubmit(login)}>
      <div className={styles.inputCont}>
        <label className={styles.label}>Username
          <Field className={styles.input} name='username' component='input' type='text' autoComplete='off'/>
        </label>
      </div>
      <div className={styles.inputCont}>
        <label className={styles.label}>Password
          <Field className={styles.input} name='password' component='input' type='password' />
        </label>
      </div>
      <button className={styles.button} name='login-button' type='submit'>login</button>
    </form>
  </div>
)

const mapDispatchToProps = dispatch => ({
  login: (values) => {dispatch(login(values.username, values.password))},
});

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'login' })(LoginForm));
