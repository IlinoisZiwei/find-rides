import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./header";
import InputTable from "./inputTable";

function App() {
  return (
    <div>
      <Header />
      <InputTable />
    </div>
  );
}

export default App;
