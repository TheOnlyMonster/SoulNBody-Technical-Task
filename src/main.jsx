import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import Home from "./Home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
