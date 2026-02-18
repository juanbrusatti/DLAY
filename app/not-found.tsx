"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, Coffee, Code2, Sparkles, Ghost, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import CustomCursor from "@/components/custom-cursor"
import ParallaxSection from "@/components/parallax-section"

export default function NotFound() {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random floating elements
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setFloatingElements(elements)

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const errorMessage = "404: Ni nuestros programadores la encontraron 🤷‍♂️"

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 relative overflow-hidden">
      <CustomCursor />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <ParallaxSection speed={0.8} direction="up" className="absolute top-0 left-0 w-96 h-96">
          <div className="w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        </ParallaxSection>
        <ParallaxSection speed={1.0} direction="down" className="absolute bottom-0 right-0 w-96 h-96">
          <div className="w-full h-full bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </ParallaxSection>
        
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
            }}
          >
            <div className="w-16 h-16 border border-primary/10 rounded-lg backdrop-blur-sm bg-primary/2 flex items-center justify-center">
              {element.id % 4 === 0 && <Coffee className="w-6 h-6 text-primary/20" />}
              {element.id % 4 === 1 && <Code2 className="w-6 h-6 text-primary/20" />}
              {element.id % 4 === 2 && <Sparkles className="w-6 h-6 text-primary/20" />}
              {element.id % 4 === 3 && <Zap className="w-6 h-6 text-primary/20" />}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-8 relative">
            <div className="text-9xl font-montserrat font-black text-primary/20 animate-bounce">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Ghost className="w-24 h-24 text-primary/40 animate-pulse" />
            </div>
          </div>

          {/* Error Message Card */}
          <Card className="bg-background/50 backdrop-blur-sm border-primary/20 mb-8 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
                {errorMessage}
              </h1>
              <p className="font-open-sans text-lg text-muted-foreground mb-6">
                Pero no te preocupes, nuestros programadores ya están trabajando en encontrar la pagina que buscas
                <br />
                (probablemente tomando unos mates mientras tanto ☕).
              </p>
              
              {/* Fun Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">∞</div>
                  <div className="text-sm text-muted-foreground">Mates consumidos</div>
                </div>
                <div className="bg-accent/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-1">404</div>
                  <div className="text-sm text-muted-foreground">Páginas perdidas</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">Tranquilo</div>
                  <div className="text-sm text-muted-foreground">Esto lo resolvemos</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => router.push('/')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold px-8 py-3 text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center">
                <Home className="mr-2 w-5 h-5" />
                Volver al Inicio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="font-open-sans font-semibold px-8 py-3 text-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm"
            >
              <Search className="mr-2 w-5 h-5" />
              Buscar en otro lugar
            </Button>
          </div>

          {/* Fun Footer Message */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-open-sans">
              Mientras tanto, ¿qué tal si exploras nuestros proyectos de desarrollo de software?
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
