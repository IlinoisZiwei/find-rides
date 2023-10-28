import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AllRides from "./all_rides.js";
import logo from "./logo.svg";
import { useState } from "react";
import Header from "./header";
import InputTable from "./inputTable";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";
import Contact from "./contact"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {<Route exact path="/" element={<Navigate to="/input" />}></Route>}
        {<Route exact path="/allride" element={<AllRides />}></Route>}
        {<Route exact path="/input" element={<InputTable />}></Route>}
        {<Route exact path="/login" element={<Login />}></Route>}
        {<Route exact path="/contact" element={<Contact />}></Route>}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
