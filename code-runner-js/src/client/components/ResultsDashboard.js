import React, { Component } from 'react'
import { fetchDashboardData, fetchTasksListForUser } from '../services/dataService'
const TIMEOUT = 10000

export default class extends Component {
  state = {
    results: null,
    tasks: []
  }

  componentDidMount(){
    this._getTasks()
}

  _getTasks = () => {
      const tasks = fetchTasksListForUser()
      tasks.then(tasks => {
        this.setState({tasks})
        this._fetchData()
      })
        .catch(e => console.log(e))
  }

  _poll = () => {
    setTimeout(this._fetchData, TIMEOUT)
  }

  _fetchData = () => {
    const results = fetchDashboardData()
    this.setState({results}, this._poll)
  }

  _renderProgressBar = (percent) => {
    if (percent === 'LOCKED') return (<span>X</span>)
    return (
      <div className='progress'>
        <div className='progress-bar bg-success' role='progressbar' style={{width: `${percent}%`}} aria-valuenow={solvedPercentage} aria-valuemin="0" aria-valuemax="100"></div>
        <div className='progress-bar bg-danger' role='progressbar' style={{width: `${100 - percent}%`}} aria-valuenow={100 - solvedPercentage} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    )
  }

  render() {
    const { tasks, results } = this.state
    const taskIds = tasks.map(i => i.id)
    const users = results ? Object.keys(results) : []

    return (
      <div class='dashboard-container'>
          <h1>Dashboard</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                {taskIds.map( id => (<th scope="col">{id}</th>))}
              </tr>
            </thead>
            <tbody>
              { results && users.map(user => (
                <tr>
                  <th scope="row">{user}</th>
                    {taskIds.map(id => (<td>{this._renderProgressBar(results[user][id])}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  }
}
