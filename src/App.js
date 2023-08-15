import TopButton from "./components/TopButton";
import InputField from "./components/InputField";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherService";

function App() {
  // Async function to fetch weather data and log it
  const fetchWeather = async () => {
    try {
      const data = await getFormattedWeatherData({ q: "london" });
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Call the fetchWeather function to initiate data fetching
  fetchWeather();

  // Return JSX for rendering the UI components
  return (
    <>
      <div className="mx-auto max-w-screen-md my-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
        <TopButton />
        <InputField />
        <TimeAndLocation />
        <TempAndDetails />
        <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" />
      </div>
    </>
  );
}

export default App;
