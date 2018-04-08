////////////////////////////////////////////////////////////
// Lecture 22 - DOM Basics

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms; // Not recomended
// val = document.forms[0]; // Not recomended
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[1];
// val = document.links[3].id;
// val = document.links[3].className;
// val = document.links[2].classList;
// val = document.links[2].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[0].getAttribute('src');

//console.log(val);

// Get HTML collection, convert to an Array, foreach loop out
// let scripts = document.scripts; // this does not work. is HTML collection. not an array
// let scriptsArr = Array.from(scripts); // this makes an array from the HTML collection
// scriptsArr.forEach(script => {           // works now
//   console.log(script.getAttribute('src'));
// });


////////////////////////////////////////////////////////////
// Lecture 23 -  DOM Selectors for Single Element

// // DOM - document.getElementById
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change Style
// taskTitle.style.background = '#ccc';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change Content
// taskTitle.textContent = 'textContent Tasks';
// taskTitle.innerText = 'Inner Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// // document.querySelector();
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'blue';
// document.querySelector('ul li').style.color = 'gray';
// document.querySelector('li:last-child').style.color = 'purple';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello!';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


////////////////////////////////////////////////////////////
// Lecture 24 - lectors for multiple elements

// document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// document.querySelector() and document.getElementsByClassName()
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementByTagName()
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// Convert HTML collection into an Array
// lis = Array.from(lis);

// // lis reverse
// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index} : Hello`;
// })

// console.log(lis);

// const nodeItems = document.querySelectorAll('ul.collection li.collection-item');
// nodeItems.forEach((item, index) => {
//   item.textContent = `${index} : Hello yall`;
// });
// console.log(nodeItems);

// const liOdds = document.querySelectorAll('li:nth-child(odd)');
// const liEvens = document.querySelectorAll('li:nth-child(even)');

// liOdds.forEach(liOdd => {
//   liOdd.style.background = '#ccc';
// });
// liEvens.forEach(liEven => {
//   liEven.style.background = '#f4f4f4';
// });


////////////////////////////////////////////////////////////
// Lecture 25 - Traversing the DOM

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get ALL (text even) child nodes
// val = list.childNodes;
// console.log(val);
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;
// // 1 = Element
// // 2 = Attribute (deprecated)
// // 3 = Text Node
// // 8 = Comment
// // 9 = Document itself
// // 10 = Doctype

// // Get element Children nodes only
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';

// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // First Child
// val = list.firstChild; // also list text nodes. simular to .childNodes
// val = list.firstElementChild; // get only the element nodes
// // Last Child
// val = list.lastChild; // also list text nodes. simular to .childNodes
// val = list.lastElementChild; // get only the element nodes

// // Count child elements
// val = list.childElementCount;

// // get Parent node
// val = listItem.parentNode;
// val = listItem.parentElement;

// // get Parent of Parent
// val = listItem.parentElement.parentElement;

// // get next sibling
// val = listItem.parentElement.nextSibling;
// val = listItem.parentElement.nextElementSibling;

// // get previous sibling
// val = listItem.parentElement.previousSibling;
// val = listItem.parentElement.previousElementSibling;

// console.log(val);

 
////////////////////////////////////////////////////////////
// Lecture 26 - Creating Elements

// // Create the element
// const li = document.createElement('li');
// // Add Class
// li.className = 'collection-item';
// // Add id
// //li.id = 'new-item';
// // Set Attribute
// li.setAttribute('title', 'New Item');
// // Create text and append
// li.appendChild(document.createTextNode('Hello World!'));
// //li.innerHTML = 'Hello Again World';

// // Create new link item
// const link = document.createElement('a');
// // Add Class
// link.className = 'delete-item secondary-content';
// // Add icon HTML
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // Append link into li
// li.appendChild(link);


// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// //console.log(li);


////////////////////////////////////////////////////////////
// Lecture 27 - Removing and replacing Elements

// // REPLACE ELEMENT
// // Create element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // Add text node
// newHeading.appendChild(document.createTextNode('Task List'));
// //console.log(newHeading);

// // Get old heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);


// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove the list
// lis[0].remove();

// // Remove by child element
// list.removeChild(lis[3]);

