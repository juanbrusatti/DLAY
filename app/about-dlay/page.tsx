"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, GitBranch, GitCommit, Calendar, User, MessageSquare, Users, Coffee, Code, Heart, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import CustomCursor from "@/components/custom-cursor"

export default function AboutDLAYPage() {
  const { language } = useLanguage()
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const firstCommit = {
    hash: "a1b2c3d4",
    message: language === 'es' ? "Inicialización del proyecto applert" : "initial commit for applert",
    author: "DLAY Team",
    date: "2024-01-15",
    files: 5,
    additions: 234,
    deletions: 12
  }

  const teamMembers = [
    {
      name: "DLAY Team",
      role: language === 'es' ? "Desarrolladores apasionados" : "Passionate developers",
      emoji: "👨‍💻",
      description: language === 'es' 
        ? "Grupo de estudiantes de ciencias de la computación con visión innovadora" 
        : "Group of computer science students with innovative vision"
    },
    {
      name: "The Innovators",
      role: language === 'es' ? "Soluciones creativas" : "Creative solutions",
      emoji: "🚀",
      description: language === 'es'
        ? "Transformando ideas en realidad digital"
        : "Transforming ideas into digital reality"
    },
    {
      name: "Coffee Lovers",
      role: language === 'es' ? "Impulsados por Café y Mate" : "Coffee and Mate Powered",
      emoji: "☕",
      description: language === 'es'
        ? "Sesiones nocturnas de programación y café/mate"
        : "Late night coding sessions and coffee/mate"
    }
  ]

  const officeMoments = [
    {
      title: language === 'es' ? "Brainstorming intenso" : "Intense brainstorming",
      description: language === 'es' 
        ? "Donde nacen las mejores ideas" 
        : "Where the best ideas are born",
      emoji: "💡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: language === 'es' ? "Sesiones de código" : "Coding sessions",
      description: language === 'es'
        ? "Transformando café/mate en código funcional"
        : "Turning coffee/mate into functional code",
      emoji: "⌨️",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: language === 'es' ? "Celebraciones" : "Celebrations",
      description: language === 'es'
        ? "Cada deploy exitoso merece una celebración"
        : "Every successful deploy deserves a celebration",
      emoji: "🎉",
      color: "from-green-400 to-teal-500"
    },
    {
      title: language === 'es' ? "Breaks necesarios" : "Necessary breaks",
      description: language === 'es'
        ? "Recargando energías para seguir creando"
        : "Recharging energy to keep creating",
      emoji: "🎮",
      color: "from-pink-400 to-red-500"
    }
  ]

  const funFacts = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: language === 'es' ? "Litros de Mate" : "Liters of Mate",
      value: "∞",
      description: language === 'es' ? "Combustible principal" : "Main fuel"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: language === 'es' ? "Líneas de código" : "Lines of code",
      value: "50K+",
      description: language === 'es' ? "Y contando" : "And counting"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'es' ? "Clientes celices" : "Happy clients",
      value: "100%",
      description: language === 'es' ? "Nuestra mejor métrica" : "Our best metric"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: language === 'es' ? "Pasión" : "Passion",
      value: "100%",
      description: language === 'es' ? "En cada proyecto" : "In every project"
    }
  ]

  useEffect(() => {
    // Reset typing state
    setIsTyping(true)
    setTypedText("")
    
    // Define text based on current language
    const commitText = language === 'es' 
      ? "git commit -m 'initial commit for applert'"
      : "git commit -m 'initial commit for applert'"
    
    let index = 0
    const interval = setInterval(() => {
      if (index < commitText.length) {
        const char = commitText[index]
        setTypedText(prev => prev + char)
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [language]) // Re-run when language changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Button 
              variant="ghost" 
              className="mb-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'es' ? 'Volver' : 'Back'}
            </Button>
            
            <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {language === 'es' ? 'Conocer más a DLAY' : 'Get to know DLAY'}
              </span>
            </h1>
            
            <p className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Somos más que desarrolladores, somos un equipo apasionado que transforma ideas en realidad digital con café, mate, código y mucha creatividad.'
                : 'We are more than developers, we are a passionate team that transforms ideas into digital reality with coffee, code, and lots of creativity.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* GitHub First Commit Simulator */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              {language === 'es' ? 'Nuestro primer commit' : 'Our first commit'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'es' 
                ? 'Así comenzó todo nuestra aventura'
                : 'This is how our adventure began'
              }
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-background/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">main</span>
                </div>
                <Badge variant="secondary">
                  <GitCommit className="w-3 h-3 mr-1" />
                  {firstCommit.hash}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{firstCommit.author}</p>
                    <p className="text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {firstCommit.date}
                    </p>
                  </div>
                </div>
                
                {/* Terminal */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-mono text-sm">
                    <span className="text-green-400">$ </span>
                    <span className="text-green-400">{typedText}</span>
                    {isTyping && <span className="animate-pulse text-green-400">_</span>}
                  </div>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">{firstCommit.message}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>
                      <span className="text-green-600">+{firstCommit.additions}</span> additions
                    </span>
                    <span>
                      <span className="text-red-600">-{firstCommit.deletions}</span> deletions
                    </span>
                    <span>{firstCommit.files} files changed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Moments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              {language === 'es' ? 'Momentos en la Oficina' : 'Office Moments'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'es' 
                ? 'Un vistazo a nuestro día a día'
                : 'A glimpse into our daily life'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeMoments.map((moment, index) => (
              <Card 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-background/50 backdrop-blur-sm border-primary/20"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${moment.color} flex items-center justify-center text-3xl transform transition-transform duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}>
                    {moment.emoji}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{moment.title}</h3>
                  <p className="text-muted-foreground text-sm">{moment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              {language === 'es' ? 'Nuestro Equipo' : 'Our Team'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'es' 
                ? 'Las mentes creativas detrás de DLAY'
                : 'The creative minds behind DLAY'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center bg-background/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              {language === 'es' ? 'Datos' : 'Fun Facts'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'es' 
                ? 'Números que nos definen'
                : 'Numbers that define us'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <Card key={index} className="text-center bg-background/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {fact.icon}
                  </div>
                  <h3 className="font-bold text-2xl mb-1">{fact.value}</h3>
                  <p className="font-semibold text-sm mb-2">{fact.title}</p>
                  <p className="text-muted-foreground text-xs">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
            {language === 'es' 
              ? '¿Listo para crear algo increíble juntos?' 
              : 'Ready to create something amazing together?'
            }
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Hablemos de tu proyecto y transformemos tu visión en realidad'
              : 'Let\'s talk about your project and transform your vision into reality'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {language === 'es' ? 'Contactarnos' : 'Contact Us'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
