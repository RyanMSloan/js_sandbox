/**
 * Ez-HTTP Library
 * Library for making HTTP request
 * 
 * @version 3.0.0
 * @author  RMS
 * @license MIT
 * 
 */

class EzHttp {
  // GET
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // POST
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // PUT
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // DELETE
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {'content-type':'application/json'}
    });
    const resData = await 'User Deleted.';
    return resData;
  }
}