// weather.tsx

import React from "react";

const Weather = () => {
    fetch(
        `https://api.weatherapi.com/v1/current.json?key=b0e4cf0edfb74bb390974609232804&q=${city}&aqi=no`
    )
    return (
        <React.Fragment>
            <div className="weather">
                <div></div>
            </div>
        </React.Fragment>
    );
};

export default Weather;