import React, { useState } from "react";

export default function CelsiusFahrenheit({celsius}){
    const [unit, setUnit]= useState("celsius");
    
    function showFahrenheit(event){
        event.preventDefault();
       setUnit("fahrenheit")
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if(unit==="celsius"){
    return <div>
           <h3>{Math.round(celsius)}</h3>
    <span className="temperature-metric-switch">
                        <span className="fahrenheit"> <strong>°C</strong> | <a href="/" onClick={showFahrenheit}>°F</a></span>
                    </span>
                    </div>
                    }

                    else  {
                    let fahrenheit = (celsius)*9/5 + 32
                    return (<div>
           <h3>{Math.round(fahrenheit)}</h3>
    <span className="temperature-metric-switch">
                        <span className="celsius"> <strong> °F</strong> |<a href="/" onClick={showCelsius}>°C </a> </span>
                    </span>
                    </div>);
                    
                    }
}