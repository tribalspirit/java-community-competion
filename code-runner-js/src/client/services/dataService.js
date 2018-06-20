import showdown from 'showdown'
import {taskList} from './mock'

const converter = new showdown.Converter()

const fetchTaskData = function(taskId) {
  //should get it from redis
    const task = taskList[0]
    task.htmlDesc = converter.makeHtml(task.longDesc)
    return task
}

const fetchTasksListForUser = (userId) => { 
  return taskList
}

export {
    fetchTaskData,
    fetchTasksListForUser
}
