import React from 'react';
import { connect } from 'react-redux';

import Token from './Token';
import NewWordForm from './NewWordForm';
import styles from './style.css';

const PostParseForm = ({ tokens, curToken, curTokenIndex }) => (
  <div className={styles.cont}>
    <div className={styles.tokensCont}>
      { 
        tokens.map((token, index) => (
          <Token key={index} token={token} index={index} />
        ))
      }
    </div>
    <div className={styles.formCont}>
      <NewWordForm />
    </div>
  </div>
);

const mapStateToProps = state => ({
  tokens: state.api.imageParsing,
});

export default connect(mapStateToProps)(PostParseForm);
