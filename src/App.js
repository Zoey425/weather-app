import { useEffect, useState } from 'react';
import './App.css';
import WeatherText from './component/WeatherText';
import WeatherBtn from './component/WeatherBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from 'react-spinners/ClipLoader';

// 유저스토리
// 1. 유저는 현재 위치의 날씨를 볼 수 있다.
// 1-1. 날씨 정보에는 도시이름, 섭씨, 화씨, 날씨상태 정보가 보여짐
// 2. 5개의 버튼이 있는데, 하나는 현재위치 그리고 4개는 내가 원하는 도시로 총 5개로 구성
// 3. 유저는 다른 도시 버튼을 클릭하면 해당 도시의 날씨 정보를 볼 수 있다.
// 4. 유저는 데이터가 로딩될 때 로딩 스피너를 볼 수 있다.

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const cities = ['Bangkok', 'Singapore', 'New York', 'Seoul'];
    const [loading, setLoading] = useState(false);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            //console.log(`Your current location is  Lat: ${lat}, Lon: ${lon}`);
            getWeatherByCurrentLocation(lat, lon);
        });
    };
    const API_KEY = 'd44819fdd9056eb3de7dadbc723a583b';
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setWeatherData(data);
        setLoading(false);
    };

    const getWeatherByCity = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setWeatherData(data);
        setLoading(false);
    };

    const handleCity = city => {
        if (city === 'current') {
            setCity('');
        } else {
            setCity(city);
        }
    };

    useEffect(() => {
        if (city === '') {
            getCurrentLocation();
        } else {
            getWeatherByCity();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]);

    return (
        <div className="wrap">
            <div className="mainCard">
                {loading ? (
                    <ClipLoader color="#66666" loading={loading} size={150} aria-label="Loading Spinner" />
                ) : (
                    <div>
                        <WeatherText weatherData={weatherData} />
                        <div className="cityBtn">
                            <WeatherBtn cities={cities} setCity={city} handleCity={handleCity} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
