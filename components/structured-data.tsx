export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DLAY",
    "alternateName": ["DLAY Software Development", "DLAY Programadores Río Cuarto"],
    "url": "https://dlay.com",
    "logo": "https://dlay.com/logo.png",
    "description": "Equipo de programadores y desarrolladores de software en Río Cuarto, Córdoba. Especializados en desarrollo de aplicaciones web, móviles y soluciones digitales a medida para empresas y emprendimientos.",
    "founder": {
      "@type": "Organization",
      "name": "DLAY Team"
    },
    "foundingDate": "2024-01-15",
    "areaServed": [
      {
        "@type": "City",
        "name": "Río Cuarto"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Córdoba"
      },
      {
        "@type": "Country",
        "name": "Argentina"
      }
    ],
    "serviceType": ["Software Development", "Web Development", "Mobile App Development", "Programming Services"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Programación y Desarrollo de Software",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web",
            "description": "Creación de sitios web modernos y responsivos con las últimas tecnologías"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Aplicaciones Móviles",
            "description": "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Consultoría de Software",
            "description": "Asesoramiento y desarrollo de soluciones digitales a medida"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Programación a Medida",
            "description": "Desarrollo de software personalizado según las necesidades del cliente"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://twitter.com/dlay",
      "https://github.com/dlay",
      "https://linkedin.com/company/dlay"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
