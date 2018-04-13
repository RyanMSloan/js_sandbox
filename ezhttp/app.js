// App - uses ezhttp api accessor

const postData = {title: 'New blog post', body: 'This is a simple body example.'};

const http = new EzHttp();

////////////////// REQUESTS //////////////////////
// GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', callbackRes);

// GET single Post
// http.get('https://jsonplaceholder.typicode.com/posts/34', callbackRes);

// POST a new Post
// http.post('https://jsonplaceholder.typicode.com/posts', postData, callbackRes);

// PUT - update a post
// http.put('https://jsonplaceholder.typicode.com/posts/1', postData, callbackRes);

// DELETE a post
http.delete('https://jsonplaceholder.typicode.com/posts/1', callbackRes);



////////////////// RESPONSES //////////////////////
// GET response
function callbackRes(err, response) {
  if(!err) {
    console.log(response);  
  } else {
    console.log(err);
  }
}