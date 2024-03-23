import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = props => {
    return <Button variant="warning">{props.city}</Button>;
};

export default WeatherBtn;
