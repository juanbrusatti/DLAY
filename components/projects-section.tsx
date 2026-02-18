"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect, useRef } from "react"
import ParallaxSection from "@/components/parallax-section"
import { projectsData } from "@/lib/projects-data"

export default function ProjectsSection() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration with Enhanced Parallax */}
      <div className="absolute top-0 left-0 w-full h-full">
        <ParallaxSection speed={0.6} direction="up" className="absolute top-10 left-10">
          <div className="w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        </ParallaxSection>
        <ParallaxSection speed={0.8} direction="down" className="absolute bottom-10 right-10">
          <div className="w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </ParallaxSection>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('projects.title')}
            </span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Completed Projects */}
        <div className={`mb-16 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-foreground">{t('projects.completed')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.completed.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                style={{
                  animationDelay: `${index * 100 + 300}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 animate-pulse">
                      {t('projects.completed')}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-2xl"></div>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground relative z-10">{project.name}</CardTitle>
                  <p className="font-open-sans text-sm text-primary font-semibold relative z-10">{project.client}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty line-clamp-3">
                    {project.descriptionEn && language === 'en' ? project.descriptionEn : project.description || t(`projects.items.${project.id}.description`)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4">
                    {project.landingUrl ? (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105" 
                        asChild
                      >
                        <a href={project.landingUrl}>
                          <ArrowRight className="w-4 h-4 mr-2" />
                          {language === 'es' ? 'Ver más' : 'Learn more'}
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105" 
                        asChild
                      >
                        <a href={project.demoUrl || '#'} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('projects.demo')}
                        </a>
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 bg-transparent border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105" 
                      asChild
                    >
                      <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t('projects.code')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* In Progress Projects */}
        <div className={`transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-foreground">{t('projects.inProgress')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.inProgress.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                style={{
                  animationDelay: `${index * 100 + 300}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground px-3 py-1 animate-pulse">
                      {t('projects.inProgress')}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground relative z-10">{project.name}</CardTitle>
                  <p className="font-open-sans text-sm text-accent font-semibold relative z-10">{project.client}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty line-clamp-3">
                    {project.descriptionEn && language === 'en' ? project.descriptionEn : project.description || t(`projects.items.${project.id}.description`)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4">
                    {project.landingUrl ? (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105" 
                        asChild
                      >
                        <a href={project.landingUrl}>
                          <ArrowRight className="w-4 h-4 mr-2" />
                          {language === 'es' ? 'Ver Más' : 'Learn More'}
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105" 
                        asChild
                      >
                        <a href={project.demoUrl || '#'} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('projects.demo')}
                        </a>
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 bg-transparent border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105" 
                      asChild
                    >
                      <a href={project.githubUrl || '#'} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t('projects.code')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
