import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CelsiusFahrenheit from "./CelsiusFahrenheit"; 


export default function WeatherInfo({data}){

    return (<div>
         <div className="row">
          <div className="col-6 todays-weatherData">
              <WeatherIcon code={data.icon}
              alt={data.description}/>
            <span className="temperature">
                <div className="temperature-number-display">
                 
                    <CelsiusFahrenheit celsius={data.temperature}/>

                   
                </div>
            </span>
        <span className="col-2 humidity-wind">
              <div>Humidity:
                  <span>{data.humidity}%</span>
              </div>
               <div>Wind:
                  <span>{data.wind}/s</span>
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