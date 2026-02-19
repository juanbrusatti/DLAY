"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traducciones
const translations = {
  en: {
    'metadata.title': 'DLAY - Programming Team',
    'metadata.description': 'We are a team of passionate programmers who transform ideas into software',
    'hero.title': 'We are a team of passionate programmers who transform ideas into software',
    'hero.subtitle': 'From concept to deployment, we bring your digital vision to life with cutting-edge technology and innovative solutions.',
    'hero.startProject': 'Start your project',
    'hero.viewWork': 'View our work',
    'about.title': 'About DLAY',
    'about.ourStory': 'Our story',
    'about.storyText1': 'DLAY was founded by a group of passionate computer science students who shared a common vision: to bridge the gap between innovative ideas and practical software solutions.',
    'about.storyText2': 'What started as late-night coding sessions in our university lab has evolved into a dedicated team committed to transforming how businesses approach technology.',
    'about.storyText3': 'We believe that great software isn\'t just about clean code—it\'s about understanding our clients\' needs and delivering solutions that make a real difference.',
    'about.whatDrivesUs': 'What drives us',
    'about.values.trust.title': 'Trust & commitment',
    'about.values.trust.description': 'We build lasting relationships with our clients through transparency, reliability, and unwavering dedication to their success.',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.description': 'We stay at the forefront of technology, constantly learning and implementing cutting-edge solutions to solve complex problems.',
    'about.values.collaboration.title': 'Collaboration',
    'about.values.collaboration.description': 'We believe in the power of teamwork, both within our team and with our clients, to create exceptional results.',
    'about.values.practical.title': 'Practical solutions',
    'about.values.practical.description': 'We focus on delivering practical, scalable solutions that provide real value and drive meaningful business outcomes.',
    'about.learnMore': 'Learn more about DLAY',
    'about.learnMoreSubtitle': 'Discover our story, team and fun moments',
    'team.title': 'Meet our team',
    'team.subtitle': 'The passionate developers behind DLAY',
    'team.members.juan.description': 'Computer Science student specializing in frontend design, creating beautiful and responsive user interfaces with React and modern web technologies.',
    'team.members.jeremias.description': 'Computer Science student focused on backend development, specializing in scalable server architectures and database optimization.',
    'team.members.mateo.description': 'Computer Science student with full stack experience, connecting frontend and backend to create complete and optimized user experiences.',
    'team.members.maximo.description': 'Computer Science student full stack, combining frontend and backend development with focus on comprehensive and scalable solutions.',
    'projects.title': 'Our Projects',
    'projects.subtitle': 'From concept to deployment, here\'s a showcase of the innovative solutions we\'ve built for our clients.',
    'projects.completed': 'Completed projects',
    'projects.inProgress': 'In progress',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.expected': 'Expected',
    'contact.title': 'Let\'s connect',
    'contact.subtitle': 'Do you want to take your idea to the next level? Let\'s talk.',
    'contact.subtitle2': 'We\'re excited to hear about your project and explore how we can bring your vision to life.',
    'contact.formTitle': 'Send us a message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'Your email',
    'contact.messagePlaceholder': 'Tell us about your project...',
    'contact.sendMessage': 'Send message',
    'contact.emailUs': 'Email us',
    'contact.emailDescription': 'Get in touch via email for detailed discussions',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsappDescription': 'Quick questions? Message us directly',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDescription': 'Connect with us professionally',
    'footer.description': 'We are a team of passionate programmers who transform ideas into software. Let\'s build something amazing together.',
    'footer.quickLinks': 'Quick links',
    'footer.contact': 'Contact',
    'footer.getInTouch': 'Get in touch',
    'footer.madeWith': 'Made with',
    'footer.byTeam': 'by the DLAY team',
    'footer.copyright': '© {year} DLAY. All rights reserved.',
    'navigation.home': 'Home',
    'navigation.about': 'About',
    'navigation.team': 'Team',
    'navigation.projects': 'Projects',
    'navigation.contact': 'Contact',
    'navigation.letsWorkTogether': "Let's work together",
    'stats.title': 'Our Achievements',
    'stats.subtitle': 'Numbers that demonstrate our commitment and experience',
    'stats.projectsCompleted': 'Projects completed',
    'stats.satisfiedClients': 'Satisfied clients',
    'stats.continuousSupport': '24/7 Support',
    'stats.yearsExperience': 'Years of experience'
  },
  es: {
    'metadata.title': 'DLAY - Equipo de Programación',
    'metadata.description': 'Somos un equipo de programadores apasionados que transformamos ideas en software',
    'hero.title': 'Somos un equipo de programadores apasionados que transformamos ideas en software',
    'hero.subtitle': 'Desde el concepto hasta el despliegue, damos vida a tu visión digital con tecnología de vanguardia y soluciones innovadoras.',
    'hero.startProject': 'Iniciar tu proyecto',
    'hero.viewWork': 'Ver nuestro trabajo',
    'about.title': 'Acerca de DLAY',
    'about.ourStory': 'Nuestra historia',
    'about.storyText1': 'DLAY fue fundado por un grupo de estudiantes apasionados de ciencias de la computación que compartían una visión común: cerrar la brecha entre ideas innovadoras y soluciones de software prácticas.',
    'about.storyText2': 'Lo que comenzó como sesiones de programación nocturnas en nuestro laboratorio universitario ha evolucionado hacia un equipo dedicado comprometido con transformar cómo las empresas abordan la tecnología.',
    'about.storyText3': 'Creemos que el gran software no se trata solo de código limpio, se trata de entender las necesidades de nuestros clientes y entregar soluciones que marquen una diferencia real.',
    'about.whatDrivesUs': 'Lo que nos impulsa',
    'about.values.trust.title': 'Confianza y compromiso',
    'about.values.trust.description': 'Construimos relaciones duraderas con nuestros clientes a través de la transparencia, confiabilidad y dedicación inquebrantable a su éxito.',
    'about.values.innovation.title': 'Innovación',
    'about.values.innovation.description': 'Nos mantenemos a la vanguardia de la tecnología, aprendiendo constantemente e implementando soluciones de vanguardia para resolver problemas complejos.',
    'about.values.collaboration.title': 'Colaboración',
    'about.values.collaboration.description': 'Creemos en el poder del trabajo en equipo, tanto dentro de nuestro equipo como con nuestros clientes, para crear resultados excepcionales.',
    'about.values.practical.title': 'Soluciones prácticas',
    'about.values.practical.description': 'Nos enfocamos en entregar soluciones prácticas y escalables que proporcionen valor real e impulsen resultados comerciales significativos.',
    'about.learnMore': 'Conocer más a DLAY',
    'about.learnMoreSubtitle': 'Descubre nuestra historia, equipo y momentos divertidos',
    'team.title': 'Conoce nuestro equipo',
    'team.subtitle': 'Los desarrolladores apasionados detrás de DLAY',
    'team.members.juan.description': 'Estudiante de Ciencias de la Computación especializado en diseño frontend, creando interfaces de usuario hermosas y responsivas con React y tecnologías web modernas.',
    'team.members.jeremias.description': 'Estudiante de Ciencias de la Computación enfocado en desarrollo backend, especializado en arquitecturas de servidor escalables y optimización de bases de datos.',
    'team.members.mateo.description': 'Estudiante de Ciencias de la Computación con experiencia full stack, conectando frontend y backend para crear experiencias de usuario completas y optimizadas.',
    'team.members.maximo.description': 'Estudiante de Ciencias de la Computación full stack, combinando desarrollo frontend y backend con enfoque en soluciones integrales y escalables.',
    'projects.title': 'Nuestros proyectos',
    'projects.subtitle': 'Desde el concepto hasta el despliegue, aquí tienes una muestra de las soluciones innovadoras que hemos construido para nuestros clientes.',
    'projects.completed': 'Proyectos completados',
    'projects.inProgress': 'En progreso',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.expected': 'Esperado',
    'contact.title': 'Conectemos',
    'contact.subtitle': '¿Quieres llevar tu idea al siguiente nivel? Hablemos.',
    'contact.subtitle2': 'Estamos emocionados de escuchar sobre tu proyecto y explorar cómo podemos dar vida a tu visión.',
    'contact.formTitle': 'Envíanos un mensaje',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'Tu email',
    'contact.messagePlaceholder': 'Cuéntanos sobre tu proyecto...',
    'contact.sendMessage': 'Enviar mensaje',
    'contact.emailUs': 'Escríbenos',
    'contact.emailDescription': 'Ponte en contacto por email para discusiones detalladas',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsappDescription': '¿Preguntas rápidas? Escríbenos directamente',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDescription': 'Conéctate con nosotros profesionalmente',
    'footer.description': 'Somos un equipo de programadores apasionados que transformamos ideas en software. Construyamos algo increíble juntos.',
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.contact': 'Contacto',
    'footer.getInTouch': 'Ponte en contacto',
    'footer.madeWith': 'Hecho con',
    'footer.byTeam': 'por el equipo DLAY',
    'footer.copyright': '© {year} DLAY. Todos los derechos reservados.',
    'navigation.home': 'Inicio',
    'navigation.about': 'Acerca de',
    'navigation.team': 'Equipo',
    'navigation.projects': 'Proyectos',
    'navigation.contact': 'Contacto',
    'navigation.letsWorkTogether': 'Trabajemos juntos',
    'stats.title': 'Nuestros logros',
    'stats.subtitle': 'Números que demuestran nuestro compromiso y experiencia',
    'stats.projectsCompleted': 'Proyectos completados',
    'stats.satisfiedClients': 'Clientes satisfechos',
    'stats.continuousSupport': 'Soporte continuo',
    'stats.yearsExperience': 'Años de experiencia'
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    // Cargar idioma guardado del localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Guardar idioma en localStorage
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string): string => {
    const direct = (translations[language] as Record<string, unknown>)[key]
    if (typeof direct === 'string') {
      return direct.replace('{year}', new Date().getFullYear().toString())
    }

    const parts = key.split('.')
    let current: unknown = translations[language]

    for (const part of parts) {
      if (current && typeof current === 'object' && part in (current as Record<string, unknown>)) {
        current = (current as Record<string, unknown>)[part]
      } else {
        return key
      }
    }

    const result = typeof current === 'string' ? current : key
    return result.replace('{year}', new Date().getFullYear().toString())
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
