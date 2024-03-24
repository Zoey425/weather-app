import React from 'react';

const WeatherText = ({ weatherData }) => {
    const temp = parseInt(weatherData?.main.temp);
    const fahrenheit = Math.floor((temp * 9) / 5 + 32);

    return (
        <div className="currentWeather">
            <p className="cityName">{weatherData?.name}</p>
            <h1 className="temp">
                {temp}
                <span className="fontSpan">&#x2103;</span> / {fahrenheit}
                <span className="fontSpan">&#8457;</span>
            </h1>
            <p className="weatherState">
                <span className="cityName">{weatherData?.name}</span> is {weatherData?.weather[0].description}
            </p>
        </div>
    );
};

export default WeatherText;
