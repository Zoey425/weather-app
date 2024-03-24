import React from 'react';

const WeatherText = ({ weatherData }) => {
    // 날씨 데이터가 있는 경우에만 필요한 정보에 접근하여 표시
    const temp = parseInt(weatherData?.main?.temp);
    const cityName = weatherData?.name;
    const weatherDescription = weatherData?.weather[0]?.description;

    // 화씨로 온도 변환
    const fahrenheit = Math.floor((temp * 9) / 5 + 32);

    return (
        <div className="currentWeather">
            <p className="cityName">{cityName}</p>
            <h1 className="temp">
                {temp}
                <span className="fontSpan">&#x2103;</span> / {fahrenheit}
                <span className="fontSpan">&#8457;</span>
            </h1>
            <p className="weatherState">
                <span className="cityName">{cityName}</span> is {weatherDescription}
            </p>
        </div>
    );
};

export default WeatherText;
