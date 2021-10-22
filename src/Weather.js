import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather({defaultcity}){
 let [city, setCity]= useState({defaultcity});
 const [cityEntered, setCityEntered]=useState(false);
 const [weatherData, setWeatherData]=useState({});

  function handleSubmit(event){
     event.preventDefault();
    search();
 }

 function updateCity(event){
     setCity(event.target.value)
 }
 function search(){
      setCityEntered(true);
    let apiKey="7bc66b8226689078b2ef89f11a04633c";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(displayWeather);
 }


  function displayWeather(response){
     setWeatherData({
        date:new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        humidity:response.data.main.humidity,
        cityName: response.data.name,
        description: response.data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
     }
     );
 }


let form = <div className="weather">
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
    </div>

if (cityEntered){return (
    <div>{form}
    <WeatherInfo data={weatherData}/>
   </div>
    )} 
else {return (
    <div>{form}</div>
);}
}
