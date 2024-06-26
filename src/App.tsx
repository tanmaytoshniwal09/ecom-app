import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNavBar from "./components/nav-bar/TopNavBar";
import BottomNavBar from "./components/nav-bar/BottomNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <div style={{height:"409px"}}>

      </div>
      <BottomNavBar />
    </div>
  );
}

export default App;
