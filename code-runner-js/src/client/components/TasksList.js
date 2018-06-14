import React, {Component} from "react"
import { Link } from "react-router-dom";
import axios from 'axios';


export default class extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount(){
        axios.get('/api/tasks')
            .then(res => {
                console.log(res);
            })
    }


    render(){
        return (
            <div>
                <ul>
                    <div>Current location: {this.props.location.path}</div>

                    <li><Link to="/task/1">Task1</Link></li>
                    <li><Link to="/task/2">Task2</Link></li>
                </ul>
                <div><Link to="/dashboard">Dashboard</Link></div>
            </div>

        )
    }
}
