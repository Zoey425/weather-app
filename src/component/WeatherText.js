import React from 'react';

const WeatherText = ({ weatherData }) => {
    return (
        <div className="currentWeather">
            <p className="cityName">{weatherData?.name}</p>
            <h1 className="temp">{weatherData?.main.temp}C</h1>
            <p className="weatherState">
                {weatherData?.name} is {weatherData?.weather[0].description}
            </p>
        </div>
    );
};

export default WeatherText;
