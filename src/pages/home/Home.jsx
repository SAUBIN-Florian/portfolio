import { useEffect } from "react";
import About from "components/about/About";
import Slider from "components/slider/Slider";
// Fade component for Animations
import { Fade } from "components/fade/Fade";
import main from "three/main";
import "./home.scss";

export default function Home() {

  useEffect(()=>{
    // initialize three.js 3D element (ref: three directory)
    main("#canvas")
  }, []);

  return (
    <div className="home-page">
      <div className="hero-banner">
        <Fade>
          <div className="hero-banner-content">
            <h1 className="hero-banner-title">Hello, I'm <span className="hero-banner-span">Florian SAUBIN</span> !</h1>
            <p className="hero-banner-para">I'm a Fullstack Developer from Lyon, FR.</p>
            <p className="hero-banner-para">My passion lies in building scalable and efficient back-end systems that power seamless user experiences.</p>
            <p className="hero-banner-para">I enjoy tackling complex challenges and finding innovative solutions to optimize performance and enhance the functionality of web applications.</p>
          </div>
        </Fade>
        <Fade once={true}>
          <div id="canvas"></div>
        </Fade>
        </div>
      <Fade>
        <About />
      </Fade>
      <Fade>
        <Slider />
      </Fade>
      </div>
  )
}
