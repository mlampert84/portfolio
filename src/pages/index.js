import React from "react"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Hello from "../components/hello"
import Skills from "../components/skills"
import Timeline from "../components/timeline"
import Projects from "../components/projects"
import Footer from "../components/footer"

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Hello />
      <Skills />
      <Timeline />
      <Projects />
      <Footer />
    </React.Fragment>
  )
}
