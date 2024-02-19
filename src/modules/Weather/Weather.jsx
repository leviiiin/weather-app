import { useState, useEffect } from "react";
import "./Weather.scss";
import {
  getDate,
  getDayOfWeek,
  getTimeFromDateString,
  fetchWeatherData,
} from "../../utils";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(props.city).then((data) => setWeatherData(data));
  }, [props.city]);

  if (!weatherData) {
    return null;
  }

  return (
    <>
      <div className="weather__container">
        <div className="weather__location">
          <p className="weather__location__city">{weatherData.name}</p>
          <p className="weather__location__country">{weatherData.country}</p>
        </div>
        <div className="weather__temperature">
          {weatherData.temperature}
          <span className="weather__temperature-format">{"\u2103"}</span>
        </div>
        <div className="weather__date__container">
          <p className="weather__date">{getDate()}</p>
          <div className="weather__date__dayAndTime">
            <span>{getDayOfWeek()}</span>
            <span className="line">|</span>
            <span>{getTimeFromDateString(weatherData.last_updated)}</span>
          </div>
        </div>
        <div className="weather__info">
          {weatherData.wind && (
            <>
              <span>
                <i className="bi bi-wind"></i> Wind {weatherData.wind} km/h
              </span>
              <span className="line">|</span>
            </>
          )}
          {weatherData.humidity && (
            <>
              <span>
                <i className="bi bi-droplet"></i> Hum {weatherData.humidity} %
              </span>
              <span className="line">|</span>
            </>
          )}
          {weatherData.rainChance !== null &&
            weatherData.rainChance !== undefined && (
              <span>
                <i className="bi bi-cloud-drizzle"></i> Rain{" "}
                {weatherData.rainChance} %
              </span>
            )}
        </div>
        <div className="weather-cards__container">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="weather-card">
              <p className="weather-card__temperature">{day.temperature}°C</p>
              <p className="weather-card__day">{day.dayOfWeek}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Weather;
