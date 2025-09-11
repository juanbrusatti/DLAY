"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const teamMembers = [
  {
    id: "juan",
    name: "Juan Brusatti",
    role: "Full Stack Developer",
    avatar: "/juan.jpg",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
    social: {
      github: "https://github.com/juanbrusatti",
      linkedin: "#",
      email: "juanbrusatti@gmail.com",
    },
  },
  {
    id: "jeremias",
    name: "Jeremias Avaro",
    role: "Full Stack Developer",
    avatar: "/jeremias.png",
    skills: ["Ruby", "Rails","Python", "PostgreSQL", "React"],
    social: {
      github: "https://github.com/jeremiasavaro",
      linkedin: "#",
      email: "jeremias@dlay.dev",
    },
  },
  {
    id: "mateo",
    name: "Mateo Cornejo",
    role: "Full Stack Developer",
    avatar: "/mateo.png",
    skills: ["React", "TypeScript", "PostgreSQL", "JavaScript"],
    social: {
      github: "https://github.com/CornejoMateo",
      linkedin: "#",
      email: "mateo@dlay.dev",
    },
  },
  {
    id: "maximo",
    name: "Maximo Marquez",
    role: "Full Stack Developer",
    avatar: "/maximo.png",
    skills: ["React", "TypeScript", "PostgreSQL", "JavaScript"],
    social: {
      github: "https://github.com/maximarquezregis",
      linkedin: "#",
      email: "maximo@dlay.dev",
    },
  },
]

export default function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t('team.title')}
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="mb-4">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                  />
                </div>

                {/* Name and Role */}
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-1">{member.name}</h3>
                <p className="font-open-sans text-primary font-semibold mb-3">{member.role}</p>

                {/* Description */}
                <p className="font-open-sans text-sm text-muted-foreground mb-4 text-pretty">{t(`team.members.${member.id}.description`)}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
