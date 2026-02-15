"use client"

import { useEffect, useState, useRef } from 'react'
import { useLanguage } from '@/contexts/language-context'

interface StatCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function StatCounter({ end, duration = 2000, suffix = '', prefix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold font-montserrat text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

export default function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { end: 5, suffix: '+', prefix: '', label: t('stats.projectsCompleted') },
    { end: 100, suffix: '%', prefix: '', label: t('stats.satisfiedClients') },
    { end: 24, suffix: '/7', prefix: '', label: t('stats.continuousSupport') },
    { end: 2, suffix: '', prefix: '', label: t('stats.yearsExperience') }
  ]

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('stats.title')}
            </span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
            >
              <StatCounter
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={2000 + index * 200}
              />
              <p className="font-open-sans text-sm text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
