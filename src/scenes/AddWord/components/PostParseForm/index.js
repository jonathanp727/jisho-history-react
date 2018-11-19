import React from 'react';
import { connect } from 'react-redux';

import Token from './Token';
import Button from '../../../../components/Button'
import NewWordForm from './NewWordForm';
import { deleteImageParsing } from '../../../../services/api/actions';
import styles from './style.css';

const PostParseForm = ({ tokens, curToken, curTokenIndex, deleteImageParsing }) => (
  <div className={styles.cont}>
    <div className={styles.buttonCont}>
      <Button style={styles.button} text='Try new photo' onClick={deleteImageParsing}/>
    </div>
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

const mapDispatchToProps = dispatch => ({
  deleteImageParsing: () => dispatch(deleteImageParsing()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostParseForm);
