import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addWord } from '../../../../services/api/actions';
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

  handleChange(field) {
    return (e) => {
      const newState = Object.assign({}, this.state);
      if(field === 'addLookup') 
        newState[field] = e.target.checked;
      else 
        newState[field] = e.target.value;

      this.setState(newState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addWord(this.state.word, this.state.sentence, this.state.addLookup);
    this.props.history.push('/home');
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
          <button className={styles.button} onClick={(e) => this.handleSubmit(e)}>
            add
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addWord: (word, sentence, addLookup) => dispatch(addWord(word, sentence, addLookup)),
});

export default withRouter(connect(null, mapDispatchToProps)(NewWordForm));
