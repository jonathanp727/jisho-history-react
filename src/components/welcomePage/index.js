import React from 'react';

import styles from './style.css';

const WelcomePage = () => (
  <div className={styles.background}>
    <div className={styles.imageFader}>
      <div className={styles.headerCont}>
        <h1 className={styles.header}>Don't forget what you've already learned.</h1>
        <h2 className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
        <button className={styles.button}>Sign up</button>
      </div>
    </div>
  </div>
)

export default WelcomePage;
