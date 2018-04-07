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

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get ALL (text even) child nodes
val = list.childNodes;
console.log(val);
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
// 1 = Element
// 2 = Attribute (deprecated)
// 3 = Text Node
// 8 = Comment
// 9 = Document itself
// 10 = Doctype

// Get element Children nodes only
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild; // also list text nodes. simular to .childNodes
val = list.firstElementChild; // get only the element nodes
// Last Child
val = list.lastChild; // also list text nodes. simular to .childNodes
val = list.lastElementChild; // get only the element nodes

// Count child elements
val = list.childElementCount;

// get Parent node
val = listItem.parentNode;
val = listItem.parentElement;

// get Parent of Parent
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.parentElement.nextSibling;
val = listItem.parentElement.nextElementSibling;

// get previous sibling
val = listItem.parentElement.previousSibling;
val = listItem.parentElement.previousElementSibling;



console.log(val);

 