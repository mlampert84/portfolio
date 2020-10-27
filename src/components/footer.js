import React from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container has-text-centered ">
        <h2>Want to know more?</h2>
        <p>Contact me at: marcus[DOT]lampert[AT]gmail[DOT]com</p>
        <p>
          Or visit me on:
          <IconContext.Provider value={{ className: "icon-size" }}>
            <FaGithubSquare size={25} />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "icon-size" }}>
            <FaLinkedin size={25} />
          </IconContext.Provider>
        </p>

        <p>&#169; Marcus Lampert 2020</p>
      </div>
    </footer>
  )
}
