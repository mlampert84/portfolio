import React from "react"

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#skills">
              Skills
            </a>
            <a className="navbar-item" href="#experience">
              Experience
            </a>
            <a className="navbar-item" href="#projects">
              Projects
            </a>
            <a className="navbar-item" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
