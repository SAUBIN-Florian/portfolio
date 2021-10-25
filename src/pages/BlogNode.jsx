import "../stylesheets/projectspage.scss";
import { Link } from "react-router-dom";

export default function BlogNode() {
  return (
    <div className="blog-node">
      <div className="page-title">
        <h3 className="title-date">2021</h3>
        <h1 className="title-large">BLOG REACT NODE.JS</h1>
      </div>
      <div className="page-section-content">
        <div className="page-scope">
          <h3>SCOPE</h3>
          <ul>
            <li>point 1</li>
            <li>point 2</li>
            <li>point 3</li>
          </ul>
        </div>
        <div className="page-summary">
          <h3>SUMMARY</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Velit ad consequatur porro necessitatibus quae, 
            voluptates minus aut sapiente illo, doloribus ducimus ex. 
            Delectus, consectetur laborum maxime natus numquam ipsa rerum!</p>
            <a href="https://saubin-florian.github.io/landing-page-demo/" target="blank">Go to site...</a>
            <a href="https://github.com/SAUBIN-Florian/landing-page-demo" target="blank">Check the code...</a>
        </div>
      </div>
      <div className="page-section-video">
        <video className="video" autoPlay muted loop>
          <source src="/videos/landing-cut.mp4" type="video/mp4" />
        </video>
        <p>Fully responsive design for all devices, desktop, tablet, phone...</p>
      </div>
      <div className="page-section-img">
        <img src="https://via.placeholder.com/300/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
        <img src="https://via.placeholder.com/300/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
        <img src="https://via.placeholder.com/300/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
      </div>
      <div className="page-section-link">
        <Link to="/landing-page" className="previous-link">Landing Page</Link>
        <Link to="/widget-service" className="next-link">Widget Service</Link>
      </div>
    </div>
  )
}
