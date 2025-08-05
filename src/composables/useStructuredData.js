import { useI18n } from 'vue-i18n'

export function useStructuredData() {
  const { t } = useI18n()

  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kelepar GmbH",
    "alternateName": "Kelepar",
    "url": "https://kelepar.com",
    "logo": "https://kelepar.com/logo.png",
    "description": "Swiss IT consulting company specializing in AI solutions, software development, and digital transformation. Swiss Made. Trust. Innovation.",
    "slogan": "Swiss Made. Trust. Innovation.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Museggstrasse 17",
      "addressLocality": "Lucerne",
      "addressRegion": "LU",
      "postalCode": "6004",
      "addressCountry": "CH"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@kelepar.com",
        "availableLanguage": ["German", "English"]
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Switzerland"
    },
    "sameAs": [
      "https://www.linkedin.com/company/kelepar"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Software Development",
      "IT Consulting",
      "DevOps",
      "Cloud Computing",
      "Digital Transformation",
      "Data Protection"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting",
            "description": "Strategic consulting and roadmap development for IT transformation and digitalization"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": "Artificial Intelligence and Machine Learning for process optimization and intelligent automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Software Development",
            "description": "Custom software solutions, web apps and mobile applications using the latest standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps & Cloud",
            "description": "Automation, CI/CD pipelines and cloud infrastructure for efficient software development"
          }
        }
      ]
    }
  })

  const getWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kelepar GmbH - Swiss IT Solutions",
    "url": "https://kelepar.com",
    "description": "Swiss IT consulting company - Swiss Made. Trust. Innovation. Your Swiss partner for IT solutions with highest data protection standards.",
    "inLanguage": ["de-CH", "en-US"],
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Kelepar GmbH"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://kelepar.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  })

  const getServiceSchema = (serviceName) => {
    const services = {
      'it_consulting': {
        name: 'IT Consulting',
        description: 'Strategic consulting and roadmap development for your IT transformation and digitalization.',
        serviceType: 'IT Consulting'
      },
      'ai_solutions': {
        name: 'AI Solutions', 
        description: 'Artificial Intelligence and Machine Learning for process optimization and intelligent automation.',
        serviceType: 'Artificial Intelligence Consulting'
      },
      'software_development': {
        name: 'Software Development',
        description: 'Custom software solutions, web apps and mobile applications using the latest standards.',
        serviceType: 'Software Development'
      },
      'devops': {
        name: 'DevOps & Cloud',
        description: 'Automation, CI/CD pipelines and cloud infrastructure for efficient software development.',
        serviceType: 'DevOps Consulting'
      },
      'data_protection': {
        name: 'Data Protection',
        description: 'Your data stays secure – storage and processing exclusively in Switzerland.',
        serviceType: 'Data Protection Consulting'
      }
    }

    const service = services[serviceName]
    if (!service) return null

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "serviceType": service.serviceType,
      "provider": {
        "@type": "Organization",
        "name": "Kelepar GmbH",
        "url": "https://kelepar.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Switzerland"
      },
      "availableLanguage": ["German", "English"]
    }
  }

  const getPersonSchema = (personKey) => {
    const people = {
      'lukas': {
        name: 'Lukas Unterschütz',
        jobTitle: 'CEO & Co-Founder',
        description: 'Entrepreneur, analyst and investor with a passion for IT consulting and digitalization. Brings business and technology together.',
        linkedin: 'https://www.linkedin.com/in/lukas-untersch%C3%BCtz/'
      },
      'lars': {
        name: 'Lars Stalder', 
        jobTitle: 'CTO & Co-Founder',
        description: 'Software engineer with focus on innovative solutions and secure IT. Expert in DevOps and cloud architectures.',
        linkedin: 'https://www.linkedin.com/in/lars-stalder/'
      },
      'luca': {
        name: 'Luca Ehrbar',
        jobTitle: 'Co-Founder',
        description: 'Strategic thinker with focus on innovation and business development. Expert in project management and customer relations.',
        linkedin: 'https://www.linkedin.com/in/luca-ehrbar-80861a1b8/'
      }
    }

    const person = people[personKey]
    if (!person) return null

    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": person.name,
      "jobTitle": person.jobTitle,
      "description": person.description,
      "worksFor": {
        "@type": "Organization",
        "name": "Kelepar GmbH",
        "url": "https://kelepar.com"
      },
      "sameAs": [person.linkedin],
      "knowsAbout": [
        "IT Consulting",
        "Software Development", 
        "Artificial Intelligence",
        "Digital Transformation"
      ]
    }
  }

  const getFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Kelepar offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kelepar offers IT consulting, AI solutions, software development, DevOps & cloud services, and data protection consulting. All services follow Swiss data protection standards."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Kelepar located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kelepar GmbH is located in Lucerne, Switzerland at Museggstrasse 17, 6004 Lucerne."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Kelepar different?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Kelepar is Swiss Made with focus on trust and innovation. We ensure highest data protection standards with all data processing exclusively in Switzerland."
        }
      }
    ]
  })

  const getBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })

  const injectStructuredData = (schema, id = null) => {
    if (typeof window === 'undefined') return

    const scriptId = id || `structured-data-${Date.now()}`
    
    // Remove existing script if updating
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)

    return scriptId
  }

  return {
    getOrganizationSchema,
    getWebsiteSchema,
    getServiceSchema,
    getPersonSchema,
    getFAQSchema,
    getBreadcrumbSchema,
    injectStructuredData
  }
}