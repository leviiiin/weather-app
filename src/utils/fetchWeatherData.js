import { getShortDayOfWeek } from './getShortDayOfWeek'

export function fetchWeatherData(city) {
  const key = "ce5d57310bc148d6b95140450240502";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=8&aqi=no&alerts=yes`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return {
        name: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        last_updated: data.current.last_updated,
        wind: data.current.wind_kph,
        humidity: data.current.humidity,
        rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
        forecast: data.forecast.forecastday.slice(1).map(day => ({
          temperature: day.day.avgtemp_c,
          dayOfWeek: getShortDayOfWeek(day.date)
        }))
      };
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      return null;
    });
}
