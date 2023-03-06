import * as React from "react";
// import useEffect from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import './App.css';

// ReactGA.initialize('G-BT7QS340V0');


export default function App() {


  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <div className="nav-main">
          <div className="nav-left-cont">
              <div className="nav-basic nav-name-icon">Icon</div>
              <div className="nav-basic nav-name-text">Raiyan Shuvo</div>
          </div>
          <div className="nav-right-cont">
              <Link className="nav-basic nav-home" to="/">Home</Link>
              <Link className="nav-basic nav-about" to="/about">About</Link>
              <Link className="nav-basic nav-resume" to="/resume">Resume</Link>
              <Link className="nav-basic nav-portfolio" to="/projects">Projects</Link>
              <Link className="nav-basic nav-contact" to="/contact">Contact</Link>
          </div>
      </div>


      <div className="nav-main-bottom">
          <a href="https://github.com/RaiyanKhalil" rel="noreferrer"
          target="_blank" className="pulsate-bck git-position">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="55" height="55" viewBox="0 0 24 24" strokeWidth="2" stroke="#161b22" fill="#f0f6fc" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
          </a>  
          <a href="https://www.linkedin.com/in/raiyankhalil/" rel="noreferrer"
          target="_blank" className="pulsate-bck linkedin-position">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="55" height="55" viewBox="0 0 24 24" strokeWidth="2" stroke="#0a66c2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="8" y1="11" x2="8" y2="16"></line>
              <line x1="8" y1="8" x2="8" y2="8.01"></line>
              <line x1="12" y1="16" x2="12" y2="11"></line>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>  
          </a>  
      </div>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
