'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  ArrowDown, Sparkles, Stethoscope, Code, Heart, Cpu, Brain, Zap,
  ExternalLink, Github, Calendar, Palette, Users, Activity,
  Database, Figma, GitBranch, Mail, Twitter, Linkedin, Instagram,
  Target, MessageSquare, Video, Clock, Briefcase, Award, MapPin
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export default function Home() {
  const [textIndex, setTextIndex] = useState(0)
  const texts = ['Clinical Officer', 'Full-Stack Developer', 'UI/UX Designer', 'Healthcare Innovator']
  
  const heroRef = useRef(null)
  const careerRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const mentorshipRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const careerInView = useInView(careerRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true })
  const skillsInView = useInView(skillsRef, { once: true })
  const mentorshipInView = useInView(mentorshipRef, { once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 gradient-bg pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto w-full"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Welcome to my portfolio</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                  <span className="text-gradient">Bridging</span>
                  <br />
                  <span className="text-white">Medicine &</span>
                  <br />
                  <span className="text-white">Technology</span>
                </h1>
                
                <div className="h-12">
                  <p className="text-xl md:text-2xl text-gray-300">
                    I am a{' '}
                    <span className="text-gradient font-bold">
                      {texts[textIndex]}
                    </span>
                  </p>
                </div>
                
                <p className="text-lg text-gray-400 max-w-xl">
                  Bringing precision from clinical medicine and creativity from software engineering 
                  to build innovative solutions that make a difference in healthcare and beyond.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                    <Stethoscope className="w-5 h-5" />
                    View Medical Projects
                  </button>
                  <button className="inline-flex items-center justify-center gap-3 px-6 py-3 glass rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <Code className="w-5 h-5" />
                    Explore Code Projects
                  </button>
                </div>
              </div>

              {/* Right Profile */}
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 glass rounded-3xl border border-gray-700/50 shadow-2xl" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-4 border-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold font-heading mb-2">FN</div>
                        <div className="text-sm text-gray-300">Fotinati Ndele</div>
                        <div className="text-xs text-gray-400">Clinical Officer & Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </section>

        {/* Dual Career Section */}
        <section ref={careerRef} className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={careerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                The <span className="text-gradient">Dual</span> Expertise
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Combining medical precision with technical innovation to create impactful solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Clinical Medicine Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={careerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="glass p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Stethoscope className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading">Clinical Medicine</h3>
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
                    <span className="text-gray-300">Medical Research & Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Emergency Medicine</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">
                  Leveraging medical expertise to understand healthcare challenges and design 
                  technology solutions that improve patient outcomes and streamline clinical workflows.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
                  Healthcare Technology Innovator
                </div>
              </motion.div>

              {/* Software Engineering Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={careerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <Code className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading">Software Engineering</h3>
                    <p className="text-purple-300">Full-Stack Developer</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Web & Mobile Applications</span>
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
                  Building scalable, user-centric applications with modern technologies, 
                  focusing on clean architecture, performance optimization, and intuitive design.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                    Founder @Vectropy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                    Founder @BinaryShadowDev
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world solutions bridging healthcare, technology, and design
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Hospital Appointment System",
                  description: "A comprehensive healthcare management system for scheduling, patient records, and telemedicine integration.",
                  tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
                  icon: <Calendar className="w-6 h-6" />,
                  color: "blue"
                },
                {
                  title: "EventHub",
                  description: "Event management platform with real-time notifications, ticketing, and analytics dashboard.",
                  tags: ["React", "Node.js", "MongoDB", "Socket.io"],
                  icon: <Users className="w-6 h-6" />,
                  color: "purple"
                },
                {
                  title: "Ndele Graphics Portfolio",
                  description: "Branding and design portfolio showcasing digital art, logos, and marketing materials.",
                  tags: ["Figma", "Adobe Creative Suite", "WebGL", "Three.js"],
                  icon: <Palette className="w-6 h-6" />,
                  color: "pink"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-xl bg-${project.color}-500/10 border border-${project.color}-500/20 flex items-center justify-center`}>
                      {project.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-white transition-colors">
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
                      <button className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                      <button className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Technical & Medical <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A unique combination of healthcare knowledge and technical skills
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
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
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Medical Skills */}
              <div>
                <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
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
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: 20 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                        <Activity className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section ref={mentorshipRef} className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={mentorshipInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 md:p-12 border border-gray-800"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Available for Mentorship</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                    Book a <span className="text-gradient">Mentorship</span> Session
                  </h2>

                  <p className="text-xl text-gray-400 mb-8">
                    Get personalized guidance on career development, technical skills, 
                    or healthcare technology innovation.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <Target className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Career Guidance</h4>
                        <p className="text-gray-400">Navigating dual careers in medicine and technology</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                        <MessageSquare className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Technical Coaching</h4>
                        <p className="text-gray-400">Full-stack development, UI/UX design, and project architecture</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
                        <Video className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Healthcare Tech</h4>
                        <p className="text-gray-400">Building technology solutions for healthcare challenges</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                  <h3 className="text-2xl font-bold font-heading mb-6">Schedule a Session</h3>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Area of Interest
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors">
                        <option>Career Guidance</option>
                        <option>Technical Skills</option>
                        <option>Healthcare Technology</option>
                        <option>Startup Advice</option>
                        <option>Portfolio Review</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Session
                    </button>

                    <p className="text-center text-sm text-gray-400">
                      You'll receive a confirmation email with calendar invite
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-8 lg:px-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-heading">Fotinati Ndele</div>
                    <div className="text-sm text-gray-400">Bridging Medicine & Tech</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Clinical Officer & Full-Stack Developer creating innovative solutions at the intersection of healthcare and technology.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold font-heading mb-6">Connect</h3>
                <div className="space-y-4">
                  {[
                    { icon: Github, label: '@fotinati.ndele', color: 'hover:text-gray-300' },
                    { icon: Twitter, label: '@vectropy', color: 'hover:text-blue-400' },
                    { icon: Instagram, label: '@ndele_grafix', color: 'hover:text-pink-400' },
                    { icon: Linkedin, label: '@binaryshadowdev', color: 'hover:text-blue-300' }
                  ].map((link) => (
                    <div
                      key={link.label}
                      className={`flex items-center gap-3 text-gray-400 ${link.color} transition-colors cursor-pointer`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <span>{link.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold font-heading mb-6">Quick Links</h3>
                <div className="space-y-3">
                  {['Home', 'Projects', 'Skills', 'Mentorship'].map((link) => (
                    <button
                      key={link}
                      className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold font-heading mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm">Send an email</div>
                      <div className="font-medium">hello@fotinati.dev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Fotinati Ndele. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-sm text-gray-400">
                  Made with <Heart className="w-4 h-4 inline text-red-400" /> by Fotinati
                </div>
                <div className="flex gap-4">
                  <div className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    Next.js
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    Tailwind CSS
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400">
                    TypeScript
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
