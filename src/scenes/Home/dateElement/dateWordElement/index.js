import React from 'react';
import { connect } from 'react-redux';

import WordDataPanel from './WordDataPanel';
import { openWordElement } from '../../../../services/ui/actions';
import styles from './style.css';

const DateWordElementComponent = ({ word, curWord, openWord }) => (
  <div>
    <div className={styles.element} onClick={() => openWord(word.word)}>
      <a className={styles.word} href={'https://jisho.org/search/' + word.word}>{word.word}</a>
      <div className={styles.countCont}>
        <h3 className={styles.count}>{word.count}</h3>
      </div>
    </div>
    { curWord === word.word && <WordDataPanel word={word} /> }
  </div>
)

const mapStateToProps = state => ({
  curWord: state.ui.curWord,
});

const mapDispatchToProps = dispatch => ({
  openWord: (word) => dispatch(openWordElement(word)),
});

const DateWordElement = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateWordElementComponent);


export default DateWordElement;
