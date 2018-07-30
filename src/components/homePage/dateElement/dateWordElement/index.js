import React from 'react';
import styles from './style.css';

const DateWordElement = ({ word }) => (
  <div className={styles.element}>
    { word.word + ' '}
    { word.count }
  </div>
)

export default DateWordElement;
