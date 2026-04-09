"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const observerRefs = useRef<IntersectionObserver[]>([])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const sections = ["about", "projects", "skills", "experience", "education", "contact"]

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section)

              // Add animation class to visible elements
              const animatedElements = entry.target.querySelectorAll(".animate-on-scroll")
              animatedElements.forEach((el, index) => {
                setTimeout(() => {
                  ;(el as HTMLElement).classList.add("animate-fade-in")
                }, index * 100)
              })
            }
          })
        },
        { threshold: 0.3 },
      )

      const sectionElement = document.getElementById(section)
      if (sectionElement) {
        observer.observe(sectionElement)
        observerRefs.current.push(observer)
      }
    })

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Animate skill bars
  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-bar")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement
            const width = bar.dataset.width || "0%"
            setTimeout(() => {
              bar.style.width = width
            }, 300)
          }
        })
      },
      { threshold: 0.1 },
    )

    skillBars.forEach((bar) => observer.observe(bar))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background to-background">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
