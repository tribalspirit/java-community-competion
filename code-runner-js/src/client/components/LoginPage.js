import React, {Component} from "react"
import axios, { post } from 'axios';
import { Redirect } from 'react-router-dom'

export default class extends Component {

    state = {
        email: '',
        authenticated: false
    }

    onFormSubmit = () => {
        const { history } = this.props
        axios.post('/api/login', {email: this.state.email})
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    authenticated: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    onChange = (e) => {
        this.setState({email: e.target.value})
    };

    render() {
        if(this.state.authenticated){
            return <Redirect to={{pathname: '/', state: {from: '/login'}}} />;
        }
        return (
            <div className="login-container">
                <div className="header">
                    <h2 className='header-title shadow'>Treasure hunt</h2>
                </div>
                <hr/>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h3>Enter your EPAM email:</h3>
                    </div>
                </div>
                <div className="row text-center">
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