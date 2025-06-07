import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const projects = [
  {
    slug: "mobile-app",
    title: "HealthTrack Mobile App",
    description: "A cross-platform health tracking application built with Flutter and Firebase.",
    tags: ["Flutter", "Firebase", "Mobile"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    slug: "web-dashboard",
    title: "Analytics Dashboard",
    description: "A responsive admin dashboard built with Next.js and TailwindCSS.",
    tags: ["Next.js", "React", "TailwindCSS"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    slug: "e-commerce",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full space-y-8 py-8">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold font-mono">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.slug} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div
                className="h-48 bg-zinc-800 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <CardContent className="p-4 space-y-3">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-zinc-900 text-emerald-400 border-emerald-400/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href={`/projects/${project.slug}`}>View Project Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
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
