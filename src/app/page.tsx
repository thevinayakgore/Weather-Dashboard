"use client";
import WeatherDashboard from "../components/WeatherDashboard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <main className="container mx-auto px-4 py-10">
        <header className="bg-gradient-to-r from-cyan-500 to-purple-500/80 p-4 md:p-6 mb-10 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 w-full">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="size-12"
              />
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                Weather Dashboard
              </h1>
            </div>
            <Button
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              className="p-6 text-white dark:hover:text-black hover:!bg-white"
            >
              {theme === "dark" ? (
                <Sun className="size-4 md:size-6" />
              ) : (
                <Moon className="size-4 md:size-6" />
              )}
            </Button>
          </div>
        </header>

        <WeatherDashboard />
      </main>
    </>
  );
}
