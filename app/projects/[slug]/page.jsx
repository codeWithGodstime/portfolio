"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import projects from "@/data/projects.json"
import { useNavigation } from "@/context/navigation-context"

export default function ProjectPage({ params }) {
  const { isOpen, isMobile } = useNavigation()
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <main className={`min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center p-4
      ${isOpen ? 'ml-60' : 'ml-0'}
      ${isMobile ? 'pt-7' : 'pt-0'}`}
      >
        <div className="max-w-4xl w-full py-8 space-y-8">
          <Link href="/projects" className="inline-flex items-center text-zinc-400 hover:text-emerald-400 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-zinc-400">The project you're looking for doesn't exist.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={`min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center p-4
      ${isOpen ? 'ml-60' : 'ml-0'}
      ${isMobile ? 'pt-7' : 'pt-0'}`}
    >
      <div className="max-w-4xl w-full py-8 space-y-8">
        <Link href="/projects" className="inline-flex items-center text-zinc-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold font-display">{project.title}</h1>
            <p className="text-zinc-400 text-lg">{project.timeline}</p>
          </div>

          
          {/* Project Links */}
          <div className="flex gap-4 pt-8">
            {project.links.demo && (
              <Button asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ExternalLink size={16} />
                  View Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="gap-2 text-zinc-700">
                  <Github size={16} />
                  View Code
                </a>
              </Button>
            )}
          </div>

          {/* Project Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-display">Overview</h2>
            <p className="text-zinc-300 leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem Statement */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-display">Problem Statement</h2>
            <p className="text-zinc-300 leading-relaxed">{project.problemStatement}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-display">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(
                project.techStack.reduce((acc, tech) => {
                  if (!acc[tech.category]) acc[tech.category] = [];
                  acc[tech.category].push(tech.name);
                  return acc;
                }, {})
              ).map(([category, tools]) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-sm font-semibold text-emerald-400 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="bg-zinc-900 border-primary text-primary-foreground">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-display">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-emerald-400">{feature.title}</h3>
                    <p className="text-zinc-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={screenshot.url}
                      alt={screenshot.alt}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    {screenshot.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                        {screenshot.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
