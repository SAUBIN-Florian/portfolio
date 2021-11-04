import { useEffect } from "react";
import About from "../components/About";
import Slider from "../components/Slider";
import setupThreeCanvas from "../setupThree";
import "../stylesheets/home.scss";

export default function Home() {

  useEffect(()=>{
    setupThreeCanvas("#canvas")
  }, []);

  return (
    <div className="home-page">
        <div className="hero-banner">
          <div className="hero-banner-content">
            <h1 className="hero-banner-title">Hello, I'm <span className="hero-banner-span">Florian SAUBIN</span> !</h1>
            <p className="hero-banner-para">I'm a Front-End Developer from Lyon, FR.</p>
            <p className="hero-banner-para">I have passion for UI effects, logic and creating intuitive user experiences.</p>
            <p className="hero-banner-para">I like to keep in touch with Back-End technologies too !</p>
          </div>
          <div id="canvas"></div>
        </div>
        <About />
        <Slider />
    </div>
  )
}
