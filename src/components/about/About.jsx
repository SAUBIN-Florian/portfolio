import "./about.scss";
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
          <i className="devicon-typescript-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="TypeScript"></i>
          <i className="devicon-react-original alternate-react" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="React"></i>
          <i className="devicon-angularjs-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Angular"></i>
          <i className="devicon-java-plain alternate-java" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Java"></i>
          <i className="devicon-spring-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Spring"></i>
          <i className="devicon-nodejs-plain alternate-node" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="NodeJS"></i>
          <i className="devicon-mongodb-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="MongoDB"></i>
          <i className="devicon-postgresql-plain alternate-postgre" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Postgresql"></i>
          <i className="devicon-git-plain" onMouseOver={handleHover} onMouseLeave={handleLeave} data-name="Git"></i>
        </div>
      </div>
    </div>
  )
}
