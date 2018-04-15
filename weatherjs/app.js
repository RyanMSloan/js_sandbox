// Init Storage
const storage = new Storage();
const wLocation = storage.getLocation();
// Init Weather
const weather = new Weather(wLocation.city, wLocation.state);
// Init UI
const ui = new UI();

// LISTENERS ....
// Get weather on page load
document.addEventListener('DOMContentLoaded', getWeather);
// Save new location btn
document.getElementById('w-change-btn').addEventListener('click', updateLocation);

// Get weather from weather.js 
// and passes data to ui.js
function getWeather() {
  weather.get()
    .then(data => {
      ui.paint(data);
    })
    .catch(err => console.log(err));
}

// Changes location
function updateLocation(e) {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  // pass new location to the weather API
  weather.changeLocation(city, state);
  // set new location to localstorage
  storage.setLocation(city, state);

  // finally run getWeather again to refresh content
  getWeather();
  // close modal
  $('#locModal').modal('hide');
}

  