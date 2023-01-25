import React from "react";
import HeroCarousel from "./homepage/HeroCarousel"
import WeatherLoc from "./homepage/WeatherLoc";
import Navbar from "./homepage/Navbar";
import StockMarketToday from "./homepage/StockMarketToday";

export default function Homepage() {
  return (
    <div>
      <div className="section-navbar">
        <Navbar /> 
      </div>
      <div className="section-hero">
        <HeroCarousel />
        <div className="section-hero--right">
          <WeatherLoc />
          <StockMarketToday />
        </div>
      </div>
    </div>
  )
}
