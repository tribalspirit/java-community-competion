import React, {Component} from "react"
import Task from './TaskItem'
import TaskDetails from './TaskPage'
import { fetchTasksListForUser } from '../services/dataService';
import { Link } from "react-router-dom";

export default class extends Component {
    state = {
        tasks: [],
        currentTaskId: null
    }

    componentDidMount(){
        this._getTasks()
    }
    
    _getTasks = () => {
        const tasks = fetchTasksListForUser()
        tasks.then(tasks => this.setState({tasks}))
            .catch(e => console.log(e))
    }

    _showTaskDetails = (id) => {
        this.setState({currentTaskId: id})
    }

    render(){
        const list = this.state.tasks.map((task, i) =>
            <Task
                key={`${task.id}-${i}`}
                id={task.id}
                title={task.title}
                submitted={task.submitted}
                onClickFn={this._showTaskDetails}
            />)
        return (
            <div>
                <div className="row header">
                    <div className="col-lg-12">
                        <h2>Treasure hunt</h2>
                        <div><Link to="/dashboard">Dashboard</Link></div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    {list}
                </div>     
                <hr/>      
                <div className="row">
                    <div className="col-lg-12">
                        {this.state.currentTaskId ? <TaskDetails taskId={this.state.currentTaskId} onSubmitFn={this._getTasks} /> : <h3>Click on the task to see details</h3>}
                    </div>
                </div>
            </div>
        )
    }
}
