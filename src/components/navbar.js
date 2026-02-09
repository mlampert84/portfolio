import React, { useState } from "react"
import { Link } from "react-scroll"

const navItems = [
  {
    name: "case_studies",
    displayName: "Case Studies",
  },
  {
    name: "professional_timeline",
    displayName: "Professional Timeline",
  },
  {
    name: "contact",
    displayName: "Contact & Legal Notice",
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <button
            className={`navbar-burger burger ${
              mobileMenuOpen ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded={mobileMenuOpen}
            data-target="theNavbar"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          id="theNavbar"
          className={`navbar-menu ${mobileMenuOpen ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            {navItems.map(i => {
              return (
                <Link
                  className="navbar-item"
                  to={i.name}
                  offset={-200}
                  duration={500}
                  smooth={true}
                  key={i.name}
                  onClick={() => {
                    setMobileMenuOpen(false)
                  }}
                >
                  {i.displayName}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
