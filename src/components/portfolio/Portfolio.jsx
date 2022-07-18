import React from "react";
import "./portfolio.scss";
import Gallery from "../../assets/img/Gallery.PNG";
import WebApp from "../../assets/img/WebApp.PNG";
import Reimage_04 from "../../assets/Reimage_04.pdf";
import Zebra_Dash_03 from "../../assets/img/Zebra_Dash_03.PNG";
import Dark from "../../assets/img/Dark.PNG";
import PortfolioImg from "../../assets/img/PortfolioImg.PNG";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_container">
        {/* 01 */}
        <article className="portfolo_item">
          <div className="portfoio_item-image">
            <img src={Gallery} alt="gallery" />
          </div>
          <h3>Angular Gallery App</h3>
          <a
            href="https://gallery1-21dc3.firebaseapp.com/dist/gallery"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Angular Gallery App
          </a>
          <a
            href="https://github.com/StephanieLakin/GalleryApp"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Git Hub For this App
          </a>
        </article>
        {/* 02 */}
        <article className="portfolo_item">
          <div className="portfoio_item-image">
            <img src={WebApp} alt="gallery" />
          </div>
          <h3>Web App Redesign Proposal</h3>
          <a
            href={Reimage_04}
            download
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            View Document
          </a>
          {/* <a
            href="https://github.com/StephanieLakin/GalleryApp"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Git Hub For this App
          </a> */}
        </article>
        {/* 03 */}
        <article className="portfolo_item">
          <div className="portfoio_item-image">
            <img src={Zebra_Dash_03} alt="gallery" />
          </div>

          <h3>Zebra Android App Design</h3>
          <a
            href="https://xd.adobe.com/view/59c32f0f-1a9d-4f06-823d-2245d31fafa6-0c90/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            View in Adobe XD
          </a>
          {/* <a
            href="https://github.com/StephanieLakin/GalleryApp"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            View in Adobe XD
          </a> */}
        </article>
        {/* 04 */}
        <article className="portfolo_item">
          <div className="portfoio_item-image">
            <img src={Dark} alt="gallery" />
          </div>
          <h3>Dark Mode Web App Design</h3>
          <a
            href="https://xd.adobe.com/view/c54550c8-7ffe-4cc7-b354-b839044ab583-9016/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            View in Adobe XD
          </a>
          {/* <a
            href="https://xd.adobe.com/view/c54550c8-7ffe-4cc7-b354-b839044ab583-9016/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            View in Adobe XD
          </a> */}
        </article>
        {/* 04 */}
        <article className="portfolo_item">
          <div className="portfoio_item-image">
            <img src={PortfolioImg} alt="portfoliosite" />
          </div>
          <h3>Portfolio Web Site</h3>
          <a
            href="http://yukidev.com/slakinportfolio1/index.html#intro"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            View Site on Web
          </a>
          <a
            href="https://github.com/StephanieLakin/PortfolioPage"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </article>
        {/* 04 */}
        {/* <article className="portfolo_item">
          <div className="portfoio_item-image">
            <img src={Dark} alt="gallery" />
          </div>
          <h3>Dark Mode Web App Design</h3>
          <a
            href="https://github.com/StephanieLakin/PortfolioPage"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            View in Adobe XD
          </a> */}
        {/* <a
            href="https://xd.adobe.com/view/c54550c8-7ffe-4cc7-b354-b839044ab583-9016/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            View in Adobe XD
          </a> */}
        {/* </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
