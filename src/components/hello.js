import React from "react"
import introduction from "../data/introduction-text"

function makeIntroText(text) {
  return text.map(t => (
    <li className="is-size-5 my-2" key={t}>
      {t}
    </li>
  ))
}

export default function Hello() {
  return (
    <section className="container">
      <div className="columns">
        <div className="column is-two-thirds ml-2">
          <h2 className="subtitle is-size-4">
            Welcome to my site! Here is me in {introduction.length} theses:
          </h2>
          <ol class="ml-4">
            {makeIntroText(introduction)}
          </ol>
        </div>
      </div>
    </section>
  )
}
