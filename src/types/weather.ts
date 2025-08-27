// types/weather.ts
export interface ForecastDay {
  date: string;
  temperature: number;
  condition: string;
}

export interface WeatherData {
  location: string;
  date: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  pressure: number;
  forecast: ForecastDay[];
}
