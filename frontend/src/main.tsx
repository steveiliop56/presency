import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
    <Toaster toastOptions={{ className: "font-ggSansMedium" }} />
  </React.StrictMode>
);
