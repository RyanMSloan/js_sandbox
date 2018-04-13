// ASYNC

document.getElementById('button').addEventListener('click', getData);

function getData() {
  // Create a XHR Object
  const xhr = new XMLHttpRequest();

  // xhr.open('GET', 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css', true);
  xhr.open('GET', 'data/data.txt');
  xhr.send();
  console.log(xhr.readyState);

  xhr.onload = function() {
    if(this.status === 200) {
      const out = document.getElementById('output');
      out.textContent = this.responseText;
      //console.log(this.responseText);
    }
  }
  
  // Optionals
  xhr.onprogress = function() {
    // loader gif...
    console.log(xhr.readyState);
  }

  xhr.onerror = function() {
    console.log('Request Error...');
  }
}