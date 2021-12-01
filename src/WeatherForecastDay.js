import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay ({dailyForecastData}){

    function maxTemperature (){
        let temperature = Math.round(dailyForecastData.temp.max);
        return `${temperature}°`
    }

    function minTemperature (){
        let temperature = Math.round(dailyForecastData.temp.min);
        return `${temperature}°`
    }

    function dayOfWeek(){
        let date = new Date(dailyForecastData.dt * 1000);
        let day = date.getDay();
        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

return (   <div className="col">
                <div className="FiveDayForecast-day">
                    {dayOfWeek()}
                </div>
                     <div className="FiveDayForecast-icon"> 
                        <WeatherIcon code= {dailyForecastData.weather[0].icon}size={36}/>
                    </div>
                <div className="FiveDayForecast-temperature"> 
                    <span className="temp-max"><strong>{maxTemperature()}</strong></span> 
                    <span className="temp-min">{minTemperature()}</span> 

                 </div>
         </div>);
}