import { useState } from "react";
import WeatherInput from "./Components/WeatherInput";
import WeatherDisplay from "./Components/WeatherDisplay";
import Error from "./Components/Error";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "a74e22abcf28cc871da5beea941f46fe"; // OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const result = await res.json();
      setData(result);
      setError("");
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <WeatherInput city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <Error message={error} />
      <WeatherDisplay data={data} />
    </div>
  );
}

export default App;
