import React from "react";
import {
  WiDirectionUp,
  WiDirectionDown,
  WiThermometer,
  WiRaindrop,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

function TempAndDetails() {
  return (
    <>
      <div
        className="flex items-center justify-center p-6 
    text-xl text-cyan-300"
      >
        <p>Cloudy or whatever </p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3 ">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="wether symbol"
          className="w-20"
        />
        <p className="text-5xl ">34°</p>


        
        <div className="flex flex-col space-y-3 items-start ">
          <div className="flex font-light text-sm items-center  justify-center ">
            <WiThermometer size={25} className="mr-1  " /> Real fell:{" "}
            <span className="font-medium ml-1">43° </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center ">
            <WiRaindrop size={25} className="mr-1" /> Humidity:{" "}
            <span className="font-medium ml-1">43° </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center ">
            <WiStrongWind size={25} className="mr-1 " /> Wind Speed:{" "}
            <span className="font-medium ml-1">43° </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
<WiSunrise/> 
<p className="font-length">
   Rise:<span className="font-medium ml-1 ">06:45 AM </span>
</p>
<p className="font-light">|</p>

<WiSunset/> 
<p className="font-length">
   Set:<span className="font-medium ml-1 ">35:45 AM </span>
</p>
<p className="font-light">|</p>

<WiSunrise/> 
<p className="font-length">
   High:<span className="font-medium ml-1 "> 45° </span>
</p>
<p className="font-light">|</p>

<WiSunrise/> 
<p className="font-length">
   Low:<span className="font-medium ml-1 ">30° </span>
</p> 

      </div>
    </>
  );
}

export default TempAndDetails;
