import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FiveDayForecast from "./FiveDayForecast";

export default function Weather({defaultCity}){

 let [city, setCity]= useState(defaultCity);
 const [weatherData, setWeatherData]=useState({ready:false});

  function displayWeather(response){
     setWeatherData({
        ready:true,
        date:new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        humidity:response.data.main.humidity,
        cityName: response.data.name,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        
     }
     );
 }
function search(){
    let apiKey="7bc66b8226689078b2ef89f11a04633c";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(displayWeather);
 }

  function handleSubmit(event){
     event.preventDefault();
    search();
 }
 
 function updateCity(event){
     setCity(event.target.value)
 }

 let form =  <div><div className="weather">
      <form onSubmit={handleSubmit}>  
          <div className="row">
          <div className="col-6">
                <input type="text" placeholder="Enter a city..." className="form-control" autoFocus="yes" onChange={updateCity}/>
            </div>
                 <div className="col-4">
                <button type="button" className="btn btn-primary  w-100" >Search</button>
            </div>
         </div>
    </form>
    </div>
   </div>;



if (weatherData.ready){return (<div>{form}
    <WeatherInfo data={weatherData}/>
    <FiveDayForecast/>
    </div>);
}

else { search(); return "loading...";
}
}