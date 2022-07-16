import React from "react";
import "./header.scss";
import lavendar_pp from "../../assets/img/lavendar_pp.png";
import CTA from "../cta/CTA";
import HeaderSocials from "./headerSocials";

const Header = () => {
  return (
    <header id="home">
      <div>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Stephanie</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          <CTA />
        </div>

        <div className="inline">
          <div className="me">
            <img src={lavendar_pp} alt="me" />
          </div>

          <div>
            <HeaderSocials />
          </div>

          <div>
            <a href="#contact" className="scroll_down">
              Scroll Down
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
