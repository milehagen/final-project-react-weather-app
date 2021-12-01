import React, {useState} from "react";
import "./FiveDayForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function FiveDayForecast({coordinates}){
    let [ready, setReady]=useState(false);
    let [dailyForecast, setDailyForecast]=useState(null);
    
    function handleResponse(response){
        setDailyForecast(response.data.daily);
        console.log(dailyForecast);
        setReady(true);
    }


    if (ready){
    return (
    <div className="row FiveDayForecast">
            {dailyForecast.map(function(element, index) {
                if (index<5){
                return( 
        
                <WeatherForecastDay  key ={index} dailyForecastData={element}/>
            
                )
                }
            })}
</div>  );
} else {
    let apiKey= "7bc66b8226689078b2ef89f11a04633c";
    let longitude= (coordinates.lon);
    let latitude= (coordinates.lat);
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}