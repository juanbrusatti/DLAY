"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import ParallaxSection from "@/components/parallax-section"

export default function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10 pt-20 md:pt-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs with Enhanced Parallax */}
        <ParallaxSection speed={0.8} direction="up" className="absolute top-0 left-0 w-96 h-96">
          <div className="w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        </ParallaxSection>
        <ParallaxSection speed={1.0} direction="down" className="absolute bottom-0 right-0 w-96 h-96">
          <div className="w-full h-full bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </ParallaxSection>
        <ParallaxSection speed={0.6} direction="up" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="w-full h-full bg-primary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        </ParallaxSection>
        
        {/* Floating Elements with Enhanced Parallax */}
        <ParallaxSection speed={1.2} direction="up" className="absolute top-20 left-20">
          <div 
            className="w-32 h-32 border border-primary/10 rounded-lg backdrop-blur-sm bg-primary/2 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(12deg)`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary/20" />
            </div>
          </div>
        </ParallaxSection>
        
        <ParallaxSection speed={1.5} direction="down" className="absolute top-40 right-32">
          <div 
            className="w-24 h-24 border border-accent/10 rounded-lg backdrop-blur-sm bg-accent/2 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px) rotate(-12deg)`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent/20" />
            </div>
          </div>
        </ParallaxSection>
        
        <ParallaxSection speed={0.9} direction="left" className="absolute bottom-32 left-32">
          <div 
            className="w-40 h-40 border border-primary/10 rounded-lg backdrop-blur-sm bg-primary/2 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) rotate(45deg)`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-primary/20" />
            </div>
          </div>
        </ParallaxSection>
        
        <ParallaxSection speed={1.1} direction="right" className="absolute bottom-20 right-20">
          <div 
            className="w-28 h-28 border border-accent/10 rounded-lg backdrop-blur-sm bg-accent/2 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px) rotate(-45deg)`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent/20" />
            </div>
          </div>
        </ParallaxSection>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icon with Animation */}
          <div className={`mb-8 flex justify-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:rotate-6">
              <Code2 className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </div>

          {/* Main Headline with Typing Effect */}
          <h1 className={`font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300">
              {t('hero.title')}
            </span>
          </h1>

          {/* Subtitle with Fade In */}
          <p className={`font-open-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons with Staggered Animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold px-8 py-3 text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center">
                {t('hero.startProject')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-open-sans font-semibold px-8 py-3 text-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
            >
              {t('hero.viewWork')}
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
