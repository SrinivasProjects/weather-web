const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

function checkWeather(city){
    // Ignore API call, set temperature to 30 degrees
    temperature.innerHTML = `30°C`;

    // Hide location not found message and show weather body
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    // Reset other weather information
    description.innerHTML = "";
    humidity.innerHTML = "";
    wind_speed.innerHTML = "";
    weather_img.src = ""; // You may set a default image here
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
