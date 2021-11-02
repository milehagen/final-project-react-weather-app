import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo({data}){

    return (<div>
         <div className="row">
          <div className="col-6 todays-weatherData">
              <WeatherIcon code={data.icon}
              alt={data.description}/>
            <span className="temperature">
                <div className="temperature-number-display">
                    <h3>{Math.round(data.temperature)}</h3>
                    <span className="temperature-metric-switch">
                        <span className="celsius">°C | </span>
                        <span className="fahrenheit">°F</span>
                    </span>
                    <div className="col-2 humidity-wind">
              <div>Humidity:
                  <span>{data.humidity}%</span>
              </div>
               <div>Wind:
                  <span>{data.wind}/s</span>
              </div>
          </div>
                </div>
            </span>
       
          </div>
           <div className="col-6 city-date-weatherDescription">
    <div className="city">{data.cityName}</div> 
    <div className="weekDay"> <FormattedDate date= {data.date}/> </div>
    <div className="weatherDescription text-capitalize">{data.description}</div>
         </div>
</div>
</div>)
}