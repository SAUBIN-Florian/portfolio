import "../stylesheets/projectspage.scss";
import { Link } from "react-router-dom";

export default function BlogNode() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };

  return (
    <div className="cryptanalyze">
      <div className="page-title">
        <h3 className="title-date">2022</h3>
        <h1 className="title-large">CRYPTANALYZE.</h1>
      </div>
      <div className="page-section-content">
        <div className="page-scope">
          <h3>SCOPE</h3>
          <ul>
            <li>Redux toolkit store</li>
            <li>Chart js API</li>
            <li>Dynamic component data</li>
          </ul>
        </div>
        <div className="page-summary">
          <h3>SUMMARY</h3>
          <p>
            With this project, right after had learn Redux, I started the app with a goal,
            centralize all the data i fetch from a free API (https://www.coingecko.com/).
            <br /><br />
            Each components of the application share data about crypto-currency and markets, and you will find real-time informations about it.
            <br /><br />
            Project's state: I have to implement responsive design for mobile device, and add new functionality..
          </p>
            <a href="https://saubin-florian.github.io/crypto-chart/" target="blank">Go to site...</a>
            <a href="https://github.com/SAUBIN-Florian/crypto-chart" target="blank">Check the code...</a>
        </div>
      </div>
      <div className="page-section-video">
        <video className="video" controls muted loop>
          <source src="https://res.cloudinary.com/ddtzq8qbr/video/upload/v1648551236/portfolio/crypto-cut_wrdasj.mp4" type="video/mp4" />
        </video>
        <p>Shared data by all components of the site</p>
      </div>
      <div className="page-section-img">
        <img className="crypto-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1648548551/portfolio/search-crypto_u1b9hs.jpg" alt="crypto search" />
        <img className="crypto-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1648548546/portfolio/markets-crypto_qfihje.jpg" alt="crypto markets" />
        <img className="crypto-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1648548518/portfolio/exchanges-crypto_oyubua.jpg" alt="crypto exchanges" />
      </div>
      <div className="page-section-link">
        <Link to="/blog-node" className="previous-link" onClick={handleScrollTop}>Blog Node</Link>
        <Link to="/widget-service" className="next-link" onClick={handleScrollTop}>Widget Service</Link>
      </div>
    </div>
  )
}