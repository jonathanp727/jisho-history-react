import React from 'react';

import DateWordElement from '../DateElement/DateWordElement';
import styles from './style.css';

const TopList = ({ words }) => (
  <div className={styles.cont}>
    {
      words.map((word) => (
        <DateWordElement key={word.kanji} word={word} />
      ))
    }
  </div>
);

export default TopList;
