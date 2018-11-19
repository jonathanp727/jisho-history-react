import React from 'react';

import styles from './style.css';

const SentencesOfWord = ({ sentences }) => (
  <div className={styles.cont}>
    {renderSentences(sentences)}
  </div>
)

const renderSentences = (sentences) => {
  if(sentences.length == 0) {
    return (
      <div className={styles.empty}>no sentences!</div>
    )
  } else {
    return (
      <ul>
        {
          sentences.map((sentence, index) => (
            <li
              key={index}
              className={styles.li}
            >
              {sentence}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default SentencesOfWord;
