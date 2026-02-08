import React from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons"
import { Element } from "react-scroll"

const icons = [
  { component: FaGithubSquare, link: "https://github.com/mlampert84" },
  {
    component: FaLinkedin,
    link: "https://www.linkedin.com/in/marcus-lampert-b98a39122/",
  },
]

export default function Footer() {
  return (
    <footer>
      <Element name="contact">
        <div className="container has-text-centered ">
          <h2>Want to know more? Here is my contact information:</h2>
          <p>Lampert Software Solutions</p>
          <p>Marcus Lampert</p>
          <p>Charlottenstrasse 49, 12247 Berlin</p>
          <p>Email: marcus[DOT]lampert[AT]gmail[DOT]com</p>
          <p>Telephone: 0176 57875 033</p>
          <p>
            Or visit me on:
            {icons.map(icon => (
              <a
                key={icon.component}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ className: "icon-size" }}>
                  {React.createElement(icon.component, { size: 25 })}
                </IconContext.Provider>
              </a>
            ))}
          </p>

          <p>&#169; Marcus Lampert {new Date().getFullYear()}</p>
        </div>
      </Element>
    </footer>
  )
}
