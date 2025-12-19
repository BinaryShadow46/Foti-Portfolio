'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  React as ReactIcon,
  Nextjs,
  TailwindCSS,
  Stethoscope,
  Database,
  Figma,
  GitBranch,
  Cpu,
  Activity
} from 'lucide-react'

const skills = [
  { icon: <ReactIcon className="w-8 h-8" />, name: "React", level: 95, color: "text-cyan-400" },
  { icon: <Nextjs className="w-8 h-8" />, name: "Next.js", level: 90, color: "text-white" },
  { icon: <TailwindCSS className="w-8 h-8" />, name: "Tailwind CSS", level: 98, color: "text-teal-400" },
  { icon: <Database className="w-8 h-8" />, name: "Database Design", level: 85, color: "text-emerald-400" },
  { icon: <Figma className="w-8 h-8" />, name: "UI/UX Design", level: 92, color: "text-pink-400" },
  { icon: <GitBranch className="w-8 h-8" />, name: "Git & DevOps", level: 88, color: "text-orange-400" },
  { icon: <Cpu className="w-8 h-8" />, name: "System Architecture", level: 87, color: "text-blue-400" },
  { icon: <Activity className="w-8 h-8" />, name: "Medical Diagnostics", level: 96, color: "text-red-400" },
]

const medicalSkills = [
  "Patient Assessment & Diagnosis",
  "Emergency Medicine",
  "Medical Research",
  "Healthcare Technology",
  "Clinical Workflow Optimization",
  "Telemedicine Systems"
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            Technical & Medical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A unique combination of healthcare knowledge and technical skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-8 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-blue-400" />
              Technical Stack
            </h3>
            <div className="space-y-6">
              {skills.slice(0, 6).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className={`font-bold ${skill.color}`}>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Medical Skills */}
          <div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-8 flex items-center gap-3">
              <Stethoscope className="w-6 h-6 text-red-400" />
              Medical Expertise
            </h3>
            <div className="space-y-4">
              {medicalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <Activity className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>

            {/* Medical Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-bold font-space-grotesk mb-4">
                Healthcare Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {['EHR Systems', 'Medical Imaging', 'Lab Info Systems', 'Telehealth', 'Health Analytics', 'mHealth Apps'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 border border-gray-800 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 italic">
              "The intersection of medicine and technology is where real innovation happens. 
              Understanding clinical workflows allows me to build technology that truly serves 
              healthcare professionals and patients."
            </p>
            <p className="mt-4 text-gray-400">— Fotinati Ndele</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