// // Classes and Attr
// const firstLi = document.querySelector('li:first-child');
// const liLink = firstLi.children[0];
// //console.log(firstLi.children[0]);

// let val;

// // Classes
// val = liLink.className;
// val = liLink.classList;
// val = liLink.classList[0];

// // Add a class to current
// liLink.classList.add('test');
// liLink.classList.remove('test');
// val = liLink;

// // Attributes
// val = liLink.getAttribute('href');
// val = liLink.setAttribute('href', 'basics_index.html');
// liLink.setAttribute('title', 'basics');
// val = liLink.hasAttribute('title');
// console.log(val);
// liLink.removeAttribute('title');
// val = liLink;

// console.log(val);


////////////////////////////////////////////////////////////
// Lecture 28 - Event Listeners & The Event Object

// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('You Clicked the clear task button.');
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//   e.preventDefault();

//   let val;

//   val = e;

//   // Event Target Element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   e.target.innerText = 'Processing...';

//   // Event Type
//   val = e.type;

//   // TimeStamp
//   val = e.timeStamp;

//   // Coords event relative to the window
//   val = 'X ' + e.clientX + ' : Y ' + e.clientY;

//   // Coords event relative to the window
//   val = 'X ' + e.offsetX + ' : Y ' + e.offsetY;

//   console.log(val);
// }

////////////////////////////////////////////////////////////
// Lecture 29 - Mouse Events

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);

// // Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// // Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);

// // Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// // Mouse Leave
// card.addEventListener('mouseleave', runEvent);

// // Mouse Over
// card.addEventListener('mouseover', runEvent);
// // Mouse Out
// card.addEventListener('mouseout', runEvent);

// // Mouse Move
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `Mouse X: ${e.offsetX} - Mouse Y: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

// }


////////////////////////////////////////////////////////////
// Lecture 30 - Keyboard and input events

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// // const select = document.querySelector('select');
// // Clear Input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('keydown', runEvent);
// // Keyup
// taskInput.addEventListener('keyup', runEvent);
// // Keypress
// taskInput.addEventListener('keypress', runEvent);
// // Focus

// taskInput.addEventListener('focus', runEvent);
// // Blur
// taskInput.addEventListener('blur', runEvent);

// // Copy
// taskInput.addEventListener('copy', runEvent);
// // Cut
// taskInput.addEventListener('cut', runEvent);
// // Paste
// taskInput.addEventListener('paste', runEvent);
// // Input
// taskInput.addEventListener('input', runEvent);

// // Change Event
// select.addEventListener('change', runEvent);



// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // // Get Form Input Value
  // console.log(taskInput.value);
  // e.preventDefault();
// }


////////////////////////////////////////////////////////////
// Lecture 31 - Event Bubbling and Delegation

// // EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', () => {
//   console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click', () => {
//   console.log('card content');
// });
// document.querySelector('.card').addEventListener('click', () => {
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', () => {
//   console.log('col');
// });

// EVENT DELEGATION
// document.body.addEventListener('click', runEvent);

// function runEvent(e) {
//   if(e.target.parentElement.classList.contains('delete-item')) {
//     console.log('Delete Item');

//     e.target.parentElement.parentElement.remove();
//   }
// }


////////////////////////////////////////////////////////////
// Lecture 32 - Local & session storage

// // Set localStorage
//const tasksArr = ['Take a Poo', 'Make Coffee', 'Eat Lunch'];
//localStorage.setItem('tasks', JSON.stringify(tasksArr));

// // Get localStorage
// const tasksArr = JSON.parse(localStorage.getItem('tasks'));
// tasksArr.forEach(task => {
//   console.log(task);
// });

// Add to local storage via form subit
document.querySelector('form').addEventListener('submit', addTask);

function addTask(e) {
  // Get input
  const task = document.getElementById('task').value;

  // Pull local storage, if any
  let tasksArr;
  if(localStorage.getItem('tasks') === null) {
    tasksArr = [];
  } else {
    tasksArr = JSON.parse(localStorage.getItem('tasks'));
  }
  
  // Push new task onto tasksArr
  tasksArr.push(task);

  // Now set into/back to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasksArr));

  e.preventDefault();
}

if(localStorage.getItem('tasks') !== null) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(task => {
    console.log(task);
  });
}

