import React from "react"
import introduction from "../data/introduction-text"

function makeIntroText(text) {
  return text.map(t => (
    <p className="is-size-5 my-2" key={t}>
      {t}
    </p>
  ))
}

export default function Hello() {
  return (
    <section className="container my-6">
      <div className="columns">
        <div className="column is-two-thirds">
          <h2 className="subtitle is-size-4">
            Hello, I'm Marcus. Welcome to my site!
          </h2>
          {makeIntroText(introduction)}
        </div>
      </div>
    </section>
  )
}
