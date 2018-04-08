// DEFINE UI VARS
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);


}


// listener events
function addTask(e) {
  if(taskInput.value === '')
    alert('Field can not be empty.');

  // create li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  
  console.log(li);
  e.preventDefault();
}