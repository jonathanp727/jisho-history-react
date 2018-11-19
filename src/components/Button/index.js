import React from 'react';
import styles from './style.css';

const Button = ({ style, onClick, text }) => (
  <button
    className={[styles.button, style].join(' ')}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
