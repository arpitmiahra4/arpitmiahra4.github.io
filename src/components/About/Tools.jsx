import React from "react";
import "./Tools.css";
import { SiVisualstudiocode, SiPostman , SiCodesandbox , SiNetlify ,SiVercel } from "react-icons/si";
import { VscGithub  } from "react-icons/vsc";
const Tools = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Tools</h2>
        <div className="toolsection">
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiVisualstudiocode />
            <h5>Visual Studio</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <SiCodesandbox />
            <h5>Code Sandbox</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <SiVercel />
            <h5>Vercel</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tools