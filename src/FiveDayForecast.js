import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FiveDayForecast.css";


export default function FiveDayForecast(){
    return <div className="FiveDayForecast">
<div className="FiveDayForecast-day">
    Mon
</div>
<div className="FiveDayForecast-icon"> 
<WeatherIcon code="01d" size={36}/>
</div>
<div className="FiveDayForecast-temperature"> 
<span className="temp-max"><strong>8°</strong></span> 
<span className="temp-min">6°</span> 

</div>
    </div>;
}