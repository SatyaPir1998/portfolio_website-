import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, BarChart } from "lucide-react"

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 via-background to-purple-50 dark:from-pink-950/20 dark:via-background dark:to-purple-950/20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3 py-1 text-sm">
              Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                My Skills
              </span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              I've developed a diverse set of technical and soft skills throughout my career.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-500" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Frontend Development
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">React</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="90%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">JavaScript</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="85%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">HTML/CSS</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="90%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Responsive Design</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="85%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-pink-500" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Backend Development
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Python</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      data-width="95%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Node.js</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      data-width="85%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Express.js</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      data-width="80%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">MongoDB</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                      data-width="80%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-purple-500" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Data & Other Skills
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Data Analysis (Pandas)</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="90%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Data Visualization</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="85%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Web Scraping</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="85%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
                <li className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Git & Version Control</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="skill-bar h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      data-width="90%"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
