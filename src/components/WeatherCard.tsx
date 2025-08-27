"use client";
import { motion } from "framer-motion";
import { WeatherData } from "../types/weather";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const getWeatherIcon = (condition: string, sizeClass = "w-24 h-24") => {
    const conditionLower = condition.toLowerCase();

    if (conditionLower.includes("clear"))
      return <WiDaySunny className={sizeClass} />;
    if (conditionLower.includes("rain"))
      return <WiRain className={sizeClass} />;
    if (conditionLower.includes("cloud"))
      return <WiCloudy className={sizeClass} />;
    if (conditionLower.includes("snow"))
      return <WiSnow className={sizeClass} />;
    if (conditionLower.includes("thunder"))
      return <WiThunderstorm className={sizeClass} />;
    if (conditionLower.includes("fog") || conditionLower.includes("mist"))
      return <WiFog className={sizeClass} />;

    return <WiDaySunny className={sizeClass} />;
  };

  return (
    <Card className="rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-xl w-full p-4 sm:p-6">
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-6 md:mb-0 w-full"
        >
          <CardHeader className="px-0">
            <CardTitle className="text-5xl md:text-9xl font-extrabold tracking-wide">
              {weatherData.location}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start px-0">
            <span className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
              {weatherData.temperature}°C
            </span>
            <p className="text-lg sm:text-xl mt-2 font-medium tracking-wide">
              {weatherData.condition}
            </p>
          </CardContent>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-xl bg-white/20 backdrop-blur-md w-full"
        >
          {getWeatherIcon(weatherData.condition, "size-60 md:size-80")}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm opacity-80">Humidity</p>
              <p className="text-2xl font-bold">{weatherData.humidity}%</p>
            </div>
            <div>
              <p className="text-sm opacity-80">Wind</p>
              <p className="text-2xl font-bold">{weatherData.windSpeed} km/h</p>
            </div>
            <div>
              <p className="text-sm opacity-80">Feels Like</p>
              <p className="text-2xl font-bold">{weatherData.feelsLike}°C</p>
            </div>
            <div>
              <p className="text-sm opacity-80">Pressure</p>
              <p className="text-2xl font-bold">{weatherData.pressure} hPa</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="pt-6 border-t border-white/30"
      >
        <h3 className="text-2xl font-bold mb-4">5-Day Forecast</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {weatherData.forecast.map((day, index) => (
            <Card
              key={index}
              className="!border-0 bg-white/20 backdrop-blur-lg rounded-xl text-center hover:scale-105 transition-all duration-500 text-white"
            >
              <CardContent className="flex flex-col items-center m-auto w-full">
                <p className="font-bold text-lg sm:text-2xl md:text-4xl">
                  {day.date
                    ? new Date(day.date).toLocaleDateString("en-US", {
                        weekday: "short",
                      })
                    : "N/A"}
                </p>
                {getWeatherIcon(day.condition, "size-40")}
                <p className="text-xl sm:text-2xl font-bold">
                  {day.temperature}°C
                </p>
                <p className="text-sm opacity-70">{day.condition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </Card>
  );
};

export default WeatherCard;
