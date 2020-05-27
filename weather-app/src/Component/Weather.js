import React from 'react'

function Weather({city, country, temp, humidity, description}) {
    return (
        <div>
            <h4>{temp}</h4>
            <h5>{humidity}</h5>
            <h5>{description}</h5>
            <h5>{city}</h5>
            <h5>{country}</h5>
        </div>
    )
}

export default Weather;
