// App - uses ezhttp api accessor

const postData = {title: 'New blog post', body: 'This is a simple body example.'};

const http = new EzHttp();

////////////////// REQUESTS //////////////////////
// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', cbResponse);

// GET single Post
// http.get('https://jsonplaceholder.typicode.com/posts/34', cbResponse);

// POST a new Post
// http.post('https://jsonplaceholder.typicode.com/posts', postData, cbResponse);

// PUT - update a post
// http.put('https://jsonplaceholder.typicode.com/posts/1', postData, cbResponse);

// DELETE a post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', cbResponse);



////////////////// RESPONSES //////////////////////
// GET response
function cbResponse(err, response) {
  if(!err) {
    console.log(response);  
  } else {
    console.log(err);
  }
}