//import logo from './logo.svg';
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import React, { useState, useEffect } from "react";

import boostMusic from "./assets/boostMusic.mp3";
import useSound from "use-sound";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        {/* <Showcase /> */}
        <Team />
        {/* <Faq /> */}
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
