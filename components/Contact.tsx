import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-purple-50/50 to-background dark:from-background dark:via-purple-950/10 dark:to-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-sm">
              Let's Talk
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Get In Touch
              </span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
            <CardHeader>
              <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                  <Mail className="h-5 w-5 text-pink-500" />
                </div>
                <a href="mailto:satyapirgcetts@gmail.com" className="hover:text-pink-500 transition-colors">
                  satyapirgcetts@gmail.com
                </a>
              </div>
              <div className="flex items-center transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                  <Phone className="h-5 w-5 text-purple-500" />
                </div>
                <a href="tel:+916290133075" className="hover:text-purple-500 transition-colors">
                  +91 6290133075
                </a>
              </div>
              <div className="flex items-center transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                  <Linkedin className="h-5 w-5 text-pink-500" />
                </div>
                <a
                  href="https://linkedin.com/in/Satyapir-Ghosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  linkedin.com/in/Satyapir-Ghosh
                </a>
              </div>
              <div className="flex items-center transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                  <Github className="h-5 w-5 text-purple-500" />
                </div>
                <a
                  href="https://github.com/SatyaPir1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-colors"
                >
                  github.com/SatyaPir1998
                </a>
              </div>
              <div className="flex items-center transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-pink-500" />
                </div>
                <span className="hover:text-pink-500 transition-colors">Kolkata, India</span>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
            <CardHeader>
              <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus-visible:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus-visible:ring-pink-500"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus-visible:ring-purple-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
