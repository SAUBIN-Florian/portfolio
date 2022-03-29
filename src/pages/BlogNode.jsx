import "../stylesheets/projectspage.scss";
import { Link } from "react-router-dom";

export default function BlogNode() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };

  return (
    <div className="blog-node">
      <div className="page-title">
        <h3 className="title-date">2021</h3>
        <h1 className="title-large">BLOG REACT NODE.JS</h1>
      </div>
      <div className="page-section-content">
        <div className="page-scope">
          <h3>SCOPE</h3>
          <ul>
            <li>Backend with NodeJS</li>
            <li>Salt password protection</li>
            <li>Login/Logout system</li>
          </ul>
        </div>
        <div className="page-summary">
          <h3>SUMMARY</h3>
          <p>
            With this project, the focus was on fetching data from a distant server side's API.
            Using Node JS for creating a CRUD app, encrypted password system with Bcrypt library and store the data with MongoDB.
            <br /><br />
            For the Front side i used React with React-router to display the different articles from the data,
            fetched with the axios library.
            <br /><br />
            I also implemented a 'login checker' with the React built-in reducer (useReducer) and store the action on local storage.
          </p>
            <a href="https://blog-node-flo.herokuapp.com/" target="blank">Go to site...</a>
            <a href="https://github.com/SAUBIN-Florian/node-blog/tree/master/server" target="blank">Check the code...</a>
        </div>
      </div>
      <div className="page-section-video">
        <video className="video" controls muted loop>
          <source src="https://res.cloudinary.com/ddtzq8qbr/video/upload/v1636012263/portfolio/node-blog-cut_ir2qvh.mp4" type="video/mp4" />
        </video>
        <p>Register/Login system with account management...</p>
      </div>
      <div className="page-section-img">
        <img className="blog-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965084/portfolio/blog-node-register_ytscjz.jpg" alt="blog register" />
        <img className="blog-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965083/portfolio/blog-node-account_l4fhsx.jpg" alt="blog account" />
        <img className="blog-img" src="https://res.cloudinary.com/ddtzq8qbr/image/upload/v1635965084/portfolio/blog-node-article_cgexo4.jpg" alt="blog article" />
      </div>
      <div className="page-section-link">
        <Link to="/landing-page" className="previous-link" onClick={handleScrollTop}>Landing Page</Link>
        <Link to="/cryptanalyze" className="next-link" onClick={handleScrollTop}>Cryptanalyze.</Link>
      </div>
    </div>
  )
}