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
    results.then(results => {
      this.setState({results}, this._poll)
    })
      .catch(e => console.log(e))
  }

  _renderProgressBar = (percent) => {
    if (percent === 'LOCKED') return (<span>X</span>)
    return (
      <div className='progress'>
        <div className='progress-bar bg-success' role='progressbar' style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
        <div className='progress-bar bg-danger' role='progressbar' style={{width: `${100 - percent}%`}} aria-valuenow={100 - percent} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    )
  }

  render() {
    const { tasks, results } = this.state
    const taskIds = tasks.map(i => i.id)
    const users = results ? Object.keys(results) : []

    return (
      <div className='dashboard-container'>
          <h1>Dashboard</h1>
          <table className="table table-striped">
            <thead className=''>
              <tr>
                <th className='name-col' scope="col">#</th>
                {taskIds.map((id, i) => (<th key={`col-${id}-${i}`} scope="col">{id}</th>))}
              </tr>
            </thead>
            <tbody>
              { results && users.map(user => (
                <tr key={user}>
                  <th scope="row">{user}</th>
                    {taskIds.map((id, i) => (<td key={`row-${id}-${i}`}>{this._renderProgressBar(results[user][id])}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  }
}
