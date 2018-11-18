import React from 'react';
import { Link } from 'react-router-dom';

import MenuEl from './MenuEl';
import styles from './style.css';

const NavMenu = () => (
  <ul className={styles.menu}>
    <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
      <MenuEl name='words'/>
    </Link>
    <Link to='/new' style={{ textDecoration: 'none', color: 'inherit' }}>
      <MenuEl name='add word'/>
    </Link>
    <Link to='/flashcard' style={{ textDecoration: 'none', color: 'inherit' }}>
      <MenuEl name='flashcards'/>
    </Link>
  </ul>
);

export default NavMenu;
