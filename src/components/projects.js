import React from "react"
import { professionalProjects } from "../data/projects"
import { Element } from "react-scroll"

function renderTags(tags) {
  return (
    <div className="tags are-small">
      {tags.map(tag => (
        <span className="tag is-primary is-medium" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function renderList(title, items) {
  return (
    <div className="mb-4">
      <h3 className="subtitle is-5 mb-2">{title}</h3>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const bgColors = ["yellow-background", "blue-background", "red-background"]

function renderProject(p, index) {
  const bgClass = bgColors[index % bgColors.length]
  return (
    <div className="mb-6" key={p.title}>
      <div className="card project-card">
        <div className={`card-image center-image ${bgClass}`}>
          <figure className="image">
            <a href={p.link} target="_blank" rel="noreferrer">
              <img src={p.image} alt="Placeholder yourimage" />
            </a>
          </figure>
        </div>

        <div className="card-content content">
          <h2>{p.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: p.description }} />
          {renderList("Victories", p.victories)}
          {renderList("Defeats", p.defeats)}
          <h3 className="subtitle is-5 mb-2">Technologies</h3>
          {renderTags(p.technology)}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="container">
      <Element name="case_studies">
        <h1 className="title has-text-centered">Case Studies</h1>
        {professionalProjects.map((p, i) => renderProject(p, i))}
      </Element>
    </section>
  )
}
