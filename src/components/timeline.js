import React from "react"

import content from "../data/timeline-content"

function renderYear(year) {
  return (
    <header className="timeline-header" key={year}>
      <span className="tag is-primary">{year}</span>
    </header>
  )
}

function renderTags(tags) {
  return (
    <div className="tags are-small">
      {tags.map(tag => (
        <span className="tag is-success" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function renderTimeLineFiller(index) {
  return (
    <div className="timeline-item" key={index}>
      {/* <div className="timeline-marker is-32x32"></div> */}
      <div className="timeline-content py-4"></div>
    </div>
  )
}

function renderWorkItem(item) {
  return (
    <div className="timeline-item" key={item.date}>
      <div className="timeline-marker is-32x32"></div>
      <div className="timeline-content">
        <h2>{item.date}</h2>
        <h3>{item.institution}</h3>
        <h4>{item.event}</h4>
        {item.description.map(d => (
          <p key={d}>{d}</p>
        ))}
        {renderTags(item.skills)}
      </div>
    </div>
  )
}

function renderItems(items) {
  return items.map((item, index) => {
    if (item.type === "year") {
      return renderYear(item.year)
    }
    return [renderTimeLineFiller(index), renderWorkItem(item)]
  })
}

export default function Timeline() {
  return (
    <section className="container" id="experience">
      <h1 className="title has-text-centered">Work Experience</h1>
      <div className="columns is-centered">
        <div className="timeline column is-half">
          {renderItems(content)}
          <div className="timeline-item"></div>
        </div>
      </div>
    </section>
  )
}
