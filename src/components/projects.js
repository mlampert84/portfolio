import React from "react"
import projectsText from "../data/projects"
import { Element } from "react-scroll"

function renderTags(tags) {
  return (
    <div className="tags are-small">
      {tags.map(tag => (
        <span className="tag is-primary" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function renderProject(p) {
  return (
    <div className="column" key={p.description}>
      <div className="card project-card">
        <div className="card-image center-image">
          <figure className="image">
            <a href={p.link} target="_blank" rel="noreferrer">
              <img src={p.image} alt="Placeholder yourimage" />
            </a>
          </figure>
        </div>

        <div className="card-content content">
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          {renderTags(p.technology)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="container">
      <Element name="projects">
        <h1 className="title has-text-centered pb-6">Personal Projects</h1>

        <div className="columns">{projectsText.map(p => renderProject(p))}</div>
      </Element>
    </section>
  )
}
