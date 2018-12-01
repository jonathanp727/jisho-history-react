import React from 'react';
import { connect } from 'react-redux';

import { uploadPhoto } from '../../services/api/actions';

import styles from './style.css';

class TakePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      imageUrl: null,
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append('image', this.fileInput.current.files[0]);

    this.props.uploadPhoto(data);
  }

  handleUpload(event) {
    this.setState({ imageUrl: URL.createObjectURL(event.target.files[0])});
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="file"
          ref={this.fileInput}
          onChange={this.handleUpload}
          className={styles.input}
        />
        <img className={this.state.imageUrl ? styles.image : styles.noImage} src={this.state.imageUrl} />
        <div className={styles.buttonCont}>
          { this.state.imageUrl && <button type="submit" className={styles.button}>Submit</button> }
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  uploadPhoto: (imageData) => dispatch(uploadPhoto(imageData)),
});

export default connect(null, mapDispatchToProps)(TakePhoto);
