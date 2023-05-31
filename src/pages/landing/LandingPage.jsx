import { Link } from "react-router-dom";
import { Fade } from "components/fade/Fade";
import "pages/projectspage.scss";

export default function LandingPage() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };
  
  return (
    <div className="landing-page">
      <Fade>
        <div className="page-title">
          <h3 className="title-date">2021</h3>
          <h1 className="title-large">LANDING PAGE DEMO</h1>
        </div>
        <div className="page-section-content">
          <div className="page-scope">
            <h3>SCOPE</h3>
            <ul>
              <li>Vanilla Javascript</li>
              <li>Smooth transitions</li>
              <li>Typical landing page style</li>
            </ul>
          </div>
          <div className="page-summary">
            <h3>SUMMARY</h3>
              <p>
                This is a french website about an event compagny specialized in wedding, karaoke and many more.
                For this website i was focus on the smoothness of animations through the page, like scroll, link buttons...
              </p>
              <a href="https://saubin-florian.github.io/landing-page-demo/" target="blank">Go to site...</a>
              <a href="https://github.com/SAUBIN-Florian/landing-page-demo" target="blank">Check the code...</a>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="page-section-video">
          <video className="video" controls muted loop>
            <source src="https://res.cloudinary.com/ddtzq8qbr/video/upload/v1636012245/portfolio/landing-cut_l7xprm.mp4" type="video/mp4" />
          </video>
          <p>Fully responsive design for all devices: desktop, tablet, phone...</p>
        </div>
      </Fade>
      <div className="page-section-img">
        <Fade>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965084/portfolio/landing-section_zr0wop.jpg" className="landing-img-1" alt="mockup of the pc demo" />
        </Fade>
        <Fade>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965084/portfolio/landing-responsive_m1mjmq.jpg" className="landing-img-2"alt="mockup of the tablet demo" />
        </Fade>
        <Fade>
          <img src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965084/portfolio/landing-responsive-2_idjdjg.jpg"className="landing-img-3" alt="mockup of the phone demo" />
        </Fade>
      </div>
      <div className="page-section-link">
        <Link to="/blog-node" className="previous-link" data-arrow="&#129024;" onClick={handleScrollTop}>Blog Node</Link>
        <Link to="/retail-api" className="next-link" data-arrow="&#129026;" onClick={handleScrollTop}>Retail API</Link>
      </div>
    </div>
  )
}
