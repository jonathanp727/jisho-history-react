import React from 'react';
import { connect } from 'react-redux';

import { selectToken } from '../../../../services/ui/actions';
import styles from './style.css';

const Token = ({ index, token, select, isSelected, inSentence }) => {
  const classes = [styles.token];
  if(isSelected) {
    classes.push(styles.selectedToken);
  } else if(inSentence) {
    classes.push(styles.sentenceToken);
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={() => select(index, token.basic_form)}
    >
      {token.surface_form}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isSelected: ownProps.index === state.ui.tokenIndex,
});

const mapDispatchToProps = dispatch => ({
  select: (index, token) => dispatch(selectToken(index, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Token);
