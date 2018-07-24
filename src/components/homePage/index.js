import React from 'react';
import { connect } from 'react-redux';
import WordElement from './wordElement';
import DateElement from './dateElement';
import styles from './style.css'

const HomePageComponent = ({ words }) => (
  <div className={styles.homePage}>
    {
      (() => {
        let curDate = 0;
        return words.map(word => {
          if(word.latestIncrement === curDate)
            return null;
          else {
            curDate = word.latestIncrement;
            return <DateElement date={curDate} words={words} />
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
