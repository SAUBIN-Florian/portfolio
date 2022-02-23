import "../stylesheets/projectspage.scss";
import { Link } from "react-router-dom";

export default function WidgetService() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };

  return (
    <div className="widget-service">
      <div className="page-title">
        <h3 className="title-date">Coming soon...</h3>
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
        <video className="video" controls muted loop>
          <source src="/videos/landing-cut.mp4" type="video/mp4" />
        </video>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis asperiores ?</p>
      </div>
      <div className="page-section-img">
        <img src="https://via.placeholder.com/300/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
        <img src="https://via.placeholder.com/300/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
        <img src="https://via.placeholder.com/300/FFFF00/000000C/O https://placeholder.com/" alt="placeholder" />
      </div>
      <div className="page-section-link">
        <Link to="/blog-node" className="previous-link" onClick={handleScrollTop}>Blog Node</Link>
        <Link to="/landing-page" className="next-link" onClick={handleScrollTop}>Landing Page</Link>
      </div>
    </div>
  )
}
