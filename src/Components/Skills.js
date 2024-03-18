import React from "react";
import "./Skills.css";
import hml from "../res/html.svg";
import cs from "../res/css.svg";
import js from "../res/js.svg";
import py from "../res/python.svg";
import cv from "../res/django.svg";
import figma from "../res/figma.svg";
import re from "../res/react.svg";
import no from "../res/node.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Skills() {
  const instagramLink = "https://www.instagram.com/ishant26_12/?next=%2F";

  const linkedInLink =
    "https://www.linkedin.com/in/ishant-verma-9ab995220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

  const gitHubLink = "https://github.com/ishant2612";

  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="skill-set" id="skills">
      <div className="my-skills">
        <div className="title">
          <p>
            <span>MY</span>
            <br />
            POWERS
          </p>
        </div>
        <div className="skill-icon">
          <div className="icons-s">
            <div className="html">
              <img src={hml} />
            </div>
            <div className="html">
              <img src={cs} />
            </div>
            <div className="html">
              <img src={js} />
            </div>
            <div className="html">
              <img src={py} />
            </div>
            <div className="html">
              <img src={re} />
            </div>
            <div className="html">
              <img src={no} />
            </div>
            <div className="html">
              <img src={cv} />
            </div>
            <div className="html">
              <img src={figma} />
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="some">
          <p>
            Embark on a ninja mission to connect with me! Follow my journey on
            social media and let's unlock new opportunities together. Believe
            it, our collaboration will be as powerful as the Rasengan!
          </p>
        </div>
        <div className="s-icons">
          <InstagramIcon
            style={{ cursor: "pointer", fontSize: "2rem" }}
            onClick={() => handleIconClick(instagramLink)}
          />
          <LinkedInIcon
            style={{ cursor: "pointer", fontSize: "2rem" }}
            onClick={() => handleIconClick(linkedInLink)}
          />
          <GitHubIcon
            style={{ cursor: "pointer", fontSize: "2rem" }}
            onClick={() => handleIconClick(gitHubLink)}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
