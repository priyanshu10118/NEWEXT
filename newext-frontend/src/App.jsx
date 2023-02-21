import React from "react";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";

// export default function App() {
//   return (
//     <div>
//       <Homepage />
//     </div>
//   )
// }

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
