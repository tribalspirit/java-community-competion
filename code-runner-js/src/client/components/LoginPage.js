import React, {Component} from "react"
import axios, { post } from 'axios';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        axios.post('/api/login', {email: this.state.email})
    }

    onChange(e) {
        this.setState({email:e.target.value})
    }

    fileUpload(file){
        const url = '/task/1';
        const formData = new FormData();
        formData.append('source', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData,config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                EPAM email: <input type="email" onChange={this.onChange} />
                <button type="submit">Login</button>
            </form>
        )
    }
}