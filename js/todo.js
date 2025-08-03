// js/todo.js



function loadTodos() {
  const taskTableBody = document.getElementById('taskTableBody');
  document.querySelector('.addTaskBtn').addEventListener('click', addNewTask);

  const tasks = getTasks();

  taskTableBody.innerHTML = '';

  tasks.forEach((task, index) => {
    const row = document.createElement('tr');

    // Name input
    const nameCell = document.createElement('td');
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.setAttribute('aria-label', 'name');
    nameInput.setAttribute('maxlength', '35'); 
    nameInput.value = task.name;
    nameInput.addEventListener('change', () => {
        if (!nameInput.value.trim()) {
    alert('Name cannot be empty');
    nameInput.focus();
    return;
  }
      tasks[index].name = nameInput.value;
      saveTasks(tasks);
    });
    nameCell.appendChild(nameInput);

    // Email input
    const emailCell = document.createElement('td');
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.setAttribute('aria-label', 'email');
    emailInput.style.width = '300px'
    emailInput.setAttribute('maxlength', '45'); 
    emailInput.value = task.email;
    emailInput.addEventListener('change', () => {
        if (!isValidEmail(emailInput.value)) {
    alert('Invalid email');
    emailInput.focus();
    return;
  }
      tasks[index].email = emailInput.value;
      saveTasks(tasks);
    });
    emailCell.appendChild(emailInput);

    // Task
    const taskCell = document.createElement('td');
    const taskInput = document.createElement('input');
    taskInput.style.width = '400px'
    taskInput.type = 'text';
    taskInput.setAttribute('aria-label', 'text');
    taskInput.setAttribute('maxlength', '65'); 
    taskInput.value = task.task;
    taskInput.addEventListener('change', () => {
   const trimmedValue = taskInput.value.trim();

  if (!trimmedValue) {
    alert('Task cannot be empty');
    taskInput.focus();
    return;
  }

  if (trimmedValue.length > 65) {
    alert('Task is too long (max 65 characters)');
    taskInput.focus();
    return;
  }

  tasks[index].task = trimmedValue;
  saveTasks(tasks);
    });
    taskCell.appendChild(taskInput);

    // Status
    const statusCell = document.createElement('td');
    statusCell.textContent = task.status;

    // Delete button
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = 'submit_toDo'
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);      
      saveTasks(tasks);            
      loadTodos();                 
    });
    deleteCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(taskCell);
    row.appendChild(statusCell);
    row.appendChild(deleteCell);

    taskTableBody.appendChild(row);
  });
}

function addNewTask() {
  const tasks = getTasks();

   if (tasks.length >= 10) {
    alert('Maximum number of tasks — 10');
    return; 
  }

const newTask = {
  name: 'John Doe',
  email: 'john@example.com',
  task: 'New task description...',
  status: 'task not completed'
};

  tasks.unshift(newTask);
  saveTasks(tasks);
  loadTodos(); 
}