const API_KEY = `059ad59c9df94e8db90b60a569f9cc40`;

const searchTemperature = () =>{
    // const city = document.getElementById('city-name').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature =>{
    console.log(temperature);
    //set country name
    setInnerText('country', temperature.sys.country);
    //set city name
    setInnerText('city', temperature.name);
    //set real temperature
    setInnerText('temperature-real', temperature.main.temp);
    //set feels like temperature
    setInnerText('temperature-feels', temperature.main.feels_like);
    //set weather condition 
    setInnerText('weather-condition', temperature.weather[0].description);
    //set wind-speed 
    setInnerText('wind-speed', temperature.wind.speed);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', url);
}
