import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather({defaultCity}){

let [city, setCity]=useState("");
let [weatherData, setWeatherData]=useState({cityEntered:false});

function handleSubmit(event){
    event.preventDefault();
 const apiKey="7bc66b8226689078b2ef89f11a04633c";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(displayWeather);
}
function displayWeather(response){
setWeatherData({
    cityEntered:true,

    Temperature: response.data.main.temp,
    Description:response.data.weather[0].description,
    Wind: response.data.wind.speed,
    citySearched: response.data.name,
    });
   
console.log(response.data);
}

function updateCity(event){
    setCity(event.target.value);
}


 
let form= <div className="weather">
       
      <form onSubmit={handleSubmit}>  
          <div className="row">
          <div className="col-6">
                <input type="text" placeholder="Enter a city..." className="form-control" autoFocus="yes" onChange={updateCity}/>
            </div>
                 <div className="col-3">
                <button type="button" className="btn btn-primary  w-100" >Search</button>
            </div>
         </div>
    </form>

<div className="row">
            <div className="col-6 current-weather-temp">
            <img className="current-weather-icon"src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="current-weather-pic"/> 
            <div className="temperature">
            <div className="temperature-metric-controller">
                <span className="current-temperature">{weatherData.Temperature}</span>
            <div className="metric-controller">°C |°F</div>

            <div className="precip-humid-wind">
                  <div>Precipitation:<span>84%</span></div>
                    <div>Humidity: <span>{weatherData.Humidity}%</span></div>
                    <div>Wind: <span>{weatherData.Wind} m/s</span></div>
            </div>
        </div>
    </div>
</div>

  <div className="col-6 city-date-description">
        <div className="current-weather-description">
            <h3>{weatherData.citySearched}</h3>
                <div className="day">Thursday 13:18</div>
                    <div className="weather-description"><span>{weatherData.Description}</span></div>
        </div>
    </div>
</div>
<hr/>
<div className="row">
<div className="col-2">
    <p>test</p>

</div>

</div>
</div>;

if (weatherData.cityEntered) return (form);

else { return <div>
    {form}
{displayWeather}
</div>
}
}