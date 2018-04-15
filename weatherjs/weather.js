/**
 * 
 * 
 * 
 */

class Weather {
  constructor(city, state) {
    this.api_key = '1e5e3bac1c39ad01';
    this.city = city;
    this.state = state;
  }

  async get() {
    const api_url = `http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`;

    const response = await fetch(api_url);

    const data = await response.json();

    return data.current_observation;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}