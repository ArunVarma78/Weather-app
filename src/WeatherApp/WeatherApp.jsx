import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./style.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState();

  let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <h2 className="appTitle">Search For The Weather</h2>
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      {weatherInfo && <InfoBox weatherInfo={weatherInfo} />}
    </>
  );
}
