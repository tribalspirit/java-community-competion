import React, { Component } from 'react';
import axios, { post } from 'axios';
import Dropzone from 'react-dropzone'

export default class extends React.Component {
  state = {
    file: null,
  }

  onFormSubmit = (file) => {
    this.fileUpload(file).then((response) => {
      console.log(response.data)
      this.props.onSubmitFn(response.data)
    });
  }

  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  fileUpload = (file) => {
    const url = `/api/solution/${this.props.taskId}`;
    const formData = new FormData()
    formData.append('source', file[0])
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
            <div className="dropzone">
            <Dropzone onDrop={this.onFormSubmit} className='drop-box'>
              <h5>Try dropping a file here, or click to select file to upload.</h5>
            </Dropzone>
          </div>
        </div>
      </div>
    )
  }
}
