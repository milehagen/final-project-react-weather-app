import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(){

let [city, setCity]=useState(null);
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
    date: new Date (response.data.dt * 1000),
    Temperature: response.data.main.temp,
    Description:response.data.weather[0].description,
    Wind: response.data.wind.speed,
    citySearched: response.data.name,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` ,
    });

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
            <img className="current-weather-icon"src={weatherData.icon} alt="weather icon"/> 
            <div className="temperature">
            <div className="temperature-metric-controller">
                <span className="current-temperature">{Math.round(weatherData.Temperature)}</span>
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
                <div className="date"> 
                <FormattedDate date={weatherData.date}/> 
                </div>
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