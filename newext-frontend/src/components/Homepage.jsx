import React from "react";
import Header from "./homepage/Header/Header"
import Navbar from "./homepage/Navbar/Navbar";
import Hero from "./homepage/Hero/Hero";
import Foryou from "./homepage/for-you content/Foryou";
import Categories from "./homepage/Categories/Categories";
import Footer from "./homepage/Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <div className="header">
       <Header /> 
      </div>
      <Navbar />
      <Hero />
      <Foryou />
      <Categories />
      <div>
      <Footer />
    </div>
    </div>
    
  )
}
