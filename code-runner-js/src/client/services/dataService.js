const fetchTaskData = function(taskId) {
  //should get it from redis
  return {
      'title': `Task${taskId}`,
      'description': 'Testing Sum',
      'testExamples': {
          '1': '1',
          '1,2,3': '6'
      },
      'acceptanceTests': {
          '1,2,3,4,5,6' : '21'
      }
  }
};

const fetchTasksListForUser = (userId) => {
  return ['task1', 'task2']
};


export {
    fetchTaskData,
    fetchTasksListForUser
}
