"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect, useRef } from "react"

const projects = {
  completed: [
    {
      id: "acma-ar-aberturas",
      name: "Acma AR Aberturas",
      client: "AR Aberturas",
      clientUrl: "https://araberturas.com",
      description: "ACMA es un software avanzado para la industria del vidrio que permite generar presupuestos precisos, gestionar stock de planchas y sobrantes, e integrar un algoritmo de optimización de cortes, reduciendo costos de producción y maximizando la eficiencia operativa de cada proyecto.",
      descriptionEn: "ACMA is an advanced software for glass industry that enables precise budget generation, manages sheet and scrap inventory, and integrates a cutting optimization algorithm, reducing production costs and maximizing operational efficiency for each project.",
      image: "/captura-acma.png",
      technologies: ["Python", "Ruby", "JavaScript", "Tailwind CSS", "PostgreSQL"],
      landingUrl: "/acma-ar-aberturas",
      githubUrl: "https://github.com/juanbrusatti/acma",
    },
    {
      id: "aberturito",
      name: "Aberturito",
      client: "AR Aberturas",
      clientUrl: "#",
      description: "Sistema integral de gestión interna para AR Aberturas que conecta todos los departamentos (administración, fábrica, colocadores, ventas y marketing) en una sola plataforma. Facilita la comunicación, el seguimiento de órdenes y la gestión de proyectos, mejorando la eficiencia operativa y la colaboración entre equipos.",
      descriptionEn: "Comprehensive internal management system for AR Aberturas that connects all departments (administration, factory, installers, sales, and marketing) in a single platform. Streamlines communication, order tracking, and project management, enhancing operational efficiency and team collaboration.",
      image: "/Aberturito.png",
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Firebase", "SQL"],
      landingUrl: "/aberturito",
      demoUrl: "https://v0-responsive-web-demo-5o9ovubli.vercel.app",
      githubUrl: "#",
    },
    {
      id: "ecotrack",
      name: "Roswell Indumentaria",
      client: "roswell.com.ar",
      clientUrl: "https://roswell.com.ar",
      description:
        "Sitio de catálogo de indumentaria masculina con carrito que envía pedidos por WhatsApp con mensajes predefinidos según los productos seleccionados.",
      descriptionEn:
        "Menswear catalog website with a cart that sends orders via WhatsApp using predefined messages based on selected items.",
      image: "/roswell.png",
      technologies: ["Supabase", "Tailwind CSS", "Next.js"],
      demoUrl: "https://roswell.com.ar",
      githubUrl: "#",
    },
  ],
  inProgress: [
    {
      id: "applert",
      name: "Applert",
      client: "Vlan",
      description: "APPLERT es una aplicación móvil de seguridad ciudadana que permite enviar alertas de emergencia con un solo toque a entidades de respuesta rápida como policía, bomberos y servicios médicos. La plataforma transmite la ubicación en tiempo real del usuario y mantiene un canal de comunicación directo con las autoridades, además de incluir una sección de noticias donde las entidades publican información relevante sobre eventos y situaciones en la ciudad.",
      descriptionEn: "APPLERT is a citizen security mobile application that allows sending emergency alerts with a single touch to rapid response entities such as police, firefighters, and medical services. The platform transmits the user's real-time location and maintains direct communication with authorities, plus includes a news section where entities publish relevant information about events and situations in the city.",
      image: "/e-learning-platform-with-course-interface.jpg",
      technologies: ["React Native", "JavaScript", "Tailwind CSS", "Firebase"],
    },
  ],
}

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
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
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
            {projects.completed.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name || t(`projects.items.${project.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-2xl"></div>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground relative z-10">{project.name || t(`projects.items.${project.id}.name`)}</CardTitle>
                  {project.clientUrl ? (
                    <a
                      href={project.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-open-sans text-sm text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center relative z-10"
                    >
                      {project.client}
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <p className="font-open-sans text-sm text-primary font-semibold relative z-10">{t(`projects.items.${project.id}.client`)}</p>
                  )}
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty line-clamp-3">
                    {project.descriptionEn && language === 'en'
                      ? project.descriptionEn
                      : project.description || t(`projects.items.${project.id}.description`)}
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
                          {language === 'es' ? 'Ver Más' : 'Learn More'}
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
            {projects.inProgress.map((project, index) => (
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

                  <div className="flex items-center justify-between">
                    <span className="font-open-sans text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-accent" />
                      {t('projects.expected')}
                    </span>
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
