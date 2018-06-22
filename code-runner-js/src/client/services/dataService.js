import showdown from 'showdown'
import axios from 'axios'

const converter = new showdown.Converter()

const fetchTaskData = (taskId) => {
  //should get it from redis
    return axios.get(`/api/tasks/${taskId}`)
        .then(res => {
            let task = res.data;
            task.htmlDesc = converter.makeHtml(task.longDesc)
            return task;
        })
        .catch(e => console.log(e))
}

const fetchTasksListForUser = () => {
        return axios.get('/api/tasks')
            .then(res => res.data)
            .catch(e => console.log(e));

}

export {
    fetchTaskData,
    fetchTasksListForUser
}
