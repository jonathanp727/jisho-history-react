import React from 'react';
import DateWordElement from './DateWordElement';
import styles from './style.css'

const DateElement = ({ date, words }) => (
  <div className={styles.dateEl}>
    <h2 className={styles.date}>{date.toDateString().substring(0,10)}</h2>
      {
        (() => {
          let filtered = words.filter(word => {
            return new Date(word.latestIncrement).toDateString() === date.toDateString();
          });
          return filtered.map(word => (<DateWordElement key={word.word} word={word} />));
        })()
      }
  </div>
)

export default DateElement;
