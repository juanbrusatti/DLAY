"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Clock, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const projects = {
  completed: [
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
    {
      id: "taskflow",
      image: "/project-management-interface-with-kanban-boards.jpg",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "mediconnect",
      image: "/healthcare-app-interface-with-video-call-feature.jpg",
      technologies: ["React", "Express", "WebRTC", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ],
  inProgress: [
    {
      id: "acma-ar-aberturas",
      name: "Acma AR Aberturas",
      client: "AR Aberturas",
      description: "ACMA es un software avanzado para la industria del vidrio que permite generar presupuestos precisos, gestionar stock de planchas y sobrantes, e integrar un algoritmo de optimización de cortes, reduciendo costos de producción y maximizando la eficiencia operativa de cada proyecto.",
      descriptionEn: "ACMA is an advanced software for the glass industry that enables precise budget generation, manages sheet and scrap inventory, and integrates a cutting optimization algorithm, reducing production costs and maximizing operational efficiency for each project.",
      image: "/captura-acma.png",
      technologies: ["Python", "Ruby","JavaScript", "Tailwind CSS", "PostgreSQL"],
    },
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

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <CheckCircle className="w-6 h-6 text-primary mr-3" />
            <h3 className="font-montserrat font-bold text-2xl text-foreground">{t('projects.completed')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.completed.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name || t(`projects.items.${project.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">{project.name || t(`projects.items.${project.id}.name`)}</CardTitle>
                  {project.clientUrl ? (
                    <a
                      href={project.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-open-sans text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      {project.client}
                    </a>
                  ) : (
                    <p className="font-open-sans text-sm text-primary font-semibold">{t(`projects.items.${project.id}.client`)}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty">
                    {project.descriptionEn && language === 'en'
                      ? project.descriptionEn
                      : project.description || t(`projects.items.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.demoUrl || '#'} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.demo')}
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
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
        <div>
          <div className="flex items-center mb-8">
            <Clock className="w-6 h-6 text-accent mr-3" />
            <h3 className="font-montserrat font-bold text-2xl text-foreground">{t('projects.inProgress')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.inProgress.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">{t('projects.inProgress')}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">{project.name}</CardTitle>
                  <p className="font-open-sans text-sm text-primary font-semibold">{project.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty">{project.descriptionEn && language === 'en' ? project.descriptionEn : project.description || t(`projects.items.${project.id}.description`)}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-open-sans text-sm text-muted-foreground">
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
