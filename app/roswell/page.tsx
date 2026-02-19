"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, ShoppingBag, TrendingUp, Users, Target, Zap, Shield, BarChart3, MessageSquare, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import CustomCursor from "@/components/custom-cursor"

export default function RoswellLanding() {
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
      icon: ShoppingBag,
      title: language === 'es' ? 'Catálogo digital' : 'Digital catalog',
      description: language === 'es' 
        ? 'Muestra toda la colección de indumentaria masculina con imágenes de alta calidad.'
        : 'Displays the entire menswear collection with high-quality images.'
    },
    {
      icon: MessageSquare,
      title: language === 'es' ? 'Pedidos por WhatsApp' : 'WhatsApp orders',
      description: language === 'es'
        ? 'Sistema innovador que envía pedidos automáticamente con mensajes predefinidos.'
        : 'Innovative system that automatically sends orders with predefined messages.'
    },
    {
      icon: Smartphone,
      title: language === 'es' ? 'Experiencia móvil' : 'Mobile experience',
      description: language === 'es'
        ? 'Diseño totalmente responsive para una experiencia perfecta en cualquier dispositivo.'
        : 'Fully responsive design for a perfect experience on any device.'
    },
    {
      icon: TrendingUp,
      title: language === 'es' ? 'Conversión mejorada' : 'Enhanced conversion',
      description: language === 'es'
        ? 'Proceso de compra simplificado que aumenta las tasas de conversión.'
        : 'Simplified purchase process that increases conversion rates.'
    }
  ]

  const features = [
    {
      title: language === 'es' ? 'Galería de productos' : 'Product gallery',
      description: language === 'es'
        ? 'Visualización detallada de cada prenda con múltiples ángulos y zoom.'
        : 'Detailed visualization of each garment with multiple angles and zoom.'
    },
    {
      title: language === 'es' ? 'Carrito inteligente' : 'Smart cart',
      description: language === 'es'
        ? 'Carrito de compras persistente que recuerda los productos seleccionados.'
        : 'Persistent shopping cart that remembers selected products.'
    },
    {
      title: language === 'es' ? 'Integración WhatsApp' : 'WhatsApp integration',
      description: language === 'es'
        ? 'Conexión directa con WhatsApp para comunicación instantánea con clientes.'
        : 'Direct connection with WhatsApp for instant customer communication.'
    },
    {
      title: language === 'es' ? 'Gestión de inventario' : 'Inventory management',
      description: language === 'es'
        ? 'Control automático de stock con actualización en tiempo real.'
        : 'Automatic stock control with real-time updates.'
    },
    {
      title: language === 'es' ? 'Mensajes personalizados' : 'Custom messages',
      description: language === 'es'
        ? 'Mensajes automáticos según los productos seleccionados en el carrito.'
        : 'Automatic messages based on products selected in the cart.'
    },
    {
      title: language === 'es' ? 'Interfaz intuitiva' : 'Intuitive interface',
      description: language === 'es'
        ? 'Diseño limpio y moderno que facilita la navegación y compra.'
        : 'Clean and modern design that facilitates navigation and purchasing.'
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
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <span className="text-primary-foreground font-bold text-2xl">RW</span>
                </div>
              </div>
              
              <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Roswell Indumentaria
                </span>
              </h1>
              
              <p className="font-open-sans text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                {language === 'es' 
                  ? 'Catálogo online de indumentaria masculina con sistema de pedidos inteligente vía WhatsApp para una experiencia de compra moderna y conveniente.'
                  : 'Online menswear catalog with intelligent order system via WhatsApp for a modern and convenient shopping experience.'
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://roswell.com.ar', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  {language === 'es' ? 'Visitar Tienda' : 'Visit Store'}
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
                ? 'Transforma la forma en que tus clientes compran indumentaria online'
                : 'Transform how your customers buy clothing online'
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
                ? 'Tecnología innovadora diseñada para revolucionar el e-commerce de indumentaria'
                : 'Innovative technology designed to revolutionize clothing e-commerce'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                ? '¿Listo para revolucionar tu tienda online?' 
                : 'Ready to revolutionize your online store?'
              }
            </h2>
            <p className="font-open-sans text-xl text-muted-foreground mb-8">
              {language === 'es'
                ? 'Únete a las marcas que ya están transformando sus ventas con Roswell'
                : 'Join brands already transforming their sales with Roswell'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://roswell.com.ar', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                {language === 'es' ? 'Visitar Tienda Ahora' : 'Visit Store Now'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-open-sans font-semibold transition-all duration-300"
              >
                {language === 'es' ? 'Contactar para Desarrollo' : 'Contact for Development'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
