

const apiKey = '8f04b9674c93a110465c442216a287a8';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';
let cityName = document.querySelector('.serachBox input')
let srchBtn = document.querySelector('.srchBtn');

async function checkWether(city) {
    let response = await fetch(apiUrl + `q=${city}&appid=${apiKey}`);
    if (response.status == 404) {
        alert("invaild city");
        document.querySelector('.weather-card').style.display = "none";
    } else {
        let data = await response.json();
        console.log(data)
        cityName.value = '';
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.w-text').innerHTML = data.weather[0].main;
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity-data').innerText = data.main.humidity + ' g.m-3';
        document.querySelector('.wind-data').innerHTML = data.wind.speed + "km/h";
        document.querySelector('.weather-card').style.display = "block";

        if (data.weather[0].main == 'Fog') {
            document.querySelector('.weather-img').src = "./images/snow.png";
        } else if (data.weather[0].main == 'Clear') {
            document.querySelector('.weather-img').src = "./images/clear.png";
        }
        else if (data.weather[0].main == 'Clouds') {
            document.querySelector('.weather-img').src = "./images/clouds.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            document.querySelector('.weather-img').src = "./images/drizzle.png";
        }
        else if (data.weather[0].main == 'Mist') {
            document.querySelector('.weather-img').src = "./images/mist.png";
        }
        else if (data.weather[0].main == 'Rain') {
            document.querySelector('.weather-img').src = "./images/rain.png";
        }
        else if (data.weather[0].main == 'Snow') {
            document.querySelector('.weather-img').src = "./images/snow.png";
        }
    }
}
srchBtn.addEventListener('click', () => {
    checkWether(cityName.value);
})
