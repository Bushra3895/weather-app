function WeatherDisplay({ data }) {
  if (!data) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Condition: {data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
