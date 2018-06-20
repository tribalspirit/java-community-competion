import React, {Component} from "react"
import { fetchTaskData } from '../services/dataService';

class TaskDetails extends React.Component {

    state = {
        task: null
    }

    componentDidMount() {
        let task = fetchTaskData(this.props.taskId)
        this.setState({task})        
    }

    componentWillReceiveProps(nextProps){
        if (!nextProps.taskId) return
        let task = fetchTaskData(nextProps.taskId)
        this.setState({task})
    }

    render() {
        let task = this.state.task

        return (
            <div className='row'>
                {task && <div className='col-lg-12'>
                    <div className="card">
                        <div className="card-header">
                            {task.title}
                        </div>
                        <p dangerouslySetInnerHTML={{__html:task.htmlDesc}}></p>
                    </div>
                </div>}
            </div>)
    }
}

export default TaskDetails;