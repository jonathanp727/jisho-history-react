import React from 'react';
import { connect } from 'react-redux';
import WordElement from './wordElement';
import DateElement from './dateElement';

import { sortByNew, sortByTop } from '../../services/ui/actions';

import styles from './style.css'

const HomePageComponent = ({ words, isSortedNew, sortByNew, sortByTop }) => (
  <div className={styles.homePage}>
    <div className={styles.optionsCont}>
      <ul className={styles.displayOptionsCont}>
        <li>
          <button
            className={[isSortedNew ? styles.activeButton : null, styles.leftButton].join(' ')}
            onClick={sortByNew}
            >New</button>
        </li>
        <li>
          <button
            className={[!isSortedNew ? styles.activeButton : null, styles.rightButton].join(' ')}
            onClick={sortByTop}
            >Top</button>
        </li>
      </ul>
    </div>
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
  words: state.api.words,
  isSortedNew: state.ui.isSortedNew,
});

const mapDispatchToProps = dispatch => ({
  sortByNew: () => { dispatch(sortByNew()) },
  sortByTop: () => { dispatch(sortByTop()) },
});

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);


export default HomePage;
