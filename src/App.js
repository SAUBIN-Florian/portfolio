import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "components/header/Header";
import Home from "pages/home/Home";
import LandingPage from "pages/landing/LandingPage";
import BlogNode from "pages/blog/BlogNode";
import Cryptanalyze from "pages/crypto/Cryptanalyze";
import Planetarium from "pages/planetarium/Planetarium";
import Contact from "pages/contact/Contact";
// import WidgetService from "pages/widget/WidgetService";
import 'index.scss';

function App() {

  const handleScrollTop = () => {
    window.scrollTo({top: 0})
  };

  const handleScrollBottom = () => {
    window.scrollTo({top: 3000})
  };

  return (
    <div className="portfolio">
      <Router>
        <ul className="menu">
          <Link to="/" onClick={handleScrollTop}>
            <li className="menu-item">HOME</li>
          </Link>
          <Link to="/" onClick={handleScrollBottom}>
            <li className="menu-item">WORK</li>
          </Link>
          <Link to="/contact">
            <li className="menu-item">CONTACT</li>
          </Link>
        </ul>
        <main id="main">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/landing-page" exact component={LandingPage} />
          <Route path="/blog-node" exact component={BlogNode} />
          <Route path="/cryptanalyze" exact component={Cryptanalyze} />
          <Route path="/planetarium" exact component={Planetarium} />
          {/* WORK IN PROGRESS ! */}
          {/* <Route path="/widget-service" exact component={WidgetService} /> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
