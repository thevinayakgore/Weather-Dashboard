"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import ErrorDisplay from "./ErrorDisplay";
import { fetchWeatherData } from "../services/weatherApi";
import { WeatherData } from "../types/weather";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

// Helper functions for localStorage interactions for weather history
const loadWeatherHistory = (): WeatherData[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("recentWeather");
  return stored ? (JSON.parse(stored) as WeatherData[]) : [];
};

const saveWeatherHistory = (history: WeatherData[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("recentWeather", JSON.stringify(history));
};

const WeatherDashboard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentWeather, setRecentWeather] = useState<WeatherData[]>([]);

  useEffect(() => {
    const saved = loadWeatherHistory().slice(0, 5); // ensure only 5 are loaded
    setRecentWeather(saved);
    if (saved.length > 0) {
      setWeatherData(saved[0]);
    }
  }, []);

  useEffect(() => {
    if (recentWeather.length > 0) {
      saveWeatherHistory(recentWeather.slice(0, 5));
    }
  }, [recentWeather]);

  const handleSearch = async (location: string) => {
    if (!location.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(location);
      setWeatherData(data);
      // Add to weather history with up to 5 items, removing duplicates by location
      const updated = [
        data,
        ...recentWeather.filter((w) => w.location !== data.location),
      ].slice(0, 5);
      setRecentWeather(updated);
      saveWeatherHistory(updated);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Render helpers
  const handleDelete = (index: number) => {
    const updated = recentWeather.filter((_, i) => i !== index);
    setRecentWeather(updated);
    saveWeatherHistory(updated);
  };

  const renderWeatherHistory = () => {
    if (recentWeather.length === 0) return null;
    return (
      <>
        <CardHeader className="!px-0 !pt-6">
          <CardTitle className="text-lg font-bold mb-3 text-primary">
            Stored Weather History (last 5)
          </CardTitle>
        </CardHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentWeather.map((w, index) => (
            <Card
              key={index}
              className="p-4 flex flex-col gap-2 cursor-pointer hover:shadow-md transition"
              onClick={() => setWeatherData(w)}
            >
              <div className="flex justify-between items-start text-base md:text-lg">
                <div className="space-y-2">
                  <p className="font-semibold md:text-3xl">{w.location}</p>
                  <p className="text-muted-foreground">{w.date}</p>
                </div>
                <Button
                  variant="destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                  className="!bg-red-500 uppercase hover:scale-105 transition-all duration-500"
                >
                  Delete
                </Button>
              </div>
              <p className="text-sm md:text-lg">Temp : {w.temperature}°C</p>
              <p className="text-sm md:text-lg capitalize">Condition : {w.condition}</p>
            </Card>
          ))}
        </div>
      </>
    );
  };

  const renderError = () => {
    if (!error) return null;
    return (
      <div className="pt-6">
        <ErrorDisplay error={error} />
      </div>
    );
  };

  const renderWeatherCard = () => {
    if (!weatherData || error) return null;
    return (
      <motion.div
        className="pt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WeatherCard weatherData={weatherData} />
      </motion.div>
    );
  };

  return (
    <Card className="rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl">
      <CardContent>
        <SearchBar onSearch={handleSearch} loading={loading} />
        {renderWeatherHistory()}
        {renderError()}
        {renderWeatherCard()}
      </CardContent>
    </Card>
  );
};

export default WeatherDashboard;
