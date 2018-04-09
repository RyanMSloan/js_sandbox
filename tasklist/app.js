// DEFINE UI VARS
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Remove ALL tasks event
  clearBtn.addEventListener('click', removeAllTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Events
////////////////////////////////////////////////
// GET TASKS
function getTasks() {
  // get tasks form LS if any
  if(localStorage.getItem('tasks') !== null) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(task => {
      // Add to list
      addTaskElement(task);
    });
  }
}

// ADD TASK
function addTask(e) {
  // Validate empty input
  if(taskInput.value === '') {
    alert('Field can not be empty.');
  }
  // add to list
  addTaskElement(taskInput.value);
  // Store in localStorage
  storeTaskInLocal(taskInput.value);

  // Clear input
  taskInput.value = '';
  e.preventDefault();
}

// REMOVE TASK
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    // remove the whole li
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }

    // remove form localStorage
    removeTaskFromLocal(e.target.parentElement.parentElement);
  }
}

// REMOVE ALL TASKS
function removeAllTasks(e) {
  // https://jsperf.com/innerhtml-vs-removechild
  // taskList.innerHTML = '';
  
  if(confirm('All tasks will be removed! Are you sure?')) {
    // Faster
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    // remove form localStorage
    removeAllTasksFromLocal();
  }
}

// FILTER TASKS
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
  // console.log(textVal);
}

// Helper Functions
////////////////////////////////////////////////
// CREATES and ADDES TASK ELEMENT 
function addTaskElement(val) {
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // Create text node and append it to the li
  li.appendChild(document.createTextNode(val));

  // create link (delete item)
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to the li
  li.appendChild(link);

  // Append li to the ul
  taskList.appendChild(li);
}

// Store task to LS
function storeTaskInLocal(task) {
  let tasks;

  // check if values already stored. it so parse out to tasks
  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from LS
function removeTaskFromLocal(taskItem) {

  if(localStorage.getItem('tasks') !== null) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    tasks.forEach((task, index) => {
      if(taskItem.textContent === task) {
        tasks.splice(index, 1);
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    alert('An error has occured. Local memory is empty. Please refresh the page.')
  } 
}

// Remove all tasks from LS
function removeAllTasksFromLocal() {
  localStorage.clear();
}
