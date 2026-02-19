import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Programación y Desarrollo de Software | DLAY Río Cuarto',
  description: 'DLAY - Empresa de software en Río Cuarto especializada en desarrollo web, aplicaciones móviles y soluciones digitales a medida. Servicios de programación para empresas.',
  keywords: [
    'servicios de programación',
    'desarrollo de software',
    'empresa de software Río Cuarto',
    'programadores Río Cuarto',
    'desarrollo web',
    'aplicaciones móviles',
    'consultoría software',
    'DLAY',
    'software a medida',
    'desarrollo de aplicaciones'
  ],
  openGraph: {
    title: 'Servicios de Programación | DLAY Río Cuarto',
    description: 'Servicios profesionales de desarrollo de software en Río Cuarto. Especializados en aplicaciones web, móviles y soluciones digitales a medida.',
    url: 'https://dlay.com/servicios',
    type: 'website',
  },
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-black text-4xl md:text-6xl text-foreground mb-6 text-center">
            Servicios de Programación y Desarrollo de Software
          </h1>
          
          <p className="font-open-sans text-xl text-muted-foreground mb-12 text-center">
            Como empresa de software en Río Cuarto, ofrecemos servicios completos de programación para transformar tus ideas en soluciones digitales innovadoras.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h2 className="font-semibold text-2xl mb-4">Desarrollo Web</h2>
              <p className="text-muted-foreground mb-4">
                Sitios web modernos y responsivos desarrollados por programadores profesionales en Río Cuarto.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Sitios web corporativos</li>
                <li>Aplicaciones web progresivas (PWA)</li>
                <li>E-commerce y plataformas online</li>
                <li>Sistemas de gestión web</li>
              </ul>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h2 className="font-semibold text-2xl mb-4">Aplicaciones moviles</h2>
              <p className="text-muted-foreground mb-4">
                Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Apps nativas para iOS y Android</li>
                <li>Aplicaciones híbridas multiplataforma</li>
                <li>Integración con APIs y servicios</li>
                <li>Mantenimiento y actualizaciones</li>
              </ul>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h2 className="font-semibold text-2xl mb-4">Consultoría de Software</h2>
              <p className="text-muted-foreground mb-4">
                Asesoramiento técnico y estratégico para tus proyectos de desarrollo de software.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Análisis y diseño de sistemas</li>
                <li>Selección de tecnologías</li>
                <li>Optimización de rendimiento</li>
                <li>Seguridad y mejores prácticas</li>
              </ul>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
              <h2 className="font-semibold text-2xl mb-4">Software a Medida</h2>
              <p className="text-muted-foreground mb-4">
                Desarrollo de software personalizado según las necesidades específicas de tu empresa.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Sistemas empresariales a medida</li>
                <li>Integración de sistemas existentes</li>
                <li>Automatización de procesos</li>
                <li>APIs y servicios web</li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-primary/10 rounded-lg p-8">
            <h2 className="font-semibold text-3xl mb-4">¿Por qué elegir a nuestros programadores?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-semibold text-xl mb-2">Experiencia Local</h3>
                <p className="text-muted-foreground">
                  Conocemos el mercado local y las necesidades específicas de las empresas en Río Cuarto y Córdoba.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Tecnología Actual</h3>
                <p className="text-muted-foreground">
                  Utilizamos las últimas tecnologías y mejores prácticas en desarrollo de software.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Soporte Continuo</h3>
                <p className="text-muted-foreground">
                  Acompañamiento técnico durante todo el ciclo de vida de tu software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
