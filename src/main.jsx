import React from "react";
import ReactDOM from "react-dom/client";
import { CombinedProviders } from "./routes/lib/CombinedProviders";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CombinedProviders />
);
