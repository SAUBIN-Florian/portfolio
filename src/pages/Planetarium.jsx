import { Link } from "react-router-dom";
import "../stylesheets/projectspage.scss";

export default function Planetarium() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };

  return (
    <div className="planetarium">
      <div className="page-title">
        <h3 className="title-date">2022</h3>
        <h1 className="title-large">PLANETARIUM</h1>
      </div>
      <div className="page-section-content">
        <div className="page-scope">
          <h3>SCOPE</h3>
          <ul>
            <li>Intersection Observer API</li>
            <li>Animated components</li>
            <li>Educational showroom</li>
          </ul>
        </div>
        <div className="page-summary">
          <h3>SUMMARY</h3>
          <p>
            With this project, I wanted to show something a little more fun and off chart...
            <br /><br />
            Strongly focused on visual and interactions between the user and the website, my goal was to showcase our solar system in a more fun way.
            <br /><br />
            Project's state: I have to implement responsive design for mobile device, also implement a routing system for display more informations..
          </p>
            <a href="https://planetarium-dun.vercel.app/" target="blank">Go to site...</a>
            <a href="https://github.com/SAUBIN-Florian/planetarium" target="blank">Check the code...</a>
        </div>
      </div>
      <div className="page-section-video">
        <video className="video" controls muted loop>
          <source src="https://res.cloudinary.com/ddtzq8qbr/video/upload/v1660582433/portfolio/planetarium_sbeou7.mp4" type="video/mp4" />
        </video>
        <p>Scroll binding & triggers animations </p>
      </div>
      <div className="page-section-img">
        <img className="planetarium-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1660582407/portfolio/planetarium-home_fjo29p.jpg" alt="planetarium home" />
        <img className="planetarium-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1660582414/portfolio/planetarium-planet_zvoonz.jpg" alt="planetarium uranus" />
        <img className="planetarium-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1660582421/portfolio/planetarium-moon_c5mpmc.jpg" alt="planetarium moon" />
      </div>
      <div className="page-section-link">
        <Link to="/landing-page" className="previous-link" data-arrow="&#129024;" onClick={handleScrollTop}>Landing Page</Link>
        <Link to="/cryptanalyze" className="next-link" data-arrow="&#129026;" onClick={handleScrollTop}>Cryptanalyze.</Link>
      </div>
    </div>
  )
}