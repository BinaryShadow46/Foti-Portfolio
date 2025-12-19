'use client'

import { useEffect, useState, useRef } from 'react'
import { 
  ArrowDown, Sparkles, Stethoscope, Code, Heart, Cpu, Brain, Zap,
  ExternalLink, Github, Calendar, Palette, Users, Activity,
  Database, Figma, GitBranch, Mail, Twitter, Linkedin, Instagram,
  Target, MessageSquare, Video, Clock
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const id = anchor.getAttribute('href')?.substring(1)
        const element = document.getElementById(id || '')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Bridging</span>
                <br />
                <span>Medicine &</span>
                <br />
                <span>Technology</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                Clinical Officer & Full-Stack Developer creating innovative solutions at the intersection of healthcare and technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  <Stethoscope className="w-5 h-5" />
                  View Medical Projects
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300">
                  <Code className="w-5 h-5" />
                  Explore Code Projects
                </button>
              </div>
            </div>

            {/* Right side - Profile */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-2xl" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-4 border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">FN</div>
                      <div className="text-sm text-gray-300">Fotinati Ndele</div>
                      <div className="text-xs text-gray-400">Clinical Officer & Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Dual Career Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dual</span> Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Combining medical precision with technical innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Clinical Medicine Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Stethoscope className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Clinical Medicine</h3>
                  <p className="text-blue-300">Licensed Clinical Officer</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">Patient Care & Diagnostics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Medical Research</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Emergency Medicine</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Leveraging medical expertise to design technology solutions that improve patient outcomes.
              </p>
            </div>

            {/* Software Engineering Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Software Engineering</h3>
                  <p className="text-purple-300">Full-Stack Developer</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Web & Mobile Apps</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">High-Performance Systems</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Building scalable, user-centric applications with modern technologies.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  Founder @Vectropy
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                  Founder @BinaryShadowDev
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hospital Appointment System",
                description: "Healthcare management system for scheduling and telemedicine.",
                icon: <Calendar className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "EventHub",
                description: "Event management platform with real-time features.",
                icon: <Users className="w-6 h-6" />,
                color: "purple"
              },
              {
                title: "Ndele Graphics Portfolio",
                description: "Branding and design portfolio showcasing digital art.",
                icon: <Palette className="w-6 h-6" />,
                color: "pink"
              }
            ].map((project) => (
              <div key={project.title} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical & Medical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-400" />
                Technical Stack
              </h3>
              <div className="space-y-6">
                {[
                  { name: "React/Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 98 },
                  { name: "UI/UX Design", level: 92 },
                  { name: "Database Design", level: 85 },
                  { name: "System Architecture", level: 87 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Stethoscope className="w-6 h-6 text-red-400" />
                Medical Expertise
              </h3>
              <div className="space-y-4">
                {[
                  "Patient Assessment & Diagnosis",
                  "Emergency Medicine",
                  "Medical Research",
                  "Healthcare Technology",
                  "Clinical Workflow Optimization",
                  "Telemedicine Systems"
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700">
                    <Activity className="w-5 h-5 text-red-400" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mentorship</span> Session
              </h2>
              <p className="text-xl text-gray-400">
                Get personalized guidance on career development and technical skills
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Career Guidance</h4>
                    <p className="text-gray-400">Navigating dual careers in medicine and technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Technical Coaching</h4>
                    <p className="text-gray-400">Full-stack development and project architecture</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Video className="w-6 h-6 text-pink-400" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Healthcare Tech</h4>
                    <p className="text-gray-400">Building technology solutions for healthcare</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6">Schedule a Session</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none">
                    <option>Career Guidance</option>
                    <option>Technical Skills</option>
                    <option>Healthcare Technology</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Book Session
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 lg:px-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-bold mb-4">Fotinati Ndele</div>
              <p className="text-gray-400 text-sm">
                Clinical Officer & Full-Stack Developer bridging healthcare and technology.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="space-y-3">
                {[
                  { icon: Github, label: '@fotinati.ndele' },
                  { icon: Twitter, label: '@vectropy' },
                  { icon: Instagram, label: '@ndele_grafix' },
                  { icon: Linkedin, label: '@binaryshadowdev' }
                ].map((social) => (
                  <div key={social.label} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <social.icon className="w-5 h-5" />
                    <span>{social.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Mentorship</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>hello@fotinati.dev</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            © {new Date().getFullYear()} Fotinati Ndele. Bridging Medicine & Technology.
          </div>
        </div>
      </footer>
    </main>
  )
}
