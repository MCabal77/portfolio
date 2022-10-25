import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Works from "./components/Works";

function App() {
  return (
    <div className="font-poppins bg-BG_COLOR">
      <div className="max-w-5xl mx-auto w-11/12">
        <Hero></Hero>
        <Experience></Experience>
        <Works></Works>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
