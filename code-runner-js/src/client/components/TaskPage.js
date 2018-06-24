import React, {Component} from "react"
import { fetchTaskData } from '../services/dataService'
import TaskStatus from './TaskStatus'
import UploadForm from './FileUpload'

class TaskDetails extends React.Component {

    state = {
        task: null,
        taskStatus: null
    }

    componentDidMount() {
        fetchTaskData(this.props.taskId)
            .then(task => this.setState({task}) )
            .catch(e => console.log(e))

    }
    
    componentWillReceiveProps(nextProps){
        if (!nextProps.taskId) return
        fetchTaskData(nextProps.taskId)
            .then(task => this.setState({task}))
            .catch(e => console.log(e))
    }

    _onSubmitForm = (taskStatus) => {this.setState({taskStatus})}

    
    _showTaskStatus = (taskStatus) => {
        this.setState({taskStatus})
    }

    render() {
        let { task } = this.state

        return (
            <div className='row'>
                {task && <div className='col-lg-12'>
                    <div className="card">
                        <div className="card-header">
                            {task.title}
                        </div>
                        <div className='details-container' dangerouslySetInnerHTML={{__html:task.htmlDesc}}></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.state.taskStatus && <TaskStatus taskStatus={this.state.taskStatus} onSolvedFn={this.props.onSubmitFn}/>}
                        </div>
                    </div>
                    <div>
                        <UploadForm taskId={this.props.taskId} onSubmitFn={this._showTaskStatus}/>
                    </div>
                </div>}
            </div>)
    }
}

export default TaskDetails;