import "../stylesheets/projectspage.scss";
import { Link } from "react-router-dom";

export default function WidgetService() {
  return (
    <div className="widget-service">
      <div className="page-title">
        <h3 className="title-date">2021</h3>
        <h1 className="title-large">WIDGET SERVICE</h1>
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
        <video src="">Placeholder</video>
      </div>
      <div className="page-section-img">
        <img src="https://via.placeholder.com/150/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
        <img src="https://via.placeholder.com/150/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
        <img src="https://via.placeholder.com/150/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
      </div>
      <div className="page-section-link">
        <Link to="/blog-node">Blog Node</Link>
        <Link to="/landing-page">Landing Page</Link>
      </div>
    </div>
  )
}
