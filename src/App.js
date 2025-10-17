import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Escola from "./components/Escola";
import SobreMim from "./components/SobreMim";
import Footer from "./components/Footer";
import "./index.css";

export default function app(){
  return(
    <div className="font-sans">
      <NavBar />
      <Home />
      <Escola />
      <SobreMim />
      <Footer/>

    </div>
  );
}