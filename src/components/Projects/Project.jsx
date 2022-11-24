import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiChakraui,
  SiExpress,
  SiRedux,
  SiJavascript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/7rLk7jX/Screenshot-20221122-131842.png"
                  alt="FlipkartPlus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>FlipkartPlus Clone</h2>
              <p>
                Flipkart is an ecommerce platform from that sells dresses shoes
                and many more things.
              </p>
              <div>
                <FaReact />
                <SiExpress />
                <DiMongodb />
                <SiMaterialui />
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://mishraplus.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/ripe-receipt-7221"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/8nwnXLq/Screenshot-20221122-132653.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Cricket Clone</h2>
              <p>
                A Clone of web application for Get live cricket scores,
                scorecard updates, match schedule, predictions & results, stats,
                latest news & videos of all international, domestic & T20
                series.
              </p>
              <div>
                <DiCss3 />
                <IoLogoJavascript />
                <SiHtml5 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://sweet-blancmange-3c6ad0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/Cricket.com_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
