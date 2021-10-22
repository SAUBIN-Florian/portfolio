import Carousel from "../components/Carousel";
import "../stylesheets/home.scss";

export default function Home() {
  return (
    <div className="home-page">
        <div className="hero-banner">
          <div className="hero-banner-content">
            <h1 className="hero-banner-title">WELCOME TO MY PORTFOLIO !</h1>
            <p className="hero-banner-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Deleniti tempora deserunt harum provident consectetur iste, 
              quidem unde officia architecto illo dolorum ea alias laudantium beatae. 
              Eum vel voluptate repellat nihil!
              Repellat nesciunt illum facere, eligendi voluptate ex eius maxime animi. 
              Exercitationem, aliquid dicta eum blanditiis fugiat, 
              quidem at non cum animi ratione amet quo voluptatem cumque. 
              Hic pariatur quibusdam ratione!
            </p>
          </div>
          <img className="hero-banner-img" src="https://via.placeholder.com/500/D1462F/FFFFFF?Text=PlaceholderC/O https://placeholder.com/" alt="placeholder" />
        </div>
        <Carousel />
    </div>
  )
}
