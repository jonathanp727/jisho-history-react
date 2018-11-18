import React from 'react';

import styles from './style.css';

class NewWordForm extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <form className={styles.form}>
          <label className={styles.label}>
            word
            <input className={styles.input}/>
          </label>
          <label className={styles.label}>
            sentence
            <textarea className={[styles.input, styles.sentenceInput].join(' ')}/>
          </label>
          <div className={styles.checkboxCont}>
            <label className={styles.label}>
              add lookup on creation
              <input type='checkbox' className={styles.checkbox}/>
            </label>
          </div>
          <button className={styles.button}>
            add
          </button>
        </form>
      </div>
    )
  }
}

export default NewWordForm;
