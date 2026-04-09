export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-purple-50/50 to-background dark:from-background dark:via-purple-950/10 dark:to-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 animate-on-scroll">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-sm">
              Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Professional Experience
              </span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              My professional journey and key accomplishments throughout my career.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-pink-500 animate-on-scroll">
            <div className="absolute w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -left-[11px] top-1.5 animate-pulse"></div>
            <div className="space-y-2 transition-all duration-300 hover:translate-x-1">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Full Stack Blog Web Application
              </h3>
              <p className="text-sm text-muted-foreground">IEM Consultancy Services • 09/2025 - Present</p>
              <p className="text-muted-foreground">
                Built a full-stack blog application using the MERN stack, integrating React.js for a responsive user
                interface and MongoDB for efficient data management with complete CRUD functionality. Developed
                secure backend APIs with Node.js and Express.js, implementing user authentication and authorization
                for controlled access.
              </p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-pink-500 animate-on-scroll">
            <div className="absolute w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -left-[11px] top-1.5 animate-pulse"></div>
            <div className="space-y-2 transition-all duration-300 hover:translate-x-1">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Python-Based Interaction Network
              </h3>
              <p className="text-sm text-muted-foreground">IIT Kharagpur • 06/2023 - 03/2024</p>
              <p className="text-muted-foreground">
                Enhanced processing speed by 30% by optimizing Python code and improving overall tool performance.
                Collaborated with the development team and researchers for data collection, utilizing pandas and
                Matplotlib for complex data visualization and analysis of bovine gut microbiota and
                plastic-degrading microbes from Big Data sets.
              </p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-pink-500 animate-on-scroll">
            <div className="absolute w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -left-[11px] top-1.5 animate-pulse"></div>
            <div className="space-y-2 transition-all duration-300 hover:translate-x-1">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Web Developer
              </h3>
              <p className="text-sm text-muted-foreground">SSBL Laboratory, IIT KGP • 05/2022 - 05/2023</p>
              <p className="text-muted-foreground">
                Developed and maintained a dynamic website, increasing user engagement by 40%. Implemented SEO best
                practices, significantly improving search engine visibility. Identified and resolved technical
                issues while maintaining code according to user and client requirements.
              </p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-pink-500 animate-on-scroll">
            <div className="absolute w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -left-[11px] top-1.5 animate-pulse"></div>
            <div className="space-y-2 transition-all duration-300 hover:translate-x-1">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Classification of Cancer Cell Using ML
              </h3>
              <p className="text-sm text-muted-foreground">IIT Kharagpur • 07/2021 - 04/2022</p>
              <p className="text-muted-foreground">
                Applied transfer learning and ensemble techniques using VGG and ResNet models to classify cancer
                types. Improved cancer type classification accuracy from 83.2% to 84.1%, contributing to early
                detection and better patient outcomes. Successfully deployed the solution to AWS cloud platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
