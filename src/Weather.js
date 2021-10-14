import React from "react";

export default function Weather(){
    return (
        <div>
            <p> <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"/> 9°C</p>
            <span>
            <small>
                <ul>
                    <li>Precipitation</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                    
                </ul>
            </small>
            </span>
        </div>
    )
}