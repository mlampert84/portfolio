import React from "react"
import Banner from "../components/banner"
import Hello from "../components/hello"
import Skills from "../components/skills"
import Timeline from "../components/timeline"

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <Hello />
      <Skills />
      <Timeline />
    </React.Fragment>
  )
}
