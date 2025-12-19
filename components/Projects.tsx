'use client'

import { ExternalLink, Github, Calendar, Palette, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: "Hospital Appointment System",
    description: "A comprehensive healthcare management system for scheduling, patient records, and telemedicine integration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    icon: <Calendar className="w-6 h-6" />,
    color: "blue",
    image: "/api/placeholder/400/250",
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "EventHub",
    description: "Event management platform with real-time notifications, ticketing, and analytics dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    icon: <Users className="w-6 h-6" />,
    color: "purple",
    image: "/api/placeholder/400/250",
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Ndele Graphics Portfolio",
    description: "Branding and design portfolio showcasing digital art, logos, and marketing materials.",
    tags: ["Figma", "Adobe Creative Suite", "WebGL", "Three.js"],
    icon: <Palette className="w-6 h-6" />,
    color: "pink",
    image: "/api/placeholder/400/250",
    liveLink: "#",
    githubLink: "#"
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world solutions bridging healthcare, technology, and design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-xl bg-${project.color}-500/10 border border-${project.color}-500/20 flex items-center justify-center`}>
                    {project.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-space-grotesk mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 text-xs font-medium border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveLink}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-20 glass-card rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold font-space-grotesk text-center mb-8">
            Founder & CEO of
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Vectropy', 'Ndele Graphics', 'Binary Shadow Dev', 'MedTech Labs'].map((brand) => (
              <div
                key={brand}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold font-space-grotesk">
                    {brand.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-gray-300">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
