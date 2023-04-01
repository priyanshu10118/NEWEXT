import React from "react";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SingleNews from "./pages/singleNews/singleNews";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<SingleNews />} />
      </Routes>
    </BrowserRouter>
  );
}
