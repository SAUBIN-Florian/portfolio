import { Link } from "react-router-dom";
import { Fade } from "components/fade/Fade";
import "pages/projectspage.scss";

export default function Cryptanalyze() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };

  return (
    <div className="cryptanalyze">
      <Fade>
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
      </Fade>
      <Fade>
        <div className="page-section-video">
          <video className="video" controls muted loop>
            <source src="https://res.cloudinary.com/ddtzq8qbr/video/upload/v1660581718/portfolio/crypto-cut_jt8yog.mp4" type="video/mp4" />
          </video>
          <p>Shared data by all components of the site</p>
        </div>
      </Fade>
      <div className="page-section-img">
        <Fade>
          <img className="crypto-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1648548551/portfolio/search-crypto_u1b9hs.jpg" alt="crypto search" />
        </Fade>
        <Fade>
          <img className="crypto-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1648548546/portfolio/markets-crypto_qfihje.jpg" alt="crypto markets" />
        </Fade>
        <Fade>
          <img className="crypto-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1648548518/portfolio/exchanges-crypto_oyubua.jpg" alt="crypto exchanges" />
        </Fade>
      </div>
      <div className="page-section-link">
        <Link to="/planetarium" className="previous-link" data-arrow="&#129024;" onClick={handleScrollTop}>Planetarium</Link>
        <Link to="/blog-node" className="next-link" data-arrow="&#129026;" onClick={handleScrollTop}>Blog Node</Link>
      </div>
    </div>
  )
}