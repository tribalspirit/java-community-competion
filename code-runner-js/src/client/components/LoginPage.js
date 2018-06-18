import React, {Component} from "react"
import axios, { post } from 'axios';
import { Redirect } from 'react-router-dom'

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            authenticated: false
        };
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onFormSubmit(e){
        e.preventDefault(); // Stop form submit
        axios.post('/api/login', {email: this.state.email})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    onChange(e) {
        this.setState({email:e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                EPAM email: <input type="text" onChange={this.onChange} />
                <button type="submit">Login</button>
            </form>
        )
    }
}