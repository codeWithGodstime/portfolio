import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const skills = [
  "AWS",
  "CI/CD",
  "Python",
  "Golang",
  "Typescript",
  "React"
]

const projects = [
  {
    "title": "MeetMesh",
    "image": "",
    "description": "Built a fullstack geo-location social media platform to connect user with similar interests in the same environment. Used scikit-learn library to create a recommendation for each user. Use geo-django and geopy to calculate distance between each user to use for recommendation.",
    "tools": ["Django", "Geopy", "ReactJS", "Scikit-learn"],
    "links": {
      "repo": "https://github.com/codeWithGodstime/meetmesh",
      "live": null,
    }
  },
  {
    "title": "In-Motion",
    "image": "",
    "description": "In-motion is an organization real estate web application that helps the firm to keep track of the companies workers and the sales and also handles tracking of percentage earnings for the employees. Include Analytics and Admin dashboard",
    "tools": ["Django", "DRF", "Shadcn", "NextJS"],
    "links": {
      "repo": "https://github.com/codeWithGodstime/meetmesh",
      "live": null,
    }
  },
  {
    "title": "DataCleaner",
    "image": "",
    "description": "DataCleaner is a fast and user-friendly app that cleans messy datasets using pandas—removing duplicates and standardizing column names to make data analysis effortless.",
    "tools": ["Django", "Pandas"],
    "links": {
      "repo": "https://github.com/codeWithGodstime/dataCleaner",
      "live": null,
    }
  },
  {
    "title": "FZBot",
    "image": "",
    "description": "FZBot is a CLI tool that automates downloading of tv series from FZmovies. ",
    "tools": ["Python", "Beautifulsoup", "Asyncio", "Aiohttp"],
    "links": {
      "repo": "https://github.com/codeWithGodstime/fzbot",
      "live": null,
    }
  },

]

export default function Home() {


  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white text-2xl font-mono overflow-hidden">
              <Image src={"my_profile.jpg"} width={200} height={200} alt="mgboawaji_ikpaiko" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-mono">Mgboawaji Ikpaiko</h1>
              <p className="text-zinc-400 font-mono">Software Engineer</p>
            </div>
          </div>
          <p className="text-zinc-300 text-lg">
            <span className="text-emerald-400">const</span> <span className="text-blue-400">developer</span> = {"{"}
            <br />
            &nbsp;&nbsp;passion:{" "}
            <span className="text-amber-300">"I'm passionate about"</span>,
            <br />
            &nbsp;&nbsp;specialties: <span className="text-amber-300">"API Development, Automation"</span>
            <br />
            {"}"};
          </p>
        </section>

        <Separator className="bg-zinc-800" />

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> About Me
          </h2>
          <p className="text-zinc-300">
          I'm a full-stack developer experienced in building web applications with Django and React, with a keen interest in real-time systems and scalable backend solutions. With over 3 years experience working as a tutor and engineer i have develop a keen interest in building applications that scale and is reliable for my users. In my leisure time i enjoy watching TV Series and movies. 
          </p>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {
              skills.map((skill, index) => {
                return <Badge key={index} variant="outline" className="bg-zinc-900 text-emerald-400 border-emerald-400/30 capitalize">
                {skill}
              </Badge>
              })
            }
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              projects.map((project, index)=> {
                return <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold text-zinc-100">{project.title}</h3>
                  <p className="text-zinc-400 text-sm">
                    {project.description}
                  </p>
                  {
                    project.links['live'] && <Button variant="outline" size="sm" className="gap-1 mt-2" asChild>
                    <a target="_blank" href={`${project.links['live']}`}>
                      <ExternalLink size={14} />
                      Live Link
                    </a>
                    </Button>
                  }

                  {
                    project.links['repo'] && <Button variant="outline" size="sm" className="gap-1 mt-2" asChild>
                    <a target="_blank" href={`${project.links['repo']}`} >
                      <ExternalLink size={14} />
                      View Github
                    </a>
                    </Button>
                  }
                </CardContent>
              </Card>
              })
            }
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Connect
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-emerald-400"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-blue-400"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-blue-500"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-amber-400"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-4 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Mgboawaji Ikpaiko All rights reserved.</p>
          <p className="font-mono mt-1">{"// Built with Next.js and TailwindCSS"}</p>
        </footer>
      </div>
    </main>
  )
}
