import React from "react"
import projectsText from "../data/projects"
import { Element } from "react-scroll"

function renderProject(p) {
  return (
    <div className="column" key={p.description}>
      <div className="card project-card">
        <div className="card-image ">
          <figure className="image">
            <img src={p.image} alt="Placeholder yourimage" />
          </figure>
        </div>
        <div className="card-content content">
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="py-4 container">
      <Element name="projects">
        <h1 className="title has-text-centered">Personal Projects</h1>

        <div className="columns">{projectsText.map(p => renderProject(p))}</div>
      </Element>
    </section>
  )
}
