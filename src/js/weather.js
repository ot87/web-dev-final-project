async function loadWeather() {
  const weatherContainer = document.querySelector("#weather-info");
  const weatherData = await getWeatherData();

  if (weatherData === null || !weatherData.current) {
    weatherContainer.innerHTML =
      "<p>Failed to load weather data.</p><button id='retry-weather'>Retry</button>";
    document
      .querySelector("#retry-weather")
      .addEventListener("click", loadWeather);

    return;
  }

  const { temperature_2m, windspeed_10m, weathercode, time } =
    weatherData.current;

  const weatherInfo = weatherCodes[weathercode];
  const weatherIcon = weatherInfo ? weatherInfo.icon : "❓";
  const weatherLabel = weatherInfo ? weatherInfo.label : "Unknown";
  const dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  weatherContainer.innerHTML = `
    <span>${new Date(time).toLocaleString("en-CA", dateOptions)}</span>
    <span>${temperature_2m}°C</span>
    <span>${windspeed_10m} km/h</span>
    <span>${weatherIcon} ${weatherLabel}</span>`;
}

document.addEventListener("DOMContentLoaded", loadWeather);
