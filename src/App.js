import React from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";

import { Github } from "./components/About/Github";
import { Projects } from "./components/Projects/Project";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
// import { Navbar } from "./components/Navbar/Navbar";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // disable right click and settings
  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  // window.addEventListener("keydown", (e) => {
  //   if (e.keyCode === 123) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 67) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 86) e.preventDefault();
  // });

  return (
    <div id="top" className={`${themename} app`}>
      <section id="home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
