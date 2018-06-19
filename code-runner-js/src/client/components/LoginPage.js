import React, {Component} from "react"
import axios, { post } from 'axios';
import { Redirect } from 'react-router-dom'

export default class extends Component {

    state = {
        email: '',
        authenticated: false
    }

    onFormSubmit = () => {
        axios.post('/api/login', {email: this.state.email})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChange = (e) => {
        this.setState({email: e.target.value})
    }

    render() {
        return (
            <div className="login-container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Some header here</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label>Enter your EPAM email:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <input 
                            type="email"
                            id="inputEPAMemail"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={this.onChange} 
                        />
                    </div>
                    <div className="col-sm-1">
                        <button type="submit" className="btn btn-primary" onClick={this.onFormSubmit}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}