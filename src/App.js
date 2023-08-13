import './App.css';
import { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import NavbarSide from './component/NavbarSide';


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <Router>
      <div className="app">
        <NavbarSide homeRef={homeRef} aboutRef={aboutRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
        <Home ref={homeRef}/>
        <Intro />
        <About ref={aboutRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef}/>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
