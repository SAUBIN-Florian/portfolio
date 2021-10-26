import { Link } from "react-router-dom";
import "../stylesheets/carousel.scss";

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-landing">
        <div className="carousel-content">
          <h1>Landing Page Demo</h1>
          <h3>2021</h3>
          <Link to="/landing-page">
            View project...
          </Link>
        </div>
        <img src="" alt="project 1"/>
      </div>
      <div className="carousel-blog">
        <div className="carousel-content">
          <h1>Blog React Node.js</h1>
          <h3>2021</h3>
          <Link to="/blog-node">
            View project...
          </Link>
        </div>
        <img src="" alt="project 2"/>
      </div>
      <div className="carousel-widget">
        <div className="carousel-content">
          <h1>Widget Service</h1>
          <h3>2021</h3>
          <Link to="/widget-service">
            View project...
          </Link>
        </div>
        <img src="" alt="project 3"/>
      </div>
    </div>
  )
}
