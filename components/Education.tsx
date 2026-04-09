import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function Education() {
  return (
    <section
      id="education"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-pink-50 via-background to-purple-50 dark:from-pink-950/20 dark:via-background dark:to-purple-950/20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-3 py-1 text-sm">
              Learning
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Education & Certifications
              </span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              My academic background and professional development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Education
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">B.Tech in Information Technology</h3>
                <p className="text-sm text-muted-foreground">GCETTS, Hoogly, India • 2015-2019</p>
                <p className="text-muted-foreground">
                  Relevant Coursework: C, Python, Data Structures, Object-Oriented Programming, HTML, CSS,
                  JavaScript
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Final Year Project: PAN Portal System</h3>
                <p className="text-sm text-muted-foreground">GCETTS, Sherampore, WB • 07/2018 - 06/2019</p>
                <p className="text-muted-foreground">
                  Developed a PAN Portal System to optimize application processes with secure user authentication
                  and authorization mechanisms. Integrated data management and reporting functionalities for
                  accurate record-keeping, enhancing processing speed and system transparency.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-pink-500" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Certifications
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="font-medium">JavaScript Course: Unlocking the Power of JavaScript</h3>
                  <p className="text-sm text-muted-foreground">SCALER • January 2023</p>
                </li>
                <li className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="font-medium">Python and SQL for Data Science</h3>
                  <p className="text-sm text-muted-foreground">SCALER • August 2023</p>
                </li>
                <li className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="font-medium">Node JS Certification Course: Master the Fundamentals</h3>
                  <p className="text-sm text-muted-foreground">SCALER • February 2022</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-on-scroll border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Languages
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 transition-all duration-300 hover:scale-[1.02] min-w-[150px]">
                  <h3 className="font-medium">English</h3>
                  <p className="text-sm text-muted-foreground">Proficient</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 transition-all duration-300 hover:scale-[1.02] min-w-[150px]">
                  <h3 className="font-medium">Hindi</h3>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 transition-all duration-300 hover:scale-[1.02] min-w-[150px]">
                  <h3 className="font-medium">Bengali</h3>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
