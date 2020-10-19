import React from "react"
import Skill from "./skill"

const skillsText = [
  {
    title: "Frontend Developer",
    description:
      "I enjoy the visual satisfaction of seeing one's work come to fruition.",
    languages: ["typescript", "javascript", "elm"],
    tools: ["React", "Vue", "Gatsby", "Npm", "Webpack", "Bootstrap", "Bulma"],
  },
  {
    title: "Backend Developer",
    description:
      "Backend development means to me above all: stability.  How do you make a system that protects the integrity of your data and reliably processes requests?",
    languages: ["Java", "Haskell", "Python"],
    tools: ["Spring Boot", "maven", "hibernate", "docker-compose", "MariaDB"],
  },
  {
    title: "Teacher and Learner",
    taught: [
      "Functional Program in Elm and Haskell",
      "Functional Programming Principles",
      "Vuejs",
    ],
    learned: [
      "Good git hygiene",
      "Dockerization",
      "Api Design with ApiBlueprint",
    ],
  },
]

const skills = skillsText.map(s => <Skill key={s.title} content={s} />)

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="columns">{skills}</div>
      </div>
    </section>
  )
}
