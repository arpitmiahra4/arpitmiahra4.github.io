import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={`${themename} section`}>
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/arpit-mishra-662199222/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/arpitmiahra4"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:arpitmiahra4@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          <a
            href="https://twitter.com/arpitmiahra4"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="twitter" />
          </a>
        </div>
        <div>
          <div id={`${themename}`} id="mine">
            <p>Email: arpitmiahra4@gmail.com</p>
          </div>
          <div id={`${themename}`} id="mine1">
            <p>Phone:+91 8989571140</p>
          </div>
        </div>
      </div>
    </>
  );
};
