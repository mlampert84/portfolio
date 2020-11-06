import React from "react"
import { Link } from "react-scroll"

const navItems = [
  {
    name: "skills",
    displayName: "Skills",
  },
  {
    name: "experience",
    displayName: "Experience",
  },
  {
    name: "projects",
    displayName: "Projects",
  },
  {
    name: "contact",
    displayName: "Contact",
  },
]

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-end">
            {navItems.map(i => {
              return (
                <Link
                  className="navbar-item"
                  to={i.name}
                  offset={-50}
                  duration={500}
                  smooth={true}
                  key={i.name}
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
