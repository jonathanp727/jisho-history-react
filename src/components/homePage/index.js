import React from 'react';
import { connect } from 'react-redux';
import WordElement from './wordElement';
import DateElement from './dateElement';
import styles from './style.css'

const HomePageComponent = ({ words }) => (
  <div className={styles.homePage}>
    {
      (() => {
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
