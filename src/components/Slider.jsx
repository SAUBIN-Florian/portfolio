import { Link } from "react-router-dom";
import Carousel from 'react-grid-carousel';
import "../stylesheets/carousel.scss";

export default function Slider() {
  return (
    <div className="carousel">
      <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
        <div className="carousel-landing">
          <div className="carousel-content">
            <h1>Landing Page Demo</h1>
            <h3>2021</h3>
            <Link to="/landing-page">
              View project...
            </Link>
          </div>
          <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="project 1"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-blog">
          <div className="carousel-content">
            <h1>Blog React Node.js</h1>
            <h3>2021</h3>
            <Link to="/blog-node">
              View project...
            </Link>
          </div>
          <img src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="project 2"/>
        </div>
        </Carousel.Item>
        <div className="carousel-widget">
          <div className="carousel-content">
            <h1>Widget Service</h1>
            <h3>2021</h3>
            <Link to="/widget-service">
              View project...
            </Link>
          </div>
          <img src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="project 3"/>
        </div>
      </Carousel>
    </div>
  )
}
