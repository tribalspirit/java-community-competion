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
                this.setState({...this.state, tasks: res.data.tasks })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render(){

        const list = this.state.tasks.map(task => <li><Link to={`/task/${task.id}`}>{task.title}</Link></li> )
        return (
            <div>
                <ul>
                    <div>Current location: {this.props.location.path}</div>

                    {list}
                </ul>
                <div><Link to="/dashboard">Dashboard</Link></div>
            </div>

        )
    }
}
