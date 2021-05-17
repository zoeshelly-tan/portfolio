import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar(){
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <span className="navbar-brand mb-1 h1">Navbar</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"} to="./about">About</Link>
        </li>
        <li className="nav-item">
          <Link  className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="./portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="./contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  )}

export default Navbar;
