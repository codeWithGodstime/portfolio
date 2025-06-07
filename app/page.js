'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { useNavigation } from '@/context/navigation-context'

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const skills = [
  "Python (Django, FastAPI)",
  "JavaScript (React, Next.js)",
  "AWS",
  "CI/CD",
  "PostgreSQL, MongoDB",
  "Golang",
  "Redis",
  "Celery",
  "Agile/Scrum"
]

const projects = [
  {
    "title": "Gym Management System (SaaS)",
    "image": "/gymx.png",
    "description": "A multi-tenant gym management platform that allows gym owners to manage their members, staff, subscriptions, and attendance under separate tenant environments. Built with Django, django-tenants, and PostgreSQL, the system supports isolated data per gym, custom landing pages for each tenant, and role-based dashboards for admins and staff.",
    "tools": ["Django", "django-tenants", "PostgreSQ"],
    "links": {
      "repo": "https://github.com/codeWithGodstime/gymX",
      "live": "https://gymx.onrender.com/",
    }
  },
  {
    "title": "In-Motion",
    "image": "/inmotion.png",
    "description": "In-motion is an organization real estate web application that helps the firm to keep track of the companies workers and the sales and also handles tracking of percentage earnings for the employees. Include Analytics and Admin dashboard",
    "tools": ["Django", "DRF", "Shadcn", "NextJS"],
    "links": {
      "repo": "https://github.com/codeWithGodstime/meetmesh",
      "live": "https://partnersatinmotion.com.ng/",
    }
  },
]

export default function Home() {
  const { isOpen, isMobile } = useNavigation()

  return (
    <div className={`min-h-screen text-zinc-100 transition-all duration-300 ease-in-out
       ${isOpen ? 'ml-60' : 'ml-0'}
       ${isMobile ? 'pt-7' : 'pt-0'}`}
    >
      <div className="max-w-3xl md:max-w-full w-full space-y-24 mx-auto ">
        {/* Header Section */}
        <motion.section 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-4 min-h-screen flex flex-col justify-center bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-6 md:px-40"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            {/* <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white text-2xl font-mono overflow-hidden">
            <Image src={"my_profile.jpg"} width={200} height={200} alt="mgboawaji_ikpaiko" /> 
            </div>  */}
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight">
                Mgboawaji Ikpaiko
              </h1>
              <p className="text-xl text-zinc-300 font-sans leading-relaxed">
                Full-Stack Developer | Problem Solver | Tech Enthusiast
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-6 px-6 md:px-40"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> About Me
          </motion.h2>
          <motion.div variants={fadeInUp} className="text-zinc-300 flex flex-col gap-6 text-lg font-sans leading-relaxed">
            <span>I'm a passionate full-stack developer with a strong background in backend engineering and a love for building efficient, scalable software. With experience ranging from educational platforms to social applications, I enjoy turning complex problems into elegant solutions.</span>
            <span>I primarily work with Django, React, PostgreSQL, and Docker, and I'm always exploring new tools and patterns like Celery for async jobs, REST APIs, and multi-tenant architectures. Whether it's creating a real-time game or designing a SaaS platform, I'm driven by impact and functionality.</span>
            <span>Outside of work, I enjoy movies, mentoring upcoming developers, and experimenting with new side projects.</span>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4 px-40"
        >
          <motion.h2 variants={fadeInUp} className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Experience
          </motion.h2>
          <motion.div variants={fadeInUp} className="text-zinc-300">
            {/* Add your experience content here */}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-6 px-6 md:px-40"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Skills
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="bg-zinc-900 text-emerald-400 border-emerald-400/30 capitalize text-base font-sans">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-6 px-6 md:px-40"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Projects
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-zinc-900 border-zinc-800">
                  <Image src={project.image} width={600} height={300} alt="" className="object-cover" />
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-display font-bold text-zinc-100">{project.title}</h3>
                    <p className="text-zinc-300 font-sans leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-3 mt-4">
                      {project.links['live'] && (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a target="_blank" href={project.links['live']}>
                            <ExternalLink size={14} />
                            Live Link
                          </a>
                        </Button>
                      )}
                      {project.links['repo'] && (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a target="_blank" href={project.links['repo']}>
                            <ExternalLink size={14} />
                            View Github
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-12 text-center text-zinc-500 font-sans"
        >
          <p>© {new Date().getFullYear()} Mgboawaji Ikpaiko All rights reserved.</p>
          <p className="font-mono mt-2">{"// Built with Next.js and TailwindCSS"}</p>
        </motion.footer>
      </div>
    </div>
  )
} 