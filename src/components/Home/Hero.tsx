import React from "react";
import "./Hero.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { useNavigate } from "react-router-dom";
import Divider from "../Divider/Divider";

const Hero: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Links */}
      <div className="hero-links">
        <a
          href="https://github.com/jonasanders1"
          className="hero-links-link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          href="https://github.com/jonasanders1"
          className="hero-links-link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a
          href="https://github.com/jonasanders1"
          className="hero-links-link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>

      {/* Text and Buttons */}
      <div className="hero-content">
        <h1>Hi, I'm Jonas Andersen</h1>
        <Divider text="Frontend developer" />
        <p>
          Frontend Developer passionate about crafting seamless user experiences
          with modern web technologies like React and TypeScript.
        </p>
        <div className="cta-buttons">
          <CustomButton
            type="primary"
            label="Download CV"
            hasIcon={false}
            onClick={() => navigate("/contact")}
          />
          <CustomButton
            type="secondary"
            label="Hire me"
            hasIcon={true}
            icon={faHouse}
          />
        </div>
      </div>

      {/* Image */}
      <div className="hero-image"></div>

      {/* Scroll animation */}
      <a href="https://www.vg.no" className="hero-scroll-animation">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15C5 16.8565 5.73748 18.6371 7.05023 19.9498C8.36299 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9497 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9497 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36299 2.73754 7.05023 4.05029C5.73748 5.36305 5 7.14348 5 9V15Z"
            stroke={theme.text}
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mouse-body"
          />
          <path
            className="wheel"
            d="M12 6V10"
            stroke={theme.text}
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span style={{ color: theme.text, textDecoration: "none" }}>
          Scroll down
        </span>
      </a>
    </section>
  );
};

export default Hero;
