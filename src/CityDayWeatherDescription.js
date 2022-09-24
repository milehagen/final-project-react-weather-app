import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function CityAndDay({ cityDayData }) {
	return (
		<div className="city-Day-WeatherDescription">
			<div className="city">{cityDayData.cityName}</div>
			<div className="weekDay">
				{" "}
				<FormattedDate date={cityDayData.date} />{" "}
			</div>
			<div className="weatherDescription">
				<div className="weatherDescription text-capitalize">
					{cityDayData.description}
				</div>
			</div>
			<span className="col-2 humidity-wind">
				<div>
					Humidity:
					<span>{WeatherInfo.humidity}%</span>
				</div>
				<div>
					Wind:
					<span>{WeatherInfo.wind}/s</span>
				</div>
			</span>
		</div>
	);
}
