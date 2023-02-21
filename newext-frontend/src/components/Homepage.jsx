import React from "react";
import Header from "./homepage/Header"
import HeroCarousel from "./homepage/HeroCarousel"
import WeatherLoc from "./homepage/WeatherLoc";
import Navbar from "./homepage/Navbar";
import StockMarketToday from "./homepage/StockMarketToday";
import Foryou from "./homepage/for-you content/Foryou";
import Categories from "./homepage/Categories/Categories";
export default function Homepage() {
  return (
    <div>
      <div className="header">
       <Header /> 
      </div>
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
      <Foryou />
      <Categories />
    </div>
  )
}
