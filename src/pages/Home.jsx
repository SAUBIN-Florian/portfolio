import { Link } from "react-router-dom";

import "../stylesheets/home.scss";

export default function Home() {
  return (
    <div className="home-page">
        <div className="hero-banner">
        </div>
        <div className="carousel">
          <Link to="/landing-page">
            landing
          </Link>
          <Link to="/blog-node">
            blog node
          </Link>
          <Link to="/widget-service">
            widget service
          </Link>
        </div>
    </div>
  )
}
