import React from "react"
import projectsText from "../data/projects"

function renderProject(p) {
  return (
    <div className="column">
      <div className="card project-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder yourimage"
            />
          </figure>
        </div>
        <div className="card-content">
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="py-4 container" id="projects">
      <h1 className="title has-text-centered">Personal Projects</h1>

      <div className="columns">{projectsText.map(p => renderProject(p))}</div>
    </section>
  )
}
