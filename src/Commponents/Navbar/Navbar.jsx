import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg  fixed-top ">
  <div className="container-fluid">
    <Link className="navbar-brand  text-white fw-bolder fs-1" href="#">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0"> 
        <li className="nav-item">
          <Link className="nav-link rounded-3 text-white fw-bold"  to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link rounded-3 text-white fw-bold" to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link rounded-3 text-white fw-bold" to='contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
