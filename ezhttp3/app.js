// APP
const tempData = {
  name: 'Ryan Stone',
  username: 'aNULLseepage',
  email: 'rms@test.cum'
}

// Class obj
const http = new EzHttp;

// Get All users
http.get('http://localhost:3000/api/posts')
    .then(posts => showData(posts))
    .catch(err => console.log(err));

// Post a new user
// http.post('https://jsonplaceholder.typicode.com/users', tempData)
//     .then(res => showResponse(res))
//     .catch(err => console.log(err));

// Put (update) a user
// http.put('https://jsonplaceholder.typicode.com/users/2', tempData)
//     .then(res => showResponse(res))
//     .catch(err => console.log(err));

// Delete a user
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//     .then(res => console.log(res))
//     .catch(err => console.log(err));



function showResponse(data) {
  let dataOut = `
      <li>
        ${data.name}<br>
        Username: ${data.username}<br>
        Email: ${data.email}<br>
        ID: ${data.id}
      </li>
    `;
  document.getElementById('output').innerHTML = dataOut;
  //console.log(typeof(data));
}


function showData(dataIn) {
  let dataOut = '';
  dataIn.forEach(data => {
    dataOut += `
      <li>
        Post _id: ${data._id}<br>
        Poster id: ${data.userId}<br>
        Title: ${data.title}<br>
        <span>${data.date}</span><br>
        Body: ${data.body}
      </li>
    `;
  });
  document.getElementById('output').innerHTML = dataOut;
  console.log(typeof(dataIn));
}