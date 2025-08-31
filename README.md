# 🌤️ Weather Dashboard 

A modern, responsive weather dashboard built with Next.js, TypeScript, and Tailwind CSS that provides real-time weather information and forecasts for any location.

![Weather Dashboard](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Forecast**: View detailed weather forecasts for the upcoming days
- **Search Functionality**: Quickly find weather information for any location
- **Weather History**: Automatically saves your last 5 searches for quick access
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern card-based design with smooth animations

## 🚀 Live Demo

Check out the live application: [Weather Dashboard](https://weather-dashboard-tvg.vercel.app)

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, Weather Icons
- **Animations**: Framer Motion
- **API**: OpenWeatherMap API
- **UI Components**: Custom components with shadcn/ui inspiration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/thevinayakgore/Weather-Dashboard.git
cd Weather-Dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:
```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
NEXT_PUBLIC_BASE_URL=https://api.openweathermap.org/data/2.5
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 API Setup

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
2. Obtain your API key from the dashboard
3. Add the API key to your `.env.local` file as shown above

## 🎯 Usage

1. Enter a city name in the search bar
2. Press Enter or click the search icon
3. View current weather conditions and 5-day forecast
4. Access your search history below the search bar
5. Click on any previous search to quickly view that weather data again
6. Toggle between dark and light mode using the theme button

## 📁 Project Structure

```
src/
├── app/
│   └── page.tsx              # Main page component
├── components/
│   ├── WeatherDashboard.tsx  # Main dashboard component
│   ├── WeatherCard.tsx       # Weather display card
│   ├── SearchBar.tsx         # Search input component
│   └── ErrorDisplay.tsx      # Error handling component
├── services/
│   └── weatherApi.ts         # API integration functions
└── types/
    └── weather.ts            # TypeScript type definitions
```

## 🧩 Components

- **WeatherDashboard**: Main container that manages state and coordinates other components
- **WeatherCard**: Displays current weather data and 5-day forecast
- **SearchBar**: Handles user input for location searching
- **ErrorDisplay**: Shows error messages when API requests fail

## 🔮 Future Enhancements

- [ ] Add geolocation support for automatic location detection
- [ ] Implement unit conversion (Celsius/Fahrenheit)
- [ ] Add weather maps integration
- [ ] Include severe weather alerts
- [ ] Add social sharing functionality
- [ ] Implement PWA capabilities for offline use

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is provided for educational purposes. Feel free to learn from the code.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/) or [React Icons](https://react-icons.github.io/react-icons/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact on - thevinayakgore@gmail.com.

---

⭐ Star this repo if you found it helpful !