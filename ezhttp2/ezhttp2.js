/**
 * Ez-HTTP Library
 * Library for making HTTP request
 * 
 * @version 2.0.0
 * @author  RMS
 * @license MIT
 * 
 */

class EzHttp {
  // Make HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .then(err => reject(err));
    });
  }

  // Make HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .then(err => reject(err));
    });
  }

  // Make HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {'content-type':'application/json'}
      })
      .then(res => res.json())
      .then(() => resolve('User deleted.'))
      .catch(err => reject(err));
    });
  }
}