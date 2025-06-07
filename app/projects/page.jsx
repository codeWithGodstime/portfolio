"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import projects from "@/data/projects.json"
import { useNavigation } from "@/context/navigation-context"

// Map projects with proper image handling
const allProjects = projects.map((project) => ({
  ...project,
  image: project.screenshots.length > 0 
    ? project.screenshots[0] 
    : { url: '/placeholder.png', alt: project.title }
}))

export default function ProjectsPage() {
  const { isOpen, isMobile } = useNavigation()

  return (
    <main className={`min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center p-4
      ${isOpen ? 'ml-60' : 'ml-0'}
      ${isMobile ? 'pt-7' : 'pt-0'}`}
    >
      <div className="max-w-6xl w-full space-y-8 py-8 md:px-10 px-4">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-display">Projects</h1>
          <p className="text-zinc-400 max-w-2xl">A collection of my recent projects, ranging from web applications to CLI tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <Card key={project.slug} className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-emerald-400/50 transition-colors">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image.url} 
                  alt={project.image.alt || project.title}
                  width={600}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="px-6 space-y-2">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold font-display text-primary-foreground">{project.title}</h2>
                  <p className="text-zinc-300 text-sm">{project.timeline}</p>
                </div>
                
                <p className="text-zinc-400">{project.overview}</p>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zinc-300">Built with:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild variant="default" size="sm" className="gap-2">
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                    </Link>
                  </Button>
                  {project.links.demo && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="pt-8 pb-4 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Mgboawaji Ikpaiko. All rights reserved.</p>
          <p className="font-mono mt-1">{"// Built with Next.js and TailwindCSS"}</p>
        </footer>
      </div>
    </main>
  )
}
