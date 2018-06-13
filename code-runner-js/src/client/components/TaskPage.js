import React, {Component} from "react"
import { fetchTaskData } from '../services/dataService';

class TaskPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskId: props.match.params.taskId
        }
    }

    componentDidMount(){
        let task = fetchTaskData(this.state.taskId);

        let newState = {...this.state, task};
        console.log('new state: ', newState);
        this.setState(newState);
    }

    render() {
        let task = this.state.task;
        if(task) {
            return (
                <div>
                    <div>{task.title}</div>
                    <div>Current location: {JSON.stringify(this.props.location)}</div>
                    <form onSubmit={this.onFormSubmit}>
                        <h1>File Upload</h1>
                        <input type="file" onChange={this.onChange}/>
                        <button type="submit">Upload</button>
                    </form>
                </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default TaskPage;