import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FormObject from "./FormObject";
import UseEffect from "./UseEffect";
import ArrayState from "./Components/ArrayState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <FormObject />
    <ArrayState />
    <UseEffect />
  </React.StrictMode>
);
