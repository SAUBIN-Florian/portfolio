import { Link } from "react-router-dom";
import Carousel from 'react-grid-carousel';
import "../stylesheets/carousel.scss";

export default function Slider() {

  const settings = {
    showDots: true,
    cols: 1,
    rows: 1,
    loop: true,
    autoplay: 5000,
    scrollSnap: true,
    containerStyle: {
      "position": "relative",
      "display": "flex",
      "justify-content": "center",
      "width": "95%",
      "margin": "0 auto"
    },
    arrowLeft: <span className="prev-carousel-arrow">🠀</span>,
    arrowRight: <span className="next-carousel-arrow">🠂</span>
  };

  const handleScrollTop = () => {
      window.scrollTo({top: 0})
  };

  return (
    <div className="carousel">
      <Carousel {...settings}>
        <Carousel.Item>
        <div className="carousel-landing">
          <div className="carousel-content">
            <h1>Landing Page Demo</h1>
            <h3>2021</h3>
            <Link to="/landing-page" onClick={handleScrollTop}>
              View project...
            </Link>
          </div>
          <img src="/images/mockup-landing-clean.png" alt="project 1"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-blog">
          <div className="carousel-content">
            <h1>Blog React Node.js</h1>
            <h3>2021</h3>
            <Link to="/blog-node" onClick={handleScrollTop}>
              View project...
            </Link>
          </div>
          <img src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="project 2"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-widget">
          <div className="carousel-content">
            <h1>Widget Service</h1>
            <h3>2021</h3>
            <Link to="/widget-service" onClick={handleScrollTop}>
              View project...
            </Link>
          </div>
          <img src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="project 3"/>
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
