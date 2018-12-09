import React from 'react';
import { connect } from 'react-redux';

import OptionsBar from './components/OptionsBar';
import PageButtons from './components/PageButtons';
import DateElement from './DateElement';
import TopList from './TopList';

import styles from './style.css'

const Home = ({ words, isSortedNew, pageIndex, pageSize }) => {
  const startIndex = pageIndex * pageSize;
  const endIndex = startIndex + pageSize;
  words = words.slice(startIndex, words.length < endIndex ? words.length : endIndex);
  return (
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
      <PageButtons />
    </div>
  )
}
const mapStateToProps = state => ({
  words: state.api.curWords,
  isSortedNew: state.ui.isSortedNew,
  pageIndex: state.ui.wordsListPageIndex,
  pageSize: state.ui.pageSize,
});

export default connect(mapStateToProps)(Home);
