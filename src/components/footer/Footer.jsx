import React from "react";
import "./footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/stephaniejlakin/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/StephanieLakin"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/stephaniejlakin/"
          target="_blank"
          rel="noreferrer"
        >
          <FiDribbble />
        </a>
      </div>
      <div className="footer_copyright">
        <h6>&copy;2022 Stephanie J. Lakin</h6>
      </div>
    </footer>
  );
};

export default Footer;
