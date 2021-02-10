import {Component} from 'react';

export const Daily = (props) => (
    <div>
        {
            props.data.weather ? 
            <div>
            Date: {props.data.dt}
            <br/>
            Temperature: {props.data.temp}
            <br/>
            Humidity: {props.data.humidity}
            <br/>
            Description: {props.data.weather[0].description}
            </div>
            : ''
        }
    </div>
)
