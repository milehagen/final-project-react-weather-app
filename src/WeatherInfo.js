import React from "react";
import WeatherIcon from "./WeatherIcon";
import CelsiusFahrenheit from "./CelsiusFahrenheit";
import "./CelciusFahrenheit.css";
import "./WeatherInfo.css";

export default function WeatherInfo({ data }) {
	return (
		<div>
			<div className="row">
				<div className="weather-icon">
					<WeatherIcon code={data.icon} size={60} alt={data.description} />
				</div>

				<span className="temperature">
					<div className="temperature-number-display">
						<CelsiusFahrenheit celsius={data.temperature} />
					</div>
				</span>
			</div>
		</div>
	);
}
