async function loadWeather() {
  const weatherContainer = document.querySelector("#weather-info");
  const weatherData = await getWeatherData();

  if (weatherData === null || !weatherData.current) {
    weatherContainer.innerHTML =
      "<p class='text-cursive accent-color'>Failed to load weather data</p><button id='retry-weather' class='button'>Retry</button>";
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
    <span class="text-cursive accent-color">${new Date(time).toLocaleString("en-CA", dateOptions)}</span>
    <div class="flex-wrap">
      <span class="primary-color">🌡️ ${temperature_2m}°C</span>
      <span class="primary-color">💨 ${windspeed_10m} km/h</span>
      <span class="primary-color">${weatherIcon} ${weatherLabel}</span>
    </div>`;
}

document.addEventListener("DOMContentLoaded", loadWeather);
