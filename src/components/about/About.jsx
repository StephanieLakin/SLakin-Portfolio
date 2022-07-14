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
              <h5>Experience</h5>
              <small>4+ years working</small>
            </article>

            <article classname="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>500 clients worldwide</small>
            </article>

            <article classname="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>1 million projects</small>
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
