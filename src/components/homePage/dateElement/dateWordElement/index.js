import React from 'react';
import styles from './style.css';

const DateWordElement = ({ word }) => (
  <div className={styles.element}>
    <a className={styles.word} href={'https://jisho.org/search/' + word.word}>{word.word}</a>
    <div className={styles.countCont}>
      <h3 className={styles.count}>{word.count}</h3>
    </div>
  </div>
)

export default DateWordElement;
