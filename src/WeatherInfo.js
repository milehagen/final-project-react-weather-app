import React from "react";
import WeatherIcon from "./WeatherIcon";
import CelsiusFahrenheit from "./CelsiusFahrenheit";
import "./CelciusFahrenheit.css";
import "./WeatherInfo.css";

export default function WeatherInfo({ data }) {
	return (
		<div>
			<div className="row">
				<div className="todays-weatherData">
					<div className="weather-icon">
						<WeatherIcon code={data.icon} size={60} alt={data.description} />
					</div>

					<div className="temperature">
						<div className="temperature-number-display">
							<CelsiusFahrenheit celsius={data.temperature} />
						</div>
					</div>
					<div className="col-2 humidity-wind">
						<div>
							Humidity:
							<span>{data.humidity}%</span>
						</div>
						<div>
							Wind:
							<span>{data.wind}/s</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
