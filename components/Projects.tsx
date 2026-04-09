import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-purple-50/50 to-background dark:from-background dark:via-purple-950/10 dark:to-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-sm">
              My Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Featured Projects
              </span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Here are some of the key projects I've worked on throughout my career.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {[
            {
              title: "BrandStore E-Commerce",
              desc: "Full-scale e-commerce app integrating Juspay and HDFC SmartGateway payment systems with secure webhooks and async checkout flows.",
              tags: ["React", "Node.js", "Express.js", "MongoDB", "Payment Integration"],
              color: "from-orange-500 to-red-500",
              image: "https://savrigifts.com/cdn/shop/files/2_42_-Photoroom_fc518d98-9353-49fa-bf8d-4e2ad3d46f6c_800x800.jpg?v=1745987502",
              codeLink: "https://github.com/SatyaPir1998/brandstore",
              demoLink: "https://brandstore.iemresearch.com",
            },
            {
              title: "Blaze CaseAI Management System",
              desc: "Architected a hybrid no-code visual builder with Node.js/Express REST API hooks and a scalable MongoDB microservices cloud architecture.",
              tags: ["Node.js", "Express.js", "React", "MongoDB"],
              color: "from-blue-500 to-indigo-500",
              image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&h=200&q=80",
              codeLink: "https://github.com/SatyaPir1998/BlazeStudioStender.git",
              demoLink: "https://blaze-studio-frontend-testing.onrender.com",
            },
            {
              title: "AI-Powered Chemical NER Tool",
              desc: "Engineered a data preprocessing pipeline and an AI NER system using OpenAI, resolving compounds via PubChemPy & OPSIN APIs with a Gradio interface.",
              tags: ["Python", "Pandas", "OpenAI", "Gradio", "PubChemPy"],
              color: "from-emerald-500 to-teal-500",
              image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&h=200&q=80",
              codeLink: "https://github.com/SatyaPir1998/chemical-ner",
              demoLink: "https://chemical-ner-demo.onrender.com",
            },
            {
              title: "IEM Research Foundation Website",
              desc: "Designed and developed iemresearch.com full-stack platform with custom CMS, responsive interface.",
              tags: ["Next.js", "React", "Node.js", "Express.js", "MongoDB"],
              color: "from-purple-500 to-pink-500",
              image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&w=400&h=200&q=80",
              codeLink: "https://github.com/SatyaPir1998/iem-research",
              demoLink: "https://iemresearch.com",
            },
            {
              title: "Full Stack Blog Application",
              desc: "Built a MERN stack blog application with responsive UI, MongoDB integration, and secure user authentication.",
              tags: ["React", "Node.js", "MongoDB", "Express"],
              color: "from-indigo-500 to-purple-500",
              image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&h=200&q=80",
              codeLink: "https://main.d2r0o5olc1j84l.amplifyapp.com",
              demoLink: "https://www.iemcs.ai",
            },
            {
              title: "Python Interaction Network",
              desc: "Enhanced processing speed by 30% through code optimization for data visualization of bovine gut microbiota.",
              tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
              color: "from-pink-500 to-rose-500",
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=200&q=80",
              codeLink: "https://github.com/SatyaPir1998/interaction-network",
              demoLink: "#",
            },
            {
              title: "Cancer Cell Classification",
              desc: "Applied transfer learning with VGG and ResNet models to improve cancer detection accuracy from 83.2% to 84.1%.",
              tags: ["Machine Learning", "Python", "AWS", "Healthcare"],
              color: "from-amber-500 to-orange-500",
              image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&h=200&q=80",
              codeLink: "https://github.com/SatyaPir1998/cancer-classification",
              demoLink: "#",
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg transition-all duration-500 hover:shadow-xl group animate-on-scroll bg-gradient-to-br from-white to-white dark:from-black dark:to-black hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden bg-muted">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-40 mix-blend-multiply dark:mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-20`}></div>
                  <Image
                    src={project.image}
                    width={400}
                    height={200}
                    alt={project.title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-30 drop-shadow-md">{project.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="mb-4 text-sm">{project.desc}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 transition-all duration-300 hover:scale-105"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:scale-105">
                  <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                >
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center animate-on-scroll">
          <Button
            variant="outline"
            asChild
            className="transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30"
          >
            <Link href="https://github.com/SatyaPir1998">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
