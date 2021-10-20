import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import BlogNode from "./pages/BlogNode";
import WidgetService from "./pages/WidgetService";
import Contact from "./pages/Contact";
import './stylesheets/portfolio.scss';

function App() {
  return (
    <div className="portfolio">
      <Router>
        <ul className="menu">
          <Link to="/">
            <li className="menu-item">HOME</li>
          </Link>
          <Link to="/">
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
          <Route path="/widget-service" exact component={WidgetService} />
        </main>
      </Router>
    </div>
  );
}

export default App;
