import { useState, useEffect } from "react";
import "./styles.css";
import Weather from "./components/userdata";

export default function App() {
  const [weatherData, setweatherData] = useState({});
  const [city, setCity] = useState("Dhaka");
  const [skyImage, setSkyImage] = useState("");

  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?appid=44c8cd4cacc8eeaaa0e24c5d38459c68&units=metric&q=${city}`;
  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = () => {
    fetch(weatherApi)
      .then((res) => res.json())
      .then((data) => {
        setweatherData(data);

        const skyIs = data.weather[0].main;
        const imageSrc = `images/${skyIs}.png`.toLowerCase();
        setSkyImage(imageSrc);
      });
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="input-box">
            <input
              type="text"
              onChange={(event) => setCity(event.target.value)}
            />
            <button onClick={getWeatherData}>Check Weather</button>
          </div>

          {!weatherData.main ? (
            <h1>No Data Found</h1>
          ) : (
            <div className="content">
              <div className="image">
                <img className="skyImage" src={skyImage} />
              </div>
              <Weather dataname="City Name" weatherdt={`${weatherData.name}, ${weatherData.sys.country}`}/>
              <Weather dataname="Temp" weatherdt={weatherData.main.temp}/>
              <Weather dataname="Wind Speed" weatherdt={`${weatherData.wind.speed} Km/h`}/>
              <Weather dataname="Cloud" weatherdt={weatherData.weather[0].main}/>
             </div>
          )}
        </div>
      </div>
    </>
  );
}
