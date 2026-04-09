import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header({ activeSection }: { activeSection: string }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
        >
          Satyapir Ghosh
        </Link>
        <nav className="hidden md:flex gap-6">
          {["about", "projects", "skills", "experience", "education", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === section ? "text-primary underline underline-offset-4" : "text-muted-foreground"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          size="sm"
          className="hidden md:flex bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          <Link href="#contact">Get in Touch</Link>
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[1.2rem] w-[1.2rem]"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
