async function getWeatherData() {
  let data = null;

  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=temperature_2m,weathercode,windspeed_10m&timezone=America/Toronto",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    data = await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }

  return data;
}
