import { useState, useEffect } from "react";
import "./Weather.scss";
import {
  getDate,
  getDayOfWeek,
  getTimeFromDateString,
  getShortDayOfWeek,
} from "../../utils";
import { key } from "../../API_key";

const Weather = (props) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${props.city}&days=8&aqi=no&alerts=yes`;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [props.city]);

  return (
    <>
      {weatherData && (
        <div className="weather__container">
          <div className="weather__location">
            <p className="weather__location__city">
              {weatherData.location.name}
            </p>
            <p className="weather__location__country">
              {weatherData.location.country}
            </p>
          </div>
          <div className="weather__temperature">
            {weatherData.current.temp_c}
            <span className="weather__temperature-format">{"\u2103"}</span>
          </div>
          <div className="weather__date__container">
            <p className="weather__date">{getDate()}</p>
            <div className="weather__date__dayAndTime">
              <span>{getDayOfWeek()}</span>
              <span className="line">|</span>
              <span>
                {getTimeFromDateString(weatherData.current.last_updated)}
              </span>
            </div>
          </div>
          <div className="weather__info">
            <span>
              <i className="bi bi-wind"></i> Wind {weatherData.current.wind_kph}{" "}
              km/h
            </span>
            <span className="line">|</span>
            <span>
              <i className="bi bi-droplet"></i> Hum{" "}
              {weatherData.current.humidity} %
            </span>
            <span className="line">|</span>
            <span>
              <i className="bi bi-cloud-drizzle"></i> Rain{" "}
              {weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %
            </span>
          </div>
          <div className="weather-cards__container">
            {weatherData.forecast.forecastday.slice(1).map((day, index) => (
              <div key={index} className="weather-card">
                <p className="weather-card__temperature">
                  {day.day.avgtemp_c}°C
                </p>

                <p className="weather-card__day">
                  {getShortDayOfWeek(day.date)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
