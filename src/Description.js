import React from "react";

export default function Description() {
  return (
    <div className="Description">
      <h5>Clear</h5>
      <div className="weather-icon">
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt="clear"
        />
      </div>
      <div className="row">
        <div className="col-6">Humidity: 58%</div>
        <div className="col-6">Wind speed: 2 km/h</div>
      </div>
    </div>
  );
}
