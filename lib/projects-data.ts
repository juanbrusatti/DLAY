export interface Project {
  id: string
  name: string
  client: string
  clientUrl?: string
  description: string
  descriptionEn: string
  image: string
  technologies: string[]
  landingUrl?: string
  demoUrl?: string
  githubUrl?: string
}

export const projectsData = {
  completed: [
    {
      id: "acma-ar-aberturas",
      name: "Acma AR Aberturas",
      client: "AR Aberturas",
      clientUrl: "https://araberturas.com",
      description: "ACMA es un software avanzado para la industria del vidrio que permite generar presupuestos precisos, gestionar stock de planchas y sobrantes, e integrar un algoritmo de optimización de cortes, reduciendo costos de producción y maximizando la eficiencia operativa de cada proyecto.",
      descriptionEn: "ACMA is an advanced software for glass industry that enables precise budget generation, manages sheet and scrap inventory, and integrates a cutting optimization algorithm, reducing production costs and maximizing operational efficiency for each project.",
      image: "/captura-acma.png",
      technologies: ["Python", "Ruby", "JavaScript", "Tailwind CSS", "PostgreSQL"],
      landingUrl: "/acma-ar-aberturas",
      githubUrl: "https://github.com/juanbrusatti/acma"
    },
    {
      id: "aberturito",
      name: "Aberturito",
      client: "AR Aberturas",
      clientUrl: "#",
      description: "Sistema integral de gestión interna para AR Aberturas que conecta todos los departamentos (administración, fábrica, colocadores, ventas y marketing) en una sola plataforma. Facilita la comunicación, el seguimiento de órdenes y la gestión de proyectos, mejorando la eficiencia operativa y la colaboración entre equipos.",
      descriptionEn: "Comprehensive internal management system for AR Aberturas that connects all departments (administration, factory, installers, sales, and marketing) in a single platform. Streamlines communication, order tracking, and project management, enhancing operational efficiency and team collaboration.",
      image: "/Aberturito.png",
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Firebase", "SQL"],
      landingUrl: "/aberturito",
      demoUrl: "https://v0-responsive-web-demo-5o9ovubli.vercel.app",
      githubUrl: "https://github.com/CornejoMateo/Aberturito"
    },
    {
      id: "ecotrack",
      name: "Roswell Indumentaria",
      client: "roswell.com.ar",
      clientUrl: "https://roswell.com.ar",
      description: "Sitio de catálogo de indumentaria masculina con carrito que envía pedidos por WhatsApp con mensajes predefinidos según los productos seleccionados.",
      descriptionEn: "Menswear catalog website with a cart that sends orders via WhatsApp using predefined messages based on selected items.",
      image: "/roswell.png",
      technologies: ["Supabase", "Tailwind CSS", "Next.js"],
      landingUrl: "/roswell",
      demoUrl: "https://roswell.com.ar",
      githubUrl: "https://github.com/juanbrusatti/roswell"
    }
  ],
  inProgress: [
    {
      id: "applert",
      name: "Applert",
      client: "Vlan",
      description: "APPLERT es una aplicación móvil de seguridad ciudadana que permite enviar alertas de emergencia con un solo toque a entidades de respuesta rápida como policía, bomberos y servicios médicos. La plataforma transmite la ubicación en tiempo real del usuario y mantiene un canal de comunicación directo con las autoridades, además de incluir una sección de noticias donde las entidades publican información relevante sobre eventos y situaciones en la ciudad.",
      descriptionEn: "APPLERT is a citizen security mobile application that allows sending emergency alerts with a single touch to rapid response entities such as police, firefighters, and medical services. The platform transmits user's real-time location and maintains direct communication with authorities, plus includes a news section where entities publish relevant information about events and situations in the city.",
      image: "/e-learning-platform-with-course-interface.jpg",
      technologies: ["React Native", "JavaScript", "Tailwind CSS", "Firebase"],
      landingUrl: "/applert",
      demoUrl: "#",
      githubUrl: "https://github.com/juanbrusatti/municipalidad-app"
    },
    {
      id: "applert-web",
      name: "Applert Web",
      client: "Vlan",
      description: "Sitio web informativo para Applert que explica qué es el servicio, cómo funciona, en qué sectores tiene soporte, cobertura actual y cómo implementarlo en municipios. La web sirve como punto de información para ciudadanos y autoridades interesadas en adoptar la tecnología de respuesta a emergencias.",
      descriptionEn: "Informational website for Applert that explains what the service is, how it works, which sectors it supports, current coverage, and how to implement it in municipalities. The website serves as an information point for citizens and authorities interested in adopting emergency response technology.",
      image: "/applert-web.png",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      landingUrl: "https://applert-web-site-s3zk.vercel.app/",
      demoUrl: "https://applert-web-site-s3zk.vercel.app/",
      githubUrl: "#"
    }
  ]
}
