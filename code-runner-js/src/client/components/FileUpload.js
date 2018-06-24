import React, { Component } from 'react';
import axios, { post } from 'axios';

export default class extends React.Component {
  state = {
    file: null,
  }

  onFormSubmit = (e) => {
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data);
      this.props.onSubmitFn(response.data)
    });
  }

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  fileUpload = (file) => {
    const url = `/api/solution/${this.props.taskId}`;
    const formData = new FormData();
    formData.append('source', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <div className='form-upload row'>
        <div className='col-lg-12'>
          <h3>File Upload</h3>
          <input type="file" onChange={this.onChange} />
          <button type="submit" onClick={this.onFormSubmit}>
            Upload
          </button>
        </div>
      </div>
    )
  }
}
