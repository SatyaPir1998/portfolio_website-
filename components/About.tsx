"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Phone, MapPin } from "lucide-react"

export default function About() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I'm Satyapir Ghosh"
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        setTypingComplete(true)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-background to-pink-50 dark:from-purple-950/20 dark:via-background dark:to-pink-950/20"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 animate-on-scroll">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {displayText}
                <span className={`${typingComplete ? "hidden" : "inline"} animate-blink`}>|</span>
                <span
                  className={`${typingComplete ? "block mt-2" : "hidden"} text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500`}
                >
                  Fullstack Developer
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-on-scroll">
                Software Developer with 4+ years of experience specializing in backend development using Node.js,
                Express, and  Scripting in Python. Skilled in designing and implementing full-stack solutions with React for
                frontend development.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-on-scroll">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-4 animate-on-scroll">
              <Link href="https://github.com/SatyaPir1998" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/Satyapir-Ghosh" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:satyapirgcetts@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full transition-all duration-300 hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-2 mt-4 animate-on-scroll">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 6290133075</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">satyapirgcetts@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Kolkata, India</span>
              </div>
            </div>
          </div>
          <div className="relative animate-on-scroll flex justify-center items-center lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-1.5 bg-gradient-to-tr from-purple-500 via-pink-400 to-pink-500 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-purple-500/30 hover:rotate-1">
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-background relative bg-muted">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEfrcuSkX_J7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712143581010?e=1777507200&v=beta&t=KUI0TkLUSn9NBQIyzg2KE37yjRAkUYHswGx_Si3-RN0"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
                  alt="Satyapir Ghosh"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
