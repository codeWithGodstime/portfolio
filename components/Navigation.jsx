'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useNavigation } from '@/context/navigation-context'
import { Button } from './ui/button'

const navItems = [
  {
    path: "#about",
    name: "About",
  },
  {
    path: "#experience",
    name: "Experience",
  },
  {
    path: "#skills",
    name: "Skills",
  },
  {
    path: "#projects",
    name: "Projects",
  },
]

const socialLinks = [
  {
    url: "https://github.com/codeWithGodstime",
    icon: Github,
    label: "GitHub",
  },
  {
    url: "https://x.com/mi6ixx",
    icon: Twitter,
    label: "Twitter",
  },
  {
    url: "https://www.linkedin.com/in/mgboawaji/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    url: "mailto:specialgodstym@gmail.com",
    icon: Mail,
    label: "Email",
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const { isOpen, setIsOpen } = useNavigation()

  return (
    <>
      {/* Toggle Button */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-100 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-emerald-400 fixed top-4 left-4 z-50"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </motion.div>

      {/* Navigation Sidebar */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.aside
            key="navigation"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 h-screen w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between py-8 z-40"
          >
            <div className="mt-12">
              {/* <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-4 mb-8"
              >
                <Link href="/" className="text-xl font-bold text-emerald-400">MI</Link>
              </motion.div> */}
              <nav className="space-y-2 px-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                        ${pathname === item.path ? 'bg-zinc-800 text-emerald-400' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'}`}
                      onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Social Links - Fixed at bottom */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-1/2 right-0 -translate-y-1/2 z-50 mr-10"
      >
        <div className="flex flex-col items-center gap-2 bg-zinc-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-800">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </>
  )
} 