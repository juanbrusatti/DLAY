export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DLAY",
    "alternateName": "DLAY Software Development",
    "url": "https://dlay.com",
    "logo": "https://dlay.com/logo.png",
    "description": "Equipo de desarrolladores de software especializados en crear soluciones digitales innovadoras. Transformamos ideas en realidad con tecnología de vanguardia.",
    "founder": {
      "@type": "Organization",
      "name": "DLAY Team"
    },
    "foundingDate": "2024-01-15",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Argentina"
      },
      {
        "@type": "Country", 
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Spain"
      }
    ],
    "serviceType": "Software Development",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo de Software",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web",
            "description": "Creación de sitios web modernos y responsivos"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Aplicaciones Móviles",
            "description": "Desarrollo de aplicaciones móviles nativas e híbridas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Soluciones Digitales",
            "description": "Consultoría y desarrollo de soluciones a medida"
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
