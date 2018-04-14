document.getElementById('button1').addEventListener('click', getTextData);
document.getElementById('button2').addEventListener('click', getJsonData);
document.getElementById('button3').addEventListener('click', getApiData);


// // Listener click functions -- W/O Arrow funcs
// // Text Data
// function getTextData() {
//   fetch('../async/data/data.txt')
//   .then(function(res) {
//     return res.text();
//   })
//   .then(function(data) {
//     document.getElementById('output').innerHTML = `<p>${data}</p>`;
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// }

// // JSON Data
// function getJsonData() {
//   fetch('../async/data/customers.json')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     let output = '';
//     data.forEach(customer => {
//        output += `<p>${customer.name}</p>`;  
//     });

//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// }

// // API Data
// function getApiData() {
//   fetch('https://api.github.com/users')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     let output = '';
//     data.forEach(user => {
//        output += `
//         <div>
//           <h4>${user.login}</h4>
//           <a href="${user.url}"><img src="${user.avatar_url}"></a>
//         </div>
//         <hr>
//         `;  
//     });

//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// }


// Listener click functions -- WITH Arrow funcs
// Text Data
function getTextData() {
  fetch('../async/data/data.txt')
  .then(res => res.text())
  .then(data => {
      // do something with the raw data
      document.getElementById('output').innerHTML = `<p>${data}</p>`;
  });
  //.catch(data => console.log(data));   <---- does not work! WHY???
}

// JSON Data
function getJsonData() {
  fetch('../async/data/customers.json')
  .then(res => res.json())
  .then(data => {
    // do something with the raw data
    let output = '';
    data.forEach(customer => {
       output += `<p>${customer.name}</p>`;  
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

// API Data
function getApiData() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(user => {
       output += `
        <div>
          <h4>${user.login}</h4>
          <a href="${user.html_url}" target="_blank"><img src="${user.avatar_url}"></a>
        </div>
        <hr>
        `;  
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}