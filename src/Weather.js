import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
//import FormattedDate from "./FormattedDate";

export default function Weather(){
 let [city, setCity]= useState(null);
 let [cityEntered, setCityEntered]=useState(false);

 function showTemperature(response){
     console.log(response);

 }

 function handleSubmit(event){
     event.preventDefault();
     setCityEntered(true);
    let apiKey="7bc66b8226689078b2ef89f11a04633c";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(showTemperature);
     console.log(apiUrl);
 }

 function updateCity(event){
     setCity(event.target.value)
     console.log(city);
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
    <div className="row">
          <div className="col-6 todays-weatherData">
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="todays weather image"/>
            <span className="temperature">
                <div className="temperature-number-display">
                    <h3>10</h3>
                    <span className="temperature-metric-switch">
                        <span className="celsius">°C | </span>
                        <span className="fahrenheit">°F</span>

                    </span>
                </div>
            </span>
          </div>
</div>
</div>

if (cityEntered){return ("loading weather data....")} 
else {return (
    <div>{form}</div>
);}
}
