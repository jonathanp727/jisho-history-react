import React from 'react';
import DateWordElement from './dateWordElement';
import styles from './style.css'

const DateElement = ({ date, words }) => (
  <div className={styles.dateEl}>
    <h2 className={styles.date}>{date}</h2>
      { (() => {
          words.filter(word => word.latestIncrement === date);
          return words.map(word => (<DateWordElement key={word.word} word={word} />));
        })()
      }
  </div>
)

export default DateElement;
