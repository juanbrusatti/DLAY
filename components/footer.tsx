"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-montserrat font-black text-xl text-foreground">DLAY</span>
            </div>
            <p className="font-open-sans text-muted-foreground mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@dlay.dev"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email DLAY"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/dlay-dev"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="DLAY GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/company/dlay-dev"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="DLAY LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 font-open-sans text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.team')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.projects')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-foreground mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 font-open-sans text-sm">
              <li>
                <a href="mailto:hello@dlay.dev" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@dlay.dev
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.getInTouch')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-open-sans text-sm text-muted-foreground flex items-center justify-center">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500 mx-1" /> {t('footer.byTeam')}
          </p>
          <p className="font-open-sans text-xs text-muted-foreground mt-2">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
