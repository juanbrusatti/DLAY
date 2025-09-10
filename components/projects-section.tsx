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
      image: "/modern-dashboard-showing-environmental-data-and-ch.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      demoUrl: "#",
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
      id: "smartinventory",
      image: "/inventory-management-dashboard-with-ai-predictions.jpg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    },
    {
      id: "learnhub",
      image: "/e-learning-platform-with-course-interface.jpg",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis"],
    },
  ],
}

export default function ProjectsSection() {
  const { t } = useLanguage()

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
                    alt={t(`projects.items.${project.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">{t(`projects.items.${project.id}.name`)}</CardTitle>
                  <p className="font-open-sans text-sm text-primary font-semibold">{t(`projects.items.${project.id}.client`)}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty">{t(`projects.items.${project.id}.description`)}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('projects.demo')}
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      {t('projects.code')}
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
                    alt={t(`projects.items.${project.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">{t('projects.inProgress')}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">{t(`projects.items.${project.id}.name`)}</CardTitle>
                  <p className="font-open-sans text-sm text-primary font-semibold">{t(`projects.items.${project.id}.client`)}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty">{t(`projects.items.${project.id}.description`)}</p>

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
