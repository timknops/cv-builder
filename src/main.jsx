import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDownload,
  faUpload,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDownload,
  faUpload,
  faBroom
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
