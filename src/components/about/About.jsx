import React from "react";
import "./about.scss";
import DoggyMama from "../../assets/img/DoggyMama.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={DoggyMama} alt="about me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article classname="about_card">
              <FaAward className="about_icon" />
              <h4>Experience</h4>
              <h6>4+ years working</h6>
            </article>

            <article classname="about_card">
              <FiUsers className="about_icon" />
              <h4>Clients</h4>
              <h6>500 clients worldwide</h6>
            </article>

            <article classname="about_card">
              <VscFolderLibrary className="about_icon" />
              <h4>Projects</h4>
              <h6>1 million projects</h6>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sunt
            inventore illum perferendis, odit quisquam magnam animi quia quidem
            dolorem hic, optio incidunt autem recusandae dolores sed? Itaque,
            maiores velit.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
