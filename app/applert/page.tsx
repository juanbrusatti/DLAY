"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Shield, Smartphone, MapPin, Users, AlertTriangle, BarChart3, MessageSquare, Clock, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import CustomCursor from "@/components/custom-cursor"

export default function ApplertLanding() {
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
      icon: Shield,
      title: language === 'es' ? 'Seguridad Inmediata' : 'Instant Security',
      description: language === 'es' 
        ? 'Envía alertas de emergencia con un solo toque a las autoridades correspondientes.'
        : 'Sends emergency alerts with a single touch to corresponding authorities.'
    },
    {
      icon: MapPin,
      title: language === 'es' ? 'Ubicación en Tiempo Real' : 'Real-time Location',
      description: language === 'es'
        ? 'Transmite la ubicación exacta del usuario para respuestas rápidas.'
        : 'Transmits the user\'s exact location for quick responses.'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Conexión Directa' : 'Direct Connection',
      description: language === 'es'
        ? 'Mantiene comunicación constante con servicios de emergencia.'
        : 'Maintains constant communication with emergency services.'
    },
    {
      icon: MessageSquare,
      title: language === 'es' ? 'Canal de Comunicación' : 'Communication Channel',
      description: language === 'es'
        ? 'Chat directo con las entidades para coordinar respuestas efectivas.'
        : 'Direct chat with entities to coordinate effective responses.'
    }
  ]

  const features = [
    {
      title: language === 'es' ? 'Alertas Inteligentes' : 'Smart Alerts',
      description: language === 'es'
        ? 'Sistema clasificado de alertas según el tipo y nivel de emergencia.'
        : 'Classified alert system based on type and emergency level.'
    },
    {
      title: language === 'es' ? 'Panel de Noticias' : 'News Panel',
      description: language === 'es'
        ? 'Las entidades publican información relevante sobre eventos en la ciudad.'
        : 'Entities publish relevant information about city events.'
    },
    {
      title: language === 'es' ? 'Interfaz Intuitiva' : 'Intuitive Interface',
      description: language === 'es'
        ? 'Diseño simple y accesible para uso rápido en situaciones de emergencia.'
        : 'Simple and accessible design for quick use in emergency situations.'
    },
    {
      title: language === 'es' ? 'Notificaciones Push' : 'Push Notifications',
      description: language === 'es'
        ? 'Alertas instantáneas a todos los usuarios registrados en el área.'
        : 'Instant alerts to all registered users in the area.'
    },
    {
      title: language === 'es' ? 'Historial de Alertas' : 'Alert History',
      description: language === 'es'
        ? 'Registro completo de todas las alertas enviadas y respuestas recibidas.'
        : 'Complete record of all sent alerts and received responses.'
    },
    {
      title: language === 'es' ? 'Modo Offline' : 'Offline Mode',
      description: language === 'es'
        ? 'Funcionalidad básica disponible sin conexión a internet.'
        : 'Basic functionality available without internet connection.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <CustomCursor />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-red-500/20 hover:bg-red-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Applert
                </span>
              </h1>
              
              <p className="font-open-sans text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                {language === 'es' 
                  ? 'Aplicación móvil de seguridad ciudadana que protege a tu comunidad con tecnología de respuesta rápida.'
                  : 'Citizen security mobile application that protects your community with rapid response technology.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-red-500 hover:bg-red-600 text-white font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                >
                  {language === 'es' ? 'Solicitar Información' : 'Request Information'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-open-sans font-semibold transition-all duration-300"
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
              {language === 'es' ? 'Características de Seguridad' : 'Security Features'}
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'es'
                ? 'Tecnología avanzada para proteger lo que más importa: tu comunidad'
                : 'Advanced technology to protect what matters most: your community'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-red-500" />
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
              {language === 'es' ? 'Funcionalidades Avanzadas' : 'Advanced Features'}
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'es'
                ? 'Herramientas tecnológicas diseñadas para la gestión de emergencias'
                : 'Technological tools designed for emergency management'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-red-500" />
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
                ? '¿Listo para implementar seguridad en tu ciudad?' 
                : 'Ready to implement security in your city?'
              }
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground mb-8">
              {language === 'es'
                ? 'Únete a las comunidades que ya están protegiendo a sus ciudadanos con Applert'
                : 'Join communities already protecting their citizens with Applert'
              }
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-red-500 hover:bg-red-600 text-white font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              {language === 'es' ? 'Contactar para Implementación' : 'Contact for Implementation'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
