import React from 'react';

function WeatherCard({ weather, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <img 
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
        alt="Weather Icon" 
      />
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
}

export default WeatherCard;