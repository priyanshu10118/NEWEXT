import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="454265286170-g78tl5j8fpv9j6dbel5n1cu4a4cv2jqn.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
