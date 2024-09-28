 import SearchBox from "./SearchBox";
 import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
   const [weatherInfo, setweatherInfo] = useState({
    city: "wonderland",
    feelsLike: 36.05,
    humidity: 23,
    temp: 37.05,
    tempMax: undefined,
    tempMin: 37.05,
    weather: "haze",
   });

   let updateInfo = (result) => {
     setweatherInfo(result);
   }

    return(
       <div style={{textAlign: "center"}}>
         <h2>Weather App by Prakash Singh</h2>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
       </div>
    );
}