import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios, { post } from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class SimpleReactFileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
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
                <h1>File Upload</h1>
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

const SubmissionReport = (props) => {

    return (<div>
        <h2>Code is submited with id {props.match.params.submissionId}</h2>
    </div>)

}


const App = () => (
    <div>
        <Main />
    </div>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={SimpleReactFileUpload}/>
            <Route path='/submission/:submissionId' component={SubmissionReport}/>
        </Switch>
    </main>
)


// ReactDOM.render(<SimpleReactFileUpload/>, document.getElementById("root"));
ReactDOM.render(<BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById("root"));