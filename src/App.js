import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Escola from "./components/Escola";
import SobreMim from "./components/SobreMim";
import "./index.css";

export default function app(){
  return(
    <div className="font-sans">
      <NavBar />
      <Home />
      <Escola />
      <SobreMim />

    </div>
  );
}