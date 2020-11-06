import React, { useState, useEffect } from "react"
import { animateScroll } from "react-scroll"
import { FaChevronUp } from "react-icons/fa"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Hello from "../components/hello"
import Skills from "../components/skills"
import Timeline from "../components/timeline"
import Projects from "../components/projects"
import Footer from "../components/footer"

function BackToTop(props) {
  if (props.display) {
    return (
      <div
        className="backToTop"
        onClick={() => {
          animateScroll.scrollToTop()
          console.log("Hello")
        }}
      >
        <FaChevronUp size={25} />
      </div>
    )
  } else {
    return null
  }
}

export default function Home() {
  const [showToTop, setShowToTop] = useState(false)

  function handleScroll() {
    if (window.pageYOffset > 10) {
      setShowToTop(true)
    } else {
      setShowToTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <React.Fragment>
      <BackToTop display={showToTop} />
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
