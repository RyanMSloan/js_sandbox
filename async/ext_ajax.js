// APP

document.getElementById('submit').addEventListener('click', getJokes);

function getJokes(e) {
  // input
  const jokeCount = document.querySelector('input[type="number"]').value;
  
  // xmlhttprequest object
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${jokeCount}`, true);
  xhr.send();
  xhr.onload = function() {
    
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      }

      document.getElementById('jokes').innerHTML = output;
    }
  }
  //console.log(jokeCount);
  e.preventDefault();
}