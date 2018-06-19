import React, {Component} from "react"
import Task from './TaskItem'
import axios from 'axios';
import { Link } from "react-router-dom";

export default class extends Component {
    state = {
        tasks: []
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
        const list = this.state.tasks.map((task, i) => 
            <Task
                key={`${task.id}-${i}`}
                id={task.id}
                title={task.title}
                text={task.text}
            /> )
        return (
            <div>
                <div className="row">
                    <div>Current location: {this.props.location.path}</div>
                </div>
                <div className="row">
                    {list}
                </div>           
                <div className="row">
                    <div><Link to="/dashboard">Dashboard</Link></div>
                </div>
            </div>
        )
    }
}
