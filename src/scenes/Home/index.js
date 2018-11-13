import React from 'react';
import { connect } from 'react-redux';

import OptionsBar from './components/OptionsBar';
import DateElement from './DateElement';
import TopList from './TopList';

import styles from './style.css'

const Home = ({ words, isSortedNew }) => (
  <div className={styles.homePage}>
    <OptionsBar />
    {
      (() => {
        if(words.length === 0) {
          return (
            <div className={styles.emptyCont}>
              <h2 className={styles.emptyHeader}>There's nothing here!</h2>
              <p className={styles.emptyDesc}>Add words with the Jisho History Chrome Extension by clicking the "+" button below any entry on jisho.org</p>
            </div>
          )
        }
        if(isSortedNew) {
          let curDate = new Date(0);
          return words.map(word => {
            let date = new Date(word.latestIncrement);
            if(date.toDateString() === curDate.toDateString()) {
              return null;
            } else {
              curDate = date;
              return <DateElement key={curDate} date={curDate} words={words} />
            }
          })
        } else {
          return (<TopList words={words} />);
        }
      })()
    }
  </div>
)

const mapStateToProps = state => ({
  words: state.api.words,
  isSortedNew: state.ui.isSortedNew,
});

export default connect(mapStateToProps)(Home);
