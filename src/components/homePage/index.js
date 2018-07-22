import React from 'react';
import { connect } from 'react-redux';
import WordElement from './wordElement';

const HomePageComponent = ({ words }) => (
  <div>
    {words.map(word => (<WordElement key={word.word} word={word} />))}
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
