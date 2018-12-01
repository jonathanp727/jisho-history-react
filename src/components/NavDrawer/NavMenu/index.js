import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MenuEl from './MenuEl';
import styles from './style.css';

const NavMenu = ({ isMobile }) => {
  console.log(isMobile);
  return (
    <ul className={styles.menu}>
      <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuEl name='words'/>
      </Link>
      { !isMobile && 
        <Link to='/new' style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuEl name='add word'/>
        </Link>
      }
      { isMobile && 
        <Link to='/photo' style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuEl name='take photo'/>
        </Link>
      }
      <Link to='/flashcard' style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuEl name='flashcards'/>
      </Link>
    </ul>
  );
};

const mapStateToProps = state => ({
  isMobile: state.ui.isMobile
});

export default connect(mapStateToProps)(NavMenu);
