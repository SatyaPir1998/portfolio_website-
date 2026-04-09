import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Satyapir Ghosh. All rights reserved.
        </p>
        <div className="flex gap-4">
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
      </div>
    </footer>
  )
}
