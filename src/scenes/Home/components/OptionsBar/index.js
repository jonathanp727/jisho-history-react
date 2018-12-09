import React from 'react';
import { connect } from 'react-redux';

import { sortByNew, sortByTop } from '../../../../services/ui/actions';
import { searchWords } from '../../../../services/api/actions';

import styles from './style.css';

class OptionsBar extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
    this.props.search(e.target.value);
  }

  render() {
    const { isSortedNew, sortByNew, sortByTop } = this.props;
    return (
      <div className={styles.cont}>
        <div>
          sort by
          <button
            className={[isSortedNew ? styles.active : null, styles.button].join(' ')}
            onClick={() => sortByNew()}
          >new</button>
          <button
            className={[!isSortedNew ? styles.active : null, styles.button].join(' ')}
            onClick={() => sortByTop()}
          >top</button>
        </div>
        <input className={styles.search} value={this.state.value} onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isSortedNew: state.ui.isSortedNew,
});

const mapDispatchToProps = dispatch => ({
  sortByNew: () => {dispatch(sortByNew())},
  sortByTop: () => {dispatch(sortByTop())},
  search: (value) => {dispatch(searchWords(value))},
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBar);
