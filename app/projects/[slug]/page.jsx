import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const projectData = {
  slug: "mobile-app",
  title: "HealthTrack Mobile App",
  timeline: "Jan 2023 - June 2023",
  overview:
    "A cross-platform mobile application that helps users track their health metrics, medication schedules, and fitness goals in one place. Designed for individuals managing chronic conditions or those focused on improving their overall wellness.",
  problemStatement:
    "Many health tracking apps focus on single aspects of health (either fitness, medication, or nutrition). Users with chronic conditions often need to use multiple apps to track different aspects of their health, leading to fragmented data and poor adherence to health regimens.",
  techStack: [
    { name: "Flutter", category: "frontend" },
    { name: "Dart", category: "frontend" },
    { name: "Firebase", category: "backend" },
    { name: "Cloud Firestore", category: "database" },
    { name: "Firebase Auth", category: "auth" },
    { name: "Firebase Cloud Functions", category: "backend" },
    { name: "Provider", category: "state" },
    { name: "Dio", category: "networking" },
    { name: "GitHub Actions", category: "devops" },
    { name: "Figma", category: "design" },
  ],
  features: [
    {
      title: "Health Metrics Dashboard",
      description: "Customizable dashboard showing key health indicators with trend analysis and goal tracking.",
    },
    {
      title: "Medication Reminder System",
      description: "Smart reminder system with medication inventory tracking and refill notifications.",
    },
    {
      title: "Wearable Device Integration",
      description: "Seamless integration with popular fitness trackers and smartwatches for automatic data collection.",
    },
    {
      title: "Offline Functionality",
      description: "Full offline capability with background sync when connectivity is restored.",
    },
    {
      title: "Shareable Health Reports",
      description: "Generate comprehensive health reports that can be shared with healthcare providers.",
    },
  ],
  screenshots: [
    {
      url: "/placeholder.svg?height=640&width=320",
      alt: "Dashboard view showing health metrics",
      caption: "Main dashboard with customizable health metrics",
    },
    {
      url: "/placeholder.svg?height=640&width=320",
      alt: "Medication tracking screen",
      caption: "Medication tracking and reminder system",
    },
    {
      url: "/placeholder.svg?height=640&width=320",
      alt: "Health report generation",
      caption: "Comprehensive health report generation",
    },
  ],
  links: {
    demo: "https://healthtrack-demo.example.com",
    github: "https://github.com/febryardiansyah/healthtrack",
  },
}

export default function ProjectDetail({ params }) {
  // In a real app, you would fetch the project data based on the slug
  // const { slug } = params;
  // const project = await getProjectBySlug(slug);

  const project = projectData

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full space-y-8 py-8">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Project Header */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-mono">{project.title}</h1>
              <p className="text-zinc-400 font-mono">{project.timeline}</p>
            </div>
            <div className="flex gap-2">
              {project.links.github && (
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.blogPost && (
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <a href={project.links.blogPost} target="_blank" rel="noopener noreferrer">
                    <FileText size={16} />
                    Blog Post
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Project Overview
          </h2>
          <p className="text-zinc-300">{project.overview}</p>
        </section>

        {/* Problem Statement */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Problem Statement
          </h2>
          <p className="text-zinc-300">{project.problemStatement}</p>
        </section>

        {/* Your Role */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> My Role
          </h2>
          <p className="text-zinc-300">{project.role}</p>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Tech Stack
          </h2>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech.name} variant="outline" className="bg-zinc-900 text-emerald-400 border-emerald-400/30">
                  {tech.name}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <h3 className="font-bold text-zinc-100 mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack
                      .filter((tech) => ["frontend", "state", "networking"].includes(tech.category))
                      .map((tech) => (
                        <Badge key={tech.name} variant="secondary" className="bg-zinc-800">
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <h3 className="font-bold text-zinc-100 mb-2">Backend & Infrastructure</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack
                      .filter((tech) => ["backend", "database", "auth", "devops"].includes(tech.category))
                      .map((tech) => (
                        <Badge key={tech.name} variant="secondary" className="bg-zinc-800">
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <h3 className="font-bold text-zinc-100 mb-1">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Challenges & Solutions
          </h2>
          <div className="space-y-4">
            {project.challenges.map((item, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-zinc-100">Challenge:</h3>
                    <p className="text-zinc-300">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100">Solution:</h3>
                    <p className="text-zinc-300">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="space-y-2">
                <div className="relative aspect-[9/16] overflow-hidden rounded-md border border-zinc-800">
                  <Image
                    src={screenshot.url || "/placeholder.svg"}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-zinc-400 text-sm text-center">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-zinc-800 my-8" />

        {/* Next/Prev Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft size={16} />
            Previous Project
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            Next Project
            <ArrowLeft size={16} className="rotate-180" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="pt-8 pb-4 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Febry Ardiansyah. All rights reserved.</p>
          <p className="font-mono mt-1">{"// Built with Next.js and TailwindCSS"}</p>
        </footer>
      </div>
    </main>
  )
}
