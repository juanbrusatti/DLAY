"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "./language-toggle"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm border-b border-border/50'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <span className="text-primary-foreground font-bold text-lg">=D</span>
          </div>
          <span className="font-montserrat font-black text-xl text-foreground transition-all duration-300 group-hover:text-primary">DLAY</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans relative group"
          >
            {t('navigation.home')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans relative group"
          >
            {t('navigation.about')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans relative group"
          >
            {t('navigation.team')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans relative group"
          >
            {t('navigation.projects')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans relative group"
          >
            {t('navigation.contact')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/* Language Toggle, Theme Toggle & CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            {t('navigation.letsWorkTogether')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-2 duration-300">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans py-2 border-b border-border/50"
            >
              {t('navigation.home')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans py-2 border-b border-border/50"
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans py-2 border-b border-border/50"
            >
              {t('navigation.team')}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans py-2 border-b border-border/50"
            >
              {t('navigation.projects')}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-muted-foreground hover:text-foreground transition-all duration-300 font-open-sans py-2 border-b border-border/50"
            >
              {t('navigation.contact')}
            </button>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-open-sans font-semibold transition-all duration-300 hover:scale-105"
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
