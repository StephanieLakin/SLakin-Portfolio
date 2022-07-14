import React from "react";
import "./header.scss";
import LavendarMe from "../../assets/img/LavendarMe.png";
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
            <img src={LavendarMe} alt="me" />
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
