import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
    return (
        
        <div className="weather">
       
      <form>  
          <div className="row">
          <div className="col-6">
                <input type="text" placeholder="Enter a city..." className="form-control" autoFocus="yes"/>
            </div>
                 <div className="col-3">
                <button type="button" className="btn btn-primary  w-100">Search</button>
            </div>
         </div>
    </form>

<div className="row">
            <div className="col-6 current-weather-temp">
            <img className="current-weather-icon"src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="current-weather-pic"/> 
            <div className="temperature">
            <div className="temperature-metric-controller">
                <span className="current-temperature">9</span>
            <div className="metric-controller">°C |°F</div>

            <div className="precip-humid-wind">
                  <div>Precipitation:<span>84%</span></div>
                    <div>Humidity:<span>81%</span></div>
                    <div>Wind: <span>5 m/s</span></div>
            </div>
        </div>
    </div>
</div>

  <div className="col-6 city-date-description">
        <div className="current-weather-description">
            <h3>Oslo</h3>
                <div className="day">Thursday 13:18</div>
                    <div className="weather-description"><span>Light rain showers</span></div>
        </div>
    </div>
</div>
<hr/>
<div className="row">
<div className="col-2">
    <p>test</p>

</div>

</div>
</div>
    )
}