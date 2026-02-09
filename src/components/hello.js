import React from "react"

const paragraphs = [
  "Hi there, stranger, and thanks for stopping by!",
  "If you are interesting in what I do, where I come from, and the kinds of projects I've worked on, then keep reading.",
  "I started writing software nine years ago, working in a team first as a frontend developer, and then as a backend developer. We were writing web-based software applications for a large auditing company, PWC Deutschland.",
  "For the last five years, I've been writing software at a research institute (the Berlin-Brandenburg Academy of Sciences, i.e. BBAW) that is dedicated to projects in and adjacent to the humanities. Projects at the Academy inlcude things like online and print critical editions of famous writers (for example: Leibniz, Schleiermacher, Marx, Galen of Pergamon, etc), and centralized databases of archeological objects (for example: ancient Greek and Latin inscriptions, Quran manuscripts, cylinder seals from ancient Near East cuniform civilizations).",
  "Below are a few case studies of the projects I have worked on or am currently working on.",
  <>If you are looking for my blog, which has nothing to do with software development, in which I continue to explore topics that interested me in my past life as an aspiring philosopher, you'll find that on <a href="https://blog.marcuslampert.com">blog.marcuslampert.com</a></>,
]

export default function Hello() {
  return (
    <section className="container">
      <div className="columns">
        <div className="column is-two-thirds ml-2">
          {paragraphs.map((text, i) => (
            <h2 className="subtitle is-size-4" style={{ lineHeight: 1.4 }} key={i}>
              {text}
            </h2>
          ))}
        </div>
      </div>
    </section>
  )
}
