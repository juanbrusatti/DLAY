"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "./language-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-montserrat font-black text-xl text-foreground">DLAY</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-muted-foreground hover:text-foreground transition-colors font-open-sans"
          >
            {t('navigation.home')}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors font-open-sans"
          >
            {t('navigation.about')}
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-muted-foreground hover:text-foreground transition-colors font-open-sans"
          >
            {t('navigation.team')}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground transition-colors font-open-sans"
          >
            {t('navigation.projects')}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors font-open-sans"
          >
            {t('navigation.contact')}
          </button>
        </nav>

        {/* Language Toggle & CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
               <Button
                 onClick={() => scrollToSection("contact")}
                 className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold"
               >
                 {t('navigation.letsWorkTogether')}
               </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors font-open-sans"
            >
              {t('navigation.home')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors font-open-sans"
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors font-open-sans"
            >
              {t('navigation.team')}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors font-open-sans"
            >
              {t('navigation.projects')}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors font-open-sans"
            >
              {t('navigation.contact')}
            </button>
            <div className="flex items-center justify-between pt-2">
              <LanguageToggle />
               <Button
                 onClick={() => scrollToSection("contact")}
                 className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold"
               >
                 {t('navigation.letsWorkTogether')}
               </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
