'use client'

import { Calendar, Video, MessageSquare, Target, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Mentorship() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-gray-800 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Available for Mentorship</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="text-2xl font-bold font-space-grotesk mb-6">Schedule a Session</h3>

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

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Session Duration
                  </label>
                  <div className="flex gap-3">
                    {['30min', '45min', '60min'].map((duration) => (
                      <label
                        key={duration}
                        className="flex-1 cursor-pointer"
                      >
                        <input type="radio" name="duration" className="hidden peer" />
                        <div className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-center peer-checked:bg-blue-500/20 peer-checked:border-blue-500/40 peer-checked:text-blue-300 transition-all">
                          <Clock className="w-4 h-4 inline-block mr-2" />
                          {duration}
                        </div>
                      </label>
                    ))}
                  </div>
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
            </motion.div>
          </div>

          {/* Availability */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400">Online Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Mentees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">Flexible</div>
                <div className="text-sm text-gray-400">Scheduling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
