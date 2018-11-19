import React from 'react';
import { connect } from 'react-redux';

import { selectToken } from '../../../../services/ui/actions';
import styles from './style.css';

const Token = ({ index, token, select, isSelected }) => (
  <div
    className={[styles.token, isSelected ? styles.selectedToken : null].join(' ')}
    onClick={() => select(index, token.basic_form)}
  >
    {token.surface_form}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  isSelected: ownProps.index === state.ui.tokenIndex,
});

const mapDispatchToProps = dispatch => ({
  select: (index, token) => dispatch(selectToken(index, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Token);
