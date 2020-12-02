import React from "react"
import Skill from "./skill"
import { Element } from "react-scroll"
import skillsText from "../data/skills-text"

const skills = skillsText.map(s => <Skill key={s.title} content={s} />)

export default function Skills() {
  return (
    <section className="section">
      <Element name="skills">
        <div className="container">
          <div className="columns">{skills}</div>
        </div>
      </Element>
    </section>
  )
}
