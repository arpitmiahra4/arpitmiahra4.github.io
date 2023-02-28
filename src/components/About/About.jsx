import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import Tools from "./Tools";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Arpit Mishra</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          An inquisitive and highly motivated full stack web developer with
          specialisation in MERN stack. Have relevant hands-on experience in
          building multiple websites from scratch. Seeking to pursue a career in
          a challenging environment to hone industry skill.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/arpitmiahra4"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:arpitmiahra4@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918989571140"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/arpit-mishra-662199222/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/u/0/uc?id=1yLLn6TtyaI0BEV-G77DjyDrT_CFVUzog&export=download"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.facebook.com/arpitmishra213/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.google.com/maps/place/Vijay+Nagar,+Indore,+Madhya+Pradesh+452010/@22.7529391,75.8911284,17z/data=!3m1!4b1!4m5!3m4!1s0x396302af403406fb:0x5b50834b117f8bab!8m2!3d22.7532848!4d75.8936962"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
      <section id="#tools">
        <Tools />
      </section>
    </>
  );
};
