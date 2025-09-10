"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, Users, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t('about.title')}
            </h2>
          </div>

          {/* Story */}
          <div className="mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">{t('about.ourStory')}</h3>
                    <div className="space-y-4 font-open-sans text-muted-foreground">
                      <p>{t('about.storyText1')}</p>
                      <p>{t('about.storyText2')}</p>
                      <p>{t('about.storyText3')}</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/team-of-young-developers-working-together-in-moder.jpg"
                      alt="DLAY team working together"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
              {t('about.whatDrivesUs')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-lg text-foreground mb-2">{value.title}</h4>
                        <p className="font-open-sans text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
