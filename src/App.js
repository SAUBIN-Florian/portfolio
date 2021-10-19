import Header from "./components/Header";
import './stylesheets/portfolio.scss';

function App() {
  return (
    <div className="portfolio">
      <ul className="menu">
        <li className="menu-item">HOME</li>
        <li className="menu-item">WORK</li>
        <li className="menu-item">CONTACT</li>
      </ul>
      <main id="main">
        <Header />
      </main>
    </div>
  );
}

export default App;
