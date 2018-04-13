const posts = [
  {author: 'Ryan', post: 'This is post One'},
  {author: 'Phil', post: 'This is post Two'}
];

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post)
    callback();
  }, 2000);
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


createPost({author: 'Beth', post: 'This is post Three'}, getPosts);

//getPosts();