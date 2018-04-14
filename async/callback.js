const posts = [
  {author: 'Ryan', post: 'This is post One'},
  {author: 'Phil', post: 'This is post Two'}
];

/**
 * ES5 callback
 * 
 */
// function createPost(post, callback) {
//   setTimeout(function() {
//     posts.push(post)
//     callback();
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(post => {
//       output += `<li>${post.post}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }


// createPost({author: 'Beth', post: 'This is post Three'}, getPosts);
// //getPosts();

/**
 * ES6 Promises
 * 
 */
function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      
      // testing error
      let error = false;
      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }

    }, 2000);
  });
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.post}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}


function errHandle(err) {
  console.log(err);
}

createPost({author: 'Beth', post: 'This is post Three'}).then(getPosts).catch(errHandle);