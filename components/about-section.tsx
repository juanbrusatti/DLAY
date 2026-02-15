"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, Users, Target, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import AnimatedStory from "./animated-story"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
    },
    {
      icon: Target,
      title: t('about.values.practical.title'),
      description: t('about.values.practical.description'),
    },
  ]

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300">
                  {t('about.title')}
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <ScrollReveal delay={200} direction="left">
            <div className="mb-16">
              <AnimatedStory />
            </div>
          </ScrollReveal>

          {/* Values */}
          <ScrollReveal delay={400}>
            <div>
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('about.whatDrivesUs')}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <ScrollReveal key={index} delay={600 + index * 100} direction="scale">
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                      <CardContent className="p-6 relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex items-start space-x-4 relative z-10">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                              <value.icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-montserrat font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                              {value.title}
                            </h4>
                            <p className="font-open-sans text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
