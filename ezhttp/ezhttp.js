// EZ-Http API

// Post
function EzHttp() {
  this.http = new XMLHttpRequest();
}

// Make a http GET request
EzHttp.prototype.get = function(url, callback) {
  // scope
  let self = this;
  
  this.http.open('GET', url, true);
  this.http.send();
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }
}

// Make a http POST request
EzHttp.prototype.post = function(url, data, callback) {
  let self = this;
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'Application/json');
  this.http.send(JSON.stringify(data));
  this.http.onload = function() {
    if(self.http.status === 201) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }
}

// Make a http PUT request
EzHttp.prototype.put = function(url, data, callback) {
  let self = this;
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'Application/json');
  this.http.send(JSON.stringify(data));
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }
}

// Make a http DELETE request
EzHttp.prototype.delete = function(url, callback) {
  // scope
  let self = this;
  
  this.http.open('DELETE', url, true);
  this.http.send();
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post has been removed.');
    } else {
      callback('Error: ' + self.http.status);
    }
  }
}