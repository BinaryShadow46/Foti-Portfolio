'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import DualCareer from '@/components/DualCareer'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Mentorship from '@/components/Mentorship'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
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
    <main className="min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black pointer-events-none" />
      <div className="relative z-10">
        <Hero />
        <DualCareer />
        <Projects />
        <Skills />
        <Mentorship />
        <Footer />
      </div>
    </main>
  )
}
