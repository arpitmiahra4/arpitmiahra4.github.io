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
  SiTypescript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import Flipkart from "../assets/Flipkart.gif"
import cricket from "../assets/cricketClone.gif"
import umbberella from "../assets/CustomizeUmbrella.gif"
import employee from "../assets/EmployeeManagement.gif"
import apple from "../assets/apple.gif"
import nykaa from "../assets/nykaaClone.gif"
import plural from "../assets/pluralSight.gif"
import puma from "../assets/pumaClone.gif"
import word from "../assets/wordGame.gif"
import razer from "../assets/RazerClone.gif"
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
                  src={Flipkart}
                  alt="Flipcart clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>FLIPKART - Clone</h2>
              <p>
              Flipkart is an ecommerce platform from that sells dresses shoes and many more things.
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
        {/* One */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={razer}
                  alt="Razer clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>RAZER - Clone</h2>
              <p>
              The triple-headed snake trademark of Razer is one of the most recognized logos in the<br/> global gaming and esports communities..
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
                  href="https://razer-frontend.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/Razer-FullStack"
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
        {/* three */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={puma}
                  alt="Razer clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PUMA - Clone</h2>
              <p>
              it's to be the Fastest Sports Brand in the world. For someone ready to change the game,<br/> our values are easy to relate to: Be brave. Be confident.

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
                  href="https://puma-ochre.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/puma"
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

        {/*  */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={umbberella}
                  alt="FlipkartPlus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Customize Umbrella</h2>
              <p>A brands want the seller to print their logo on the umbrella. The seller wants you to create a tool that'll help their customers create an instant preview of the customized umbrella on the website by adding the logo.</p>
              <div>
                <SiHtml5 />
                <DiCss3/>
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://arpitstarapps.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/studio"
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

         {/*  */}
         <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={word}
                  alt="FlipkartPlus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Word Game</h2>
              <p>It's Group Hackathon Challenge Done in 48 Hours where we've used MERN stack to make this Word Game along with frontend and backend integration</p>
              <div>
                <FaReact />
                <SiExpress />
                <DiMongodb />
                <SiMaterialui />
                <SiChakraui />
                <SiRedux />
                <FaNodeJs />
                <SiTypescript />
              </div>
              <div>
                <a
                  href="https://arpit-wordgame.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/wide-power-8646"
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

         {/*  */}
         <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={employee}
                  alt="FlipkartPlus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Employee Management System</h2>
              <p>Employee Management System by all CRUD operation on Json-Server. We can track every Employee details by this Tool As easy as we can.</p>
              <div>
                <FaReact />
                <SiChakraui />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://employee-management-system-alpha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/employee-management-system"
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
        {/* Two */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={apple}
                  alt="Apple clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Apple - Clone</h2>
              <p>
              world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV,<br/>plus explore accessories, entertainment, and expert device support.
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
                  href="https://blueapple.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/usable-trouble-1944"
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
                  src={cricket}
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
        {/* third */}
                <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={plural}
                  alt="FlipkartPlus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PLURALSIGHT Clone</h2>
              <p>
              Top-rated courses for developers & IT professionals. Start learning today with Pluralsight.<br /> On-demand training made simple. #1 training for individuals and businesses! Mobile Apps.
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
                  href="https://incredible-hummingbird-0080a2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/plural-project"
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

        {/*  */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={nykaa}
                  alt="FlipkartPlus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Nykaa.com</h2>
              <p>It's Group project where we've used MERN stack to make the Nykaa.com along with frontend and backend integration, fully responsive, smooth UI and Admin Side"</p>
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
                  href="https://63bfed597aacf001e8b9caf6--ornate-cupcake-fb26b5.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arpitmiahra4/Nykaa-Clone"
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
