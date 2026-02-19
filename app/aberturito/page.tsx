"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Target, Zap, Shield, BarChart3, MessageSquare, TrendingUp, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import CustomCursor from "@/components/custom-cursor"


export default function AberturitoLanding() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    window.location.href = '/#contact'
  }

  const benefits = [
    {
      icon: Users,
      title: language === 'es' ? 'Conexión total' : 'Total connection',
      description: language === 'es' 
        ? 'Integra todos los departamentos en una plataforma unificada para colaboración perfecta.'
        : 'Integrates all departments in one unified platform for perfect collaboration.'
    },
    {
      icon: MessageSquare,
      title: language === 'es' ? 'Comunicación fluida' : 'Fluid communication',
      description: language === 'es'
        ? 'Facilita la comunicación entre administración, fábrica, colocadores y ventas.'
        : 'Facilitates communication between administration, factory, installers, and sales.'
    },
    {
      icon: TrendingUp,
      title: language === 'es' ? 'Eficiencia operativa' : 'Operational efficiency',
      description: language === 'es'
        ? 'Optimiza el seguimiento de órdenes y mejora la productividad general.'
        : 'Optimizes order tracking and improves overall productivity.'
    },
    {
      icon: Target,
      title: language === 'es' ? 'Gestión centralizada' : 'Centralized management',
      description: language === 'es'
        ? 'Control completo desde un solo lugar con acceso en tiempo real a toda la información.'
        : 'Complete control from one place with real-time access to all information.'
    }
  ]

  const features = [
    {
      title: language === 'es' ? 'Gestión de poyectos' : 'Project management',
      description: language === 'es'
        ? 'Seguimiento completo de cada proyecto desde el inicio hasta la finalización.'
        : 'Complete tracking of each project from start to finish.'
    },
    {
      title: language === 'es' ? 'Integración de equipos' : 'Team integration',
      description: language === 'es'
        ? 'Conecta a todos los miembros del equipo con roles y permisos definidos.'
        : 'Connects all team members with defined roles and permissions.'
    },
    {
      title: language === 'es' ? 'Reportes en tiempo real' : 'Real-time reports',
      description: language === 'es'
        ? 'Dashboard actualizado instantáneamente con métricas clave del negocio.'
        : 'Instantly updated dashboard with key business metrics.'
    },
    {
      title: language === 'es' ? 'Sistema de tareas' : 'Task system',
      description: language === 'es'
        ? 'Asignación y seguimiento de tareas con notificaciones automáticas.'
        : 'Task assignment and tracking with automatic notifications.'
    },
    {
      title: language === 'es' ? 'Compartición de archivos' : 'File sharing',
      description: language === 'es'
        ? 'Almacenamiento centralizado de documentos con acceso controlado.'
        : 'Centralized document storage with controlled access.'
    },
    {
      title: language === 'es' ? 'Chat interno' : 'Internal chat',
      description: language === 'es'
        ? 'Comunicación directa entre miembros del equipo con historial completo.'
        : 'Direct communication between team members with complete history.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <CustomCursor />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/20 hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <span className="text-accent-foreground font-bold text-2xl">AB</span>
                </div>
              </div>
              
              <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Aberturito
                </span>
              </h1>
              
              <p className="font-open-sans text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                {language === 'es' 
                  ? 'Sistema integral de gestión interna que conecta todos los departamentos en una plataforma unificada para maximizar la eficiencia y colaboración.'
                  : 'Comprehensive internal management system that connects all departments in one unified platform to maximize efficiency and collaboration.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                >
                  {language === 'es' ? 'Solicitar Demo' : 'Request Demo'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-open-sans font-semibold transition-all duration-300"
                >
                  {language === 'es' ? 'Volver a Proyectos' : 'Back to Projects'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-foreground mb-4">
              {language === 'es' ? 'Beneficios Clave' : 'Key Benefits'}
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'es'
                ? 'Transforma la forma en que tu equipo colabora y gestiona proyectos'
                : 'Transform how your team collaborates and manages projects'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-foreground mb-4">
              {language === 'es' ? 'Características Técnicas' : 'Technical Features'}
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'es'
                ? 'Herramientas avanzadas diseñadas para la gestión empresarial moderna'
                : 'Advanced tools designed for modern business management'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-open-sans text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-foreground mb-6">
              {language === 'es' 
                ? '¿Listo para transformar la gestión de tu equipo?' 
                : 'Ready to transform your team management?'
              }
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground mb-8">
              {language === 'es'
                ? 'Únete a las empresas que ya están optimizando su colaboración con Aberturito'
                : 'Join companies already optimizing their collaboration with Aberturito'
              }
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              {language === 'es' ? 'Contactar para Demo' : 'Contact for Demo'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
