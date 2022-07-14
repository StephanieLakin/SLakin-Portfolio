import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import "./header.scss";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="www.linkedin.com/in/stephaniejlakin"
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
      <a href="www.linkedin.com/in/stephaniejlakin" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
