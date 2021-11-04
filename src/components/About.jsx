import "../stylesheets/about.scss";

export default function About() {

  const handleHover = (e) => {
    e.target.classList.add("colored");
  }

  const handleLeave = (e) => {
    e.target.classList.remove("colored");
  }

  return (
    <div className="about-home-section">
      <h1 className="about-title">TECHNOLOGIES</h1>
      <div className="about-home-content">
        <div className="about-grid">
          <i className="devicon-javascript-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Javascript"></i>
          <i className="devicon-react-original" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="React"></i>
          <i className="devicon-nodejs-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="NodeJS"></i>
          <i className="devicon-sass-original" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Sass"></i>
          <i className="devicon-figma-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Figma"></i>
          <i className="devicon-git-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Git"></i>
          <i className="devicon-ruby-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Ruby"></i>
          <i className="devicon-postgresql-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Postgresql"></i>
          <i className="devicon-mongodb-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="MongoDB"></i>
        </div>
      </div>
    </div>
  )
}
