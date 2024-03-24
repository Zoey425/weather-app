import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = ({ cities, setCity, handleCity }) => {
    // console.log('cities?', cities);
    return (
        <div>
            <Button variant={setCity === '' ? 'outline-warning' : 'warning'} onClick={() => handleCity('current')}>
                Current Location
            </Button>
            {cities.map(city => (
                <Button
                    key={city}
                    variant={setCity === city ? 'outline-warning' : 'warning'}
                    onClick={() => handleCity(city)}>
                    {city}
                </Button>
            ))}
        </div>
    );
};

export default WeatherBtn;
