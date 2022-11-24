import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={` ${themename} section `}>
        <a
          href="https://github.com/gautamverma095"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className={` ${themename} footer`}>Made By Arpit Mishra</h3>
        </a>
      </div>
    </>
  );
};
