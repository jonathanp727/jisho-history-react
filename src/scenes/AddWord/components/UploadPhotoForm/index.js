import React from 'react';
import { connect } from 'react-redux';

import { parseImage } from '../../../../services/api/actions';
import styles from './style.css';

class UploadPhotoForm extends React.Component {
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

    this.props.parseImage(data);
  }

  handleUpload(event) {
    this.setState({ imageUrl: URL.createObjectURL(event.target.files[0])});
  }

  render() {
    return (
      <div className={styles.cont}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.fileInputCont}>
            <input
              type="file"
              ref={this.fileInput}
              onChange={this.handleUpload}
            />
          </div>
          <img className={this.state.imageUrl ? styles.image : styles.noImage} src={this.state.imageUrl} />
          <div className={styles.buttonCont}>
            { this.state.imageUrl && <button type="submit" className={styles.button}>Submit</button> }
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  parseImage: (data) => dispatch(parseImage(data)),
});

export default connect(null, mapDispatchToProps)(UploadPhotoForm);
