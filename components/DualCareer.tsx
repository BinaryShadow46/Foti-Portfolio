'use client'

import { Stethoscope, Code, Heart, Cpu, Brain, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function DualCareer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            The <span className="text-gradient">Dual</span> Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Combining medical precision with technical innovation to create impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Clinical Medicine Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Stethoscope className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk">Clinical Medicine</h3>
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
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk">Software Engineering</h3>
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

        {/* Bridge Connection */}
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
          <div className="flex justify-center gap-12">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-sm text-gray-400 font-medium">
              Integrated Expertise
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
              <Code className="w-4 h-4 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
