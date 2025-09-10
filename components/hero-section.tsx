"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()
  
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-accent/20 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-primary/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-accent/20 rounded-lg -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Code2 className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="font-open-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold px-8 py-3 text-lg group"
            >
              {t('hero.startProject')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-open-sans font-semibold px-8 py-3 text-lg"
            >
              {t('hero.viewWork')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
