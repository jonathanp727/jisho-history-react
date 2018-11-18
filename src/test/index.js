import fetch from 'cross-fetch';
import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      imageUrl: null,
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ imageUrl: URL.createObjectURL(this.fileInput.current.files[0]) });

    const data = new FormData();
    data.append('image', this.fileInput.current.files[0]);

    fetch('/api/image/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'x-access-token': this.props.token,
      },
      body: data,
    }).then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <img src={this.state.imageUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.api.user.token,
});

export default connect(mapStateToProps, null)(Test);
