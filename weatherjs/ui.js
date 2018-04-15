/**
 * 
 * 
 * 
 */

class UI {
  constructor() {
    this.location   = document.getElementById('w-location');
    this.desc       = document.getElementById('w-desc');
    this.string     = document.getElementById('w-string');
    this.icon       = document.getElementById('w-icon');
    //this.details    = document.getElementById('w-details');
    this.humidity   = document.getElementById('w-humidity');
    this.feels_like = document.getElementById('w-feels-like');
    this.wind       = document.getElementById('w-wind');
    this.dewpoint   = document.getElementById('w-dewpoint'); 
  }

  // Paint (put weather data in fields)
  paint(data) {
    this.location.textContent = data.display_location.full;
    this.desc.textContent = data.weather;
    this.string.textContent = data.temperature_string;
    this.icon.setAttribute('src', data.icon_url);
    this.humidity.textContent = `Relative Humidity: ${data.relative_humidity}`;
    this.feels_like.textContent = `Feels Like: ${data.feelslike_string}`;
    this.wind.textContent = `Wind: ${data.wind_string}`;
    this.dewpoint.textContent = `Dewpoint: ${data.dewpoint_string}`;
  }
}