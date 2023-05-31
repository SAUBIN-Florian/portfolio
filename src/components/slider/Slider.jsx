import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-grid-carousel";
import "./slider.scss";

import { dataProjects } from "./slider_data"

export default function Slider() {

  const [projectType, setProjectType] = useState(dataProjects)
  const carouselRef = useRef(null)

  const settings = {
    showDots: true,
    cols: 1,
    rows: 1,
    arrowLeft: <span className="prev-carousel-arrow">&#129024;</span>,
    arrowRight: <span className="next-carousel-arrow">&#129026;</span>,
    responsiveLayout: [
      {
        breakpoint: 481,
        hideArrow: false,
        cols: 1,
        rows: 1,
        gap: 300,
        scrollSnap: true,
        autoplay: 5000
      }
    ],
  };

  const handleScrollTop = () => {
      window.scrollTo({top: 0})
  };

  const handleProjectsType = (e) => {
    const buttonType = e.target.innerText;

    if (buttonType === 'All') {
      setProjectType(dataProjects);
    } else if(buttonType === 'Front-End') {
      const frontEndProjects = dataProjects.filter(
        (project) => project.type === "Front-End"
      );
      setProjectType(frontEndProjects);
    } else if(buttonType === 'Back-End') {
        const backEndProjects = dataProjects.filter(
          (project) => project.type === "Back-End"
        );
        setProjectType(backEndProjects);
    }

    animate()
  }

  const animate = () => {
    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.classList.add("animate-carousel");
    }
    setTimeout(() => {
      carouselElement.classList.remove("animate-carousel");
    }, 500)

  }

  return (
    <div className="carousel" ref={carouselRef}>
      <h1 className="carousel-title">PROJECTS</h1>
      <section className="projects-filter-btns">
        <button onClick={handleProjectsType}>All</button>
        <button onClick={handleProjectsType}>Front-End</button>
        <button onClick={handleProjectsType}>Back-End</button>
      </section>
      <Carousel {...settings}>
        {projectType.map((project, index) => {
          return <Carousel.Item key={index}>
                   <div className={project.div_name}>
                     <div className="carousel-content">
                      <h1>{project.name}</h1>
                      <h3>{project.year}</h3>
                      <Link to={project.link} className="neo-btn" onClick={handleScrollTop}>
                        &#8594;
                      </Link>
                     </div>
                      <img src={project.img_url} alt={project.name + " project"}/>
                   </div>
                 </Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}
