import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import './App.css';




export default function App() {
  return (
    <div>
      {/* <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p> */}

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr /> */}

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


      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

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
