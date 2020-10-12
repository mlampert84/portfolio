import React from "react"

import content from "../data/timeline-content"

function renderYear(year) {
  return (
    <header className="timeline-header" key={year}>
      <span className="tag is-primary">{year}</span>
    </header>
  )
}

function renderWorkItem(item) {
  return (
    <div className="timeline-item" key={item.date}>
      <div className="timeline-marker is-32x32"></div>
      <div className="timeline-content">
        <h2>{item.date}</h2>
        <h4>{item.event}</h4>
        {item.description.map(d => (
          <p key={d}>{d}</p>
        ))}
      </div>
    </div>
  )
}

function renderItems(items) {
  return items.map(item => {
    if (item.type === "year") {
      return renderYear(item.year)
    }
    return renderWorkItem(item)
  })
}

export default function Timeline() {
  return (
    <div className="timeline">
      {renderItems(content)}
      <div className="timeline-item"></div>
    </div>
  )
}
