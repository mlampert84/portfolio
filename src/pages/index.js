import React, { useState, useEffect } from "react"
import { animateScroll } from "react-scroll"
import { FaChevronUp } from "react-icons/fa"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Hello from "../components/hello"
import Timeline from "../components/timeline"
import Projects from "../components/projects"
import Footer from "../components/footer"

function BackToTop(props) {
  if (props.display) {
    return (
      <button
        className="backToTop"
        onClick={() => {
          animateScroll.scrollToTop()
        }}
        aria-label="Back to top"
      >
        <FaChevronUp size={25} />
      </button>
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
    <>
      <BackToTop display={showToTop} />
      <Navbar />
      <Banner />
      <Hello />
      <Projects />
      <Timeline />
      <Footer />
    </>
  )
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Marcus Lampert</title>
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </>
  )
}
