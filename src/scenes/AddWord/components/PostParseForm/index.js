import React from 'react';
import { connect } from 'react-redux';

import Token from './Token';
import Button from '../../../../components/Button'
import NewWordForm from './NewWordForm';
import { deleteImageParsing } from '../../../../services/api/actions';
import styles from './style.css';

const PostParseForm = ({ tokens, deleteImageParsing, sentenceStartIndex, sentenceEndIndex }) => (
  <div className={styles.cont}>
    <div className={styles.buttonCont}>
      <Button style={styles.button} text='Try new photo' onClick={deleteImageParsing}/>
    </div>
    <div className={styles.tokensCont}>
      { 
        tokens.map((token, index) => {
          const inSentence = sentenceStartIndex <= index && index < sentenceEndIndex;
          return (
            <Token key={index} token={token} index={index} inSentence={inSentence}/>
          )
        })
      }
    </div>
    <div className={styles.formCont}>
      <NewWordForm />
    </div>
  </div>
);

const mapStateToProps = state => ({
  tokens: state.api.imageParsing,
  sentenceStartIndex: state.api.curSentenceStartIndex,
  sentenceEndIndex: state.api.curSentenceEndIndex,
});

const mapDispatchToProps = dispatch => ({
  deleteImageParsing: () => dispatch(deleteImageParsing()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostParseForm);
