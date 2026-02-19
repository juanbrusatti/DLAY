"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Zap, Shield, BarChart3 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import CustomCursor from "@/components/custom-cursor"

export default function AcmaLanding() {
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
      icon: TrendingUp,
      title: language === 'es' ? 'Optimización de costos' : 'Cost optimization',
      description: language === 'es' 
        ? 'Reduce los costos de producción hasta en un 40% con nuestro algoritmo inteligente de corte de planchas.'
        : 'Reduce production costs by up to 40% with our intelligent sheet cutting algorithm.'
    },
    {
      icon: BarChart3,
      title: language === 'es' ? 'Gestión precisa' : 'Precise management',
      description: language === 'es'
        ? 'Control total del inventario de planchas y sobrantes con actualización en tiempo real.'
        : 'Complete control of sheet and scrap inventory with real-time updates.'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Colaboración mejorada' : 'Enhanced collaboration',
      description: language === 'es'
        ? 'Facilita la comunicación entre equipos de producción y administración.'
        : 'Facilitates communication between production and administration teams.'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Presupuestos exactos' : 'Accurate budgets',
      description: language === 'es'
        ? 'Generación de presupuestos precisos que eliminan errores humanos y mejoran la rentabilidad.'
        : 'Generate accurate budgets that eliminate human errors and improve profitability.'
    }
  ]

  const features = [
    {
      title: language === 'es' ? 'Algoritmo de optimización' : 'Optimization algorithm',
      description: language === 'es'
        ? 'Tecnología patentada que calcula el mejor aprovechamiento de cada plancha de vidrio.'
        : 'Patented technology that calculates the best use of each glass sheet.'
    },
    {
      title: language === 'es' ? 'Gestión de stock' : 'Inventory management',
      description: language === 'es'
        ? 'Control automatizado de inventario con alertas de stock mínimo y máximo.'
        : 'Automated inventory control with minimum and maximum stock alerts.'
    },
    {
      title: language === 'es' ? 'Integración ERP' : 'ERP integration',
      description: language === 'es'
        ? 'Se integra con los principales sistemas ERP del mercado.'
        : 'Integrates with leading ERP systems in the market.'
    },
    {
      title: language === 'es' ? 'Reportes avanzados' : 'Advanced reports',
      description: language === 'es'
        ? 'Análisis detallado de rendimiento y métricas de producción en tiempo real.'
        : 'Detailed performance analysis and real-time production metrics.'
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
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <span className="text-primary-foreground font-bold text-2xl">AC</span>
                </div>
              </div>
              
              <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Acma AR Aberturas
                </span>
              </h1>
              
              <p className="font-open-sans text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                {language === 'es' 
                  ? 'Software de gestión avanzado para la industria del vidrio que transforma la eficiencia operativa y maximiza la rentabilidad de cada proyecto.'
                  : 'Advanced management software for the glass industry that transforms operational efficiency and maximizes project profitability.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  {language === 'es' ? 'Solicitar Demo' : 'Request Demo'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-open-sans font-semibold transition-all duration-300"
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
                ? 'Transformamos la forma en que gestionas tus proyectos de vidrio'
                : 'We transform how you manage your glass projects'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
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
                ? 'Tecnología de vanguardia desarrollada específicamente para la industria'
                : 'Cutting-edge technology developed specifically for the industry'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
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
                ? '¿Listo para transformar tu gestión de vidrio?' 
                : 'Ready to transform your glass management?'
              }
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground mb-8">
              {language === 'es'
                ? 'Únete a las empresas que ya están optimizando sus procesos con ACMA'
                : 'Join the companies already optimizing their processes with ACMA'
              }
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
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
