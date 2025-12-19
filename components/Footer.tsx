'use client'

import { Github, Twitter, Linkedin, Instagram, Mail, Heart, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, label: '@fotinati.ndele', href: '#', color: 'hover:text-gray-300' },
  { icon: <Twitter className="w-5 h-5" />, label: '@vectropy', href: '#', color: 'hover:text-blue-400' },
  { icon: <Instagram className="w-5 h-5" />, label: '@ndele_grafix', href: '#', color: 'hover:text-pink-400' },
  { icon: <Linkedin className="w-5 h-5" />, label: '@binaryshadowdev', href: '#', color: 'hover:text-blue-300' },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Mentorship', href: '#mentorship' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 via-transparent to-transparent" />
      
      <div className="relative px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold font-space-grotesk">Fotinati Ndele</div>
                  <div className="text-sm text-gray-400">Bridging Medicine & Tech</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Clinical Officer & Full-Stack Developer creating innovative solutions at the intersection of healthcare and technology.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold font-space-grotesk mb-6">Connect</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center gap-3 text-gray-400 ${link.color} transition-colors group cursor-pointer`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700 group-hover:border-current group-hover:scale-110 transition-all">
                      {link.icon}
                    </div>
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold font-space-grotesk mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold font-space-grotesk mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@fotinati.dev"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm">Send an email</div>
                    <div className="font-medium">hello@fotinati.dev</div>
                  </div>
                </a>
                <div className="text-sm text-gray-400 pt-4 border-t border-gray-800">
                  Typically responds within 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

          {/* Bottom Bar */}
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

          {/* Watermark */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/30 border border-gray-800">
              <span className="text-sm text-gray-500">Bridging Medicine & Technology</span>
              <div className="flex items-center gap-1">
                <Stethoscope className="w-3 h-3 text-blue-400" />
                <span className="text-gray-400">+</span>
                <Code className="w-3 h-3 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
