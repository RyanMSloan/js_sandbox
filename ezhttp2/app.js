// APP
const http = new EzHttp;

const tempData = {
  name: 'Jimmy',
  username: 'jimSkevyy',
  email: 'james_skill@test.com'
}

// Get users - json placeholder
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Post to users - json placeholder
// http.post('https://jsonplaceholder.typicode.com/users', tempData)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Put (update) to users - json placeholder
// http.put('https://jsonplaceholder.typicode.com/users/2', tempData)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete a user from users - json placeholder
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));