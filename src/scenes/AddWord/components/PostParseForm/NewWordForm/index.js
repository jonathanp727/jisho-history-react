import React from 'react';
import { connect } from 'react-redux';

import styles from './style.css';

class NewWordForm extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      tokenIndex: null,
      sentence: '',
      addLookup: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // If prop hasn't change, don't edit state
    if(props.tokenIndex === state.tokenIndex) {
      return state;
    }
    const newState =  {
      word: props.word,
      tokenIndex: props.tokenIndex,
      sentence: props.sentence,
      addLookup: state.addLookup,
    };
    return newState;
  }

  handleChange(field) {
    return (e) => {
      const newState = Object.assign({}, this.state);
      if(field === 'addLookup') 
        newState[field] = e.target.checked;
      else 
        newState[field] = e.target.value;
      console.log(newState);

      this.setState(newState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className={styles.form}>
          <label className={styles.label}>
            word
            <input
              value={this.state.word}
              className={styles.input}
              onChange={this.handleChange('word')}/>
          </label>
          <label className={styles.label}>
            sentence
            <textarea
              value={this.state.sentence}
              className={[styles.input, styles.sentenceInput].join(' ')}
              onChange={this.handleChange('sentence')}/>
          </label>
          <div className={styles.checkboxCont}>
            <label className={styles.label}>
              add lookup on creation
              <input
                value={this.state.addLookup}
                type='checkbox'
                className={styles.checkbox}
                onChange={this.handleChange('addLookup')}/>
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

const mapStateToProps = state => ({
  word: state.ui.token,
  tokenIndex: state.ui.tokenIndex,
});

export default connect(mapStateToProps, null)(NewWordForm);
