import React from "react";
import FormattedDate from "./FormattedDate";

export default function CityAndDay({cityDayData}){

    return  (<div className="city-Day-WeatherDescription">
    <div className="city">{cityDayData.cityName}</div> 
    <div className="weekDay"> <FormattedDate date= {cityDayData.date}/> </div>
     <div className="weatherDescription">
    <div className="weatherDescription text-capitalize">{cityDayData.description}</div>
         </div>
    </div>)

}