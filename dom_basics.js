////////////////////////////////////////////////////////////
// DOM Basics

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms; // Not recomended
val = document.forms[0]; // Not recomended
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[1];
val = document.links[3].id;
val = document.links[3].className;
val = document.links[2].classList;
val = document.links[2].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute('src');

//console.log(val);

// Get HTML collection, convert to an Array, foreach loop out
// let scripts = document.scripts; // this does not work. is HTML collection. not an array
// let scriptsArr = Array.from(scripts); // this makes an array from the HTML collection
// scriptsArr.forEach(script => {           // works now
//   console.log(script.getAttribute('src'));
// });


////////////////////////////////////////////////////////////
// DOM Selectors for Single Element

// DOM - document.getElementById
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);

