const DEFAULT_TASKS = [
  {
    name: 'Nadine Dare',
    email: 'nadine.says@hey.com',
    task: 'Send welcome email',
    status: 'task completed'
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    task: 'Approve subscription',
    status: 'task not completed'
  },
];



 function getTasks() {
  const tasksJSON = localStorage.getItem('tasks');
  if (!tasksJSON) {
    localStorage.setItem('tasks', JSON.stringify(DEFAULT_TASKS));
    return DEFAULT_TASKS;
  }
  return JSON.parse(tasksJSON);
}

 function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function signOut() {
  localStorage.removeItem('token');
  checkAuth();
}