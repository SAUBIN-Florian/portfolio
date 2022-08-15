import { Link } from "react-router-dom";
import Carousel from 'react-grid-carousel';
import "../stylesheets/carousel.scss";

export default function Slider() {

  const settings = {
    showDots: true,
    cols: 1,
    rows: 1,
    arrowLeft: <span className="prev-carousel-arrow">&#129024;</span>,
    arrowRight: <span className="next-carousel-arrow">&#129026;</span>,
    responsiveLayout: [
      {
        breakpoint: 481,
        hideArrow: true,
        cols: 1,
        rows: 1,
        gap: 220,
        scrollSnap: true,
        autoplay: 5000
      }
    ],
  };

  const handleScrollTop = () => {
      window.scrollTo({top: 0})
  };

  return (
    <div className="carousel">
      <h1 className="carousel-title">PROJECTS</h1>
      <Carousel {...settings}>
      <Carousel.Item>
        <div className="carousel-planetarium">
          <div className="carousel-content">
            <h1>Planetarium</h1>
            <h3>2022</h3>
            <Link to="/planetarium" className="neo-btn" onClick={handleScrollTop}>
              ˃
            </Link>
          </div>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1660582391/portfolio/planetarium-mockup_s6wzyz.png" alt="project 3"/>
        </div>
        </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-crypto">
          <div className="carousel-content">
            <h1>Cryptanalyze.</h1>
            <h3>2022</h3>
            <Link to="/cryptanalyze" className="neo-btn" onClick={handleScrollTop}>
              ˃
            </Link>
          </div>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1648548509/portfolio/cryptanalyze-mockup_z6zmdm.png" alt="project 3"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-blog">
          <div className="carousel-content">
            <h1>Blog React Node.js</h1>
            <h3>2021</h3>
            <Link to="/blog-node" className="neo-btn" onClick={handleScrollTop}>
              ˃
            </Link>
          </div>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965084/portfolio/blog-node-mockup_dofknw.png" alt="project 2"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-landing">
          <div className="carousel-content">
            <h1>Landing Page Demo</h1>
            <h3>2021</h3>
            <Link to="/landing-page" className="neo-btn" onClick={handleScrollTop}>
              ˃
            </Link>
          </div>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965084/portfolio/landing-mockup_jpgupy.png" alt="project 1"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-widget">
          <div className="carousel-content">
            <h1>Widget Service</h1>
            <h3>Coming soon...</h3>
            <Link to="/" className="neo-btn">
              ˃
            </Link>
          </div>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1636011967/portfolio/wip_wkvu6w.png" alt="project 4"/>
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
