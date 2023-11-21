import React, { useState } from "react";
import "./WeatherApp.css";
import search_image from "../assets/search.png";
import clear_image from "../assets/clear.png";
import cloud_image from "../assets/cloud.png";
import drizzle_image from "../assets/drizzle.png";
import humidity_image from "../assets/humidity.png";
import rain_image from "../assets/rain.png";
import snow_image from "../assets/snow.png";
import wind_image from "../assets/wind.png";

const WeatherApp = () => {
  let api_key = "56203459f9f27daabaa5116d7e2e38c7";
  const [wicon, setWicon] = useState(cloud_image);
  const search = async () => {
    const element = document.getElementsByClassName("city-input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_image);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_image);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_image);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_image);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_image);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_image);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_image);
    } else {
      setWicon(clear_image);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_image} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">Dhaka</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_image} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_image} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
