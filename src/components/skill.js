import React from "react"

const renderList = items => {
  return items.map(i => (
    <li className="has-text-left" key={i}>
      {i}
    </li>
  ))
}

const renderContentRest = content => {
  if (content.hasOwnProperty("tools")) {
    return [
      <p className="has-text-left" key="1">
        {content.description}
      </p>,
      <h3 key="2">Languages:</h3>,
      <p key="3">{content.languages.join(", ")}</p>,
      <h3 key="4">Tools:</h3>,
      <ul key="5">{renderList(content.tools)}</ul>,
    ]
  } else {
    return [
      <h3 key="1">Things I've taught to colleagues:</h3>,
      <ul key="2">{renderList(content.taught)}</ul>,
      <h3 key="3">Things I've learned from colleagues:</h3>,
      <ul key="4">{renderList(content.learned)}</ul>,
    ]
  }
}

export default function Skill({ content }) {
  return (
    <div className="column skill content  ">
      <h1>{content.title}</h1>
      {renderContentRest(content)}
    </div>
  )
}
