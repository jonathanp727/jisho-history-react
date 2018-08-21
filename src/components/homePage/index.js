import React from 'react';
import { connect } from 'react-redux';
import WordElement from './wordElement';
import DateElement from './dateElement';
import styles from './style.css'

const HomePageComponent = ({ words }) => (
  <div className={styles.homePage}>
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
      })()
    }
  </div>
)

const mapStateToProps = state => ({
  words: state.main.words,
});

const mapDispatchToProps = dispatch => ({

});

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);


export default HomePage;
