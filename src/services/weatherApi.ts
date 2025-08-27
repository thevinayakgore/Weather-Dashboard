const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: { description: string }[];
}

export const fetchWeatherData = async (location: string) => {
  if (!API_KEY) {
    throw new Error("Weather API key is not configured !");
  }

  // Fetch current weather
  const currentRes = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(
      location
    )}&units=metric&appid=${API_KEY}`
  );
  if (!currentRes.ok) {
    const errorData = await currentRes.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Failed to fetch weather: ${currentRes.status}`
    );
  }
  const currentData = await currentRes.json();

  // Fetch 5-day forecast
  const forecastRes = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(
      location
    )}&units=metric&appid=${API_KEY}`
  );
  if (!forecastRes.ok) {
    const errorData = await forecastRes.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Failed to fetch forecast : ${forecastRes.status}`
    );
  }
  const forecastData = await forecastRes.json();

  return {
    location: `${currentData.name}, ${currentData.sys.country}`,
    date: new Date(currentData.dt * 1000).toLocaleString(),
    temperature: Math.round(currentData.main.temp),
    condition: currentData.weather[0].description,
    humidity: currentData.main.humidity,
    windSpeed: currentData.wind.speed,
    feelsLike: Math.round(currentData.main.feels_like),
    pressure: currentData.main.pressure,
    forecast: forecastData.list
      .filter((_: unknown, idx: number) => idx % 8 === 0) // approx 1 per day
      .map((f: ForecastItem) => ({
        date: f.dt_txt,
        temperature: Math.round(f.main.temp),
        condition: f.weather[0].description,
      })),
  };
};
