/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "GeunHee Kim",
  title: "MLSA _majoring Computer Science and Engineering ",
  email: "geunhee1227@outlook.kr",
  gitHub: "https://github.com/g1nya2",
  instagram: "https://www.instagram.com/g._.nya_12",
  linkedIn: "https://www.linkedin.com/in/geunhee-kim1227",
  medium: "",
  twitter: "microsoft",
  youTube: "https://youtube.com/@phenomenon1038?si=24J4Xl-wfPk1DvcZ",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
