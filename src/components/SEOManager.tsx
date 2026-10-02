import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles';
import { STEM_KITS, SCHOOL_PACK_OFFERING } from '../data/stemKits';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  schema?: Record<string, any>;
  image?: string;
}

const DEFAULT_SEO: SEOConfig = {
  title: "Kone Kids | Playful AI & Coding STEM Hub",
  description: "Empowering kids aged 5-17 to learn coding, robotics, and artificial intelligence through hands-on gamified missions.",
  keywords: "Kone Kids, child coding, STEM for kids, kids AI school, robotics for kids, Accra coding classes",
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kone Kids Hub",
    "url": "https://kids.koneacademy.io/",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Kone Academy",
      "url": "https://www.koneacademy.io/"
    }
  }
};

const ROUTE_SEO_MAP: Record<string, SEOConfig> = {
  '/': DEFAULT_SEO,
  '/class-login': {
    title: "Student Class Login | Mission Map - Kone Kids",
    description: "Log in to your student account at Kone Kids. Connect with your class, track your badges, and continue your programming missions.",
    keywords: "student login, kids coding login, classroom tracker, student dashboard",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kids.koneacademy.io/" },
        { "@type": "ListItem", "position": 2, "name": "Class Login", "item": "https://kids.koneacademy.io/class-login/" }
      ]
    }
  },
  '/teacher-dashboard': {
    title: "Teacher & School Dashboard | Classroom Analytics - Kone Kids",
    description: "Classroom analytics, assignment manager, and student progress oversight for STEM educators and schools.",
    keywords: "teacher dashboard, classroom coding tracker, STEM school analytics, educator portal",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kids.koneacademy.io/" },
        { "@type": "ListItem", "position": 2, "name": "Teacher Dashboard", "item": "https://kids.koneacademy.io/teacher-dashboard/" }
      ]
    }
  },
  '/blog': {
    title: "Parent Hub & STEM Insights | Kone Kids Blog",
    description: "Research-backed guides, EdTech articles, and parenting insights for youth tech education. Learn how to foster STEM literacy at home.",
    keywords: "parent STEM guides, raise tech kids, EdTech insights, coding education parents",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kids.koneacademy.io/" },
        { "@type": "ListItem", "position": 2, "name": "Parent Hub & Articles", "item": "https://kids.koneacademy.io/blog/" }
      ]
    }
  },
  '/coding': {
    title: "Coding Lab - Visual Block & Python Missions | Kone Kids",
    description: "Interactive learning pathway teaching block-based coding, visual algorithms, HTML/CSS, and Python to young coders.",
    keywords: "coding for kids, learn Scratch, Scratch games, kids Python course, Blockly missions",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kids.koneacademy.io/" },
        { "@type": "ListItem", "position": 2, "name": "Coding Lab", "item": "https://kids.koneacademy.io/coding/" }
      ]
    }
  },
  '/robotics': {
    title: "Robotics Lab - Hardware & Microcontroller Sandbox | Kone Kids",
    description: "Virtual and hands-on robotics labs teaching microcontrollers, circuit design, telemetry, and Arduino coding.",
    keywords: "robotics lab, kids Arduino, electronics for kids, virtual robots simulation, STEM hardware",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kids.koneacademy.io/" },
        { "@type": "ListItem", "position": 2, "name": "Robotics Lab", "item": "https://kids.koneacademy.io/robotics/" }
      ]
    }
  },
  '/ai': {
    title: "AI Studio - Youth Machine Learning & AI | Kone Kids",
    description: "Learn how artificial intelligence works by training custom models, classifying images, and coding neural networks.",
    keywords: "AI for kids, train machine learning, kids neural network, AI foundation school, prompt engineering",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kids.koneacademy.io/" },
        { "@type": "ListItem", "position": 2, "name": "AI Studio", "item": "https://kids.koneacademy.io/ai/" }
      ]
    }
  },
  '/kits': {
    title: "STEM & Science Sets for Kids | Ghana GES Curriculum & Robotics - Kone Kids",
    description: "Hands-on Ghana GES / NaCCA Science Sets (Basic 4.1 to 6.3) and child-safe robotics rovers with online mission guides. Fast doorstep delivery across Accra and Ghana.",
    keywords: "Ghana science sets, GES science kit Basic 4 5 6, NaCCA STEM kits, robotics kits for kids Ghana, STEM kits Accra, buy children coding kit, microbit robot kit",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Kone Kids STEM Hardware & Ghana GES Science Sets",
      "itemListElement": [
        {
          "@type": "Product",
          "position": 1,
          "name": "Science Set 4.1: Plants & Food Production (Ghana GES)",
          "description": "Ghana NaCCA B4.1 aligned hands-on experiments for plant parts, photosynthesis, and food production.",
          "offers": {
            "@type": "Offer",
            "price": "125.00",
            "priceCurrency": "GHS",
            "availability": "https://schema.org/InStock",
            "url": "https://kids.koneacademy.io/kits/"
          }
        },
        {
          "@type": "Product",
          "position": 2,
          "name": "Science Set 5.1: Cells, Water & Matter (Ghana GES)",
          "description": "Ghana NaCCA B5.1 aligned hands-on experiments for animal cells, water purification, and states of matter.",
          "offers": {
            "@type": "Offer",
            "price": "135.00",
            "priceCurrency": "GHS",
            "availability": "https://schema.org/InStock",
            "url": "https://kids.koneacademy.io/kits/"
          }
        },
        {
          "@type": "Product",
          "position": 3,
          "name": "Science Set 6.1: Human Body & Ecosystems (Ghana GES)",
          "description": "Ghana NaCCA B6.1 aligned hands-on experiments for human systems, nutrition, and food chains.",
          "offers": {
            "@type": "Offer",
            "price": "145.00",
            "priceCurrency": "GHS",
            "availability": "https://schema.org/InStock",
            "url": "https://kids.koneacademy.io/kits/"
          }
        },
        {
          "@type": "Product",
          "position": 4,
          "name": "Kone Junior Inventor Snap Circuit Kit",
          "description": "Snap-together visual circuitry, sound buzzers, and multi-color lights for early STEM thinkers.",
          "offers": {
            "@type": "Offer",
            "price": "280.00",
            "priceCurrency": "GHS",
            "availability": "https://schema.org/InStock",
            "url": "https://kids.koneacademy.io/kits/"
          }
        },
        {
          "@type": "Product",
          "position": 5,
          "name": "Kone Explorer 2WD Autonomous Robotics Rover",
          "description": "Assemble, wire, and code an autonomous obstacle-avoiding smart rover with ultrasonic eyes.",
          "offers": {
            "@type": "Offer",
            "price": "460.00",
            "priceCurrency": "GHS",
            "availability": "https://schema.org/InStock",
            "url": "https://kids.koneacademy.io/kits/"
          }
        },
        {
          "@type": "Product",
          "position": 6,
          "name": "Kone IoT Smart Greenhouse & Farm Telemetry Kit",
          "description": "Connect real soil probes, humidity sensors, and automatic water pumps to cloud Wi-Fi dashboards.",
          "offers": {
            "@type": "Offer",
            "price": "520.00",
            "priceCurrency": "GHS",
            "availability": "https://schema.org/InStock",
            "url": "https://kids.koneacademy.io/kits/"
          }
        },
        {
          "@type": "Product",
          "position": 7,
          "name": "Kone AI Vision & Voice Companion Kit",
          "description": "Train computer vision models to recognize gestures, faces, and voice commands on a moving robot head.",
          "offers": {
            "@type": "Offer",
            "price": "680.00",
            "priceCurrency": "GHS",
            "availability": "https://schema.org/InStock",
            "url": "https://kids.koneacademy.io/kits/"
          }
        }
      ]
    },
    image: "https://kids.koneacademy.io/images/kits/explorer-robotics-rover.jpg"
  },
  '/stem-kits': {
    title: "STEM & Science Sets for Kids | Ghana GES Curriculum & Robotics - Kone Kids",
    description: "Hands-on Ghana GES / NaCCA Science Sets (Basic 4.1 to 6.3) and child-safe robotics rovers with online mission guides. Fast doorstep delivery across Accra and Ghana.",
    keywords: "Ghana science sets, GES science kit Basic 4 5 6, NaCCA STEM kits, robotics kits for kids Ghana, STEM kits Accra, buy children coding kit, microbit robot kit",
    image: "https://kids.koneacademy.io/images/kits/explorer-robotics-rover.jpg"
  },
  '/author/philip-hotor': {
    title: "Philip Hotor | Founder & Head of Engineering - Kone Academy",
    description: "Biography, research insights, and STEM publications by Philip Hotor, Founder & Head of Engineering at Kone Academy and Kone Kids.",
    keywords: "Philip Hotor, Philip Kone, Kone Academy founder, software engineering educator, STEM Africa, kids coding founder",
    image: "https://kids.koneacademy.io/author-philip.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Philip Hotor",
        "alternateName": "Philip Kone",
        "jobTitle": "Founder & Head of Engineering",
        "worksFor": {
          "@type": "Organization",
          "name": "Kone Academy",
          "url": "https://www.koneacademy.io/"
        },
        "image": "https://kids.koneacademy.io/author-philip.jpg",
        "url": "https://www.linkedin.com/in/philip-kone/",
        "sameAs": [
          "https://www.linkedin.com/in/philip-kone/",
          "https://www.koneacademy.io",
          "https://tech.koneacademy.io"
        ]
      }
    }
  },
  '/author/philip-kone': {
    title: "Philip Hotor | Founder & Head of Engineering - Kone Academy",
    description: "Biography, research insights, and STEM publications by Philip Hotor, Founder & Head of Engineering at Kone Academy and Kone Kids.",
    keywords: "Philip Hotor, Philip Kone, Kone Academy founder, software engineering educator",
    image: "https://kids.koneacademy.io/author-philip.jpg"
  },
  '/author': {
    title: "Philip Hotor | Founder & Head of Engineering - Kone Academy",
    description: "Biography, research insights, and STEM publications by Philip Hotor, Founder & Head of Engineering at Kone Academy and Kone Kids.",
    keywords: "Philip Hotor, Philip Kone, Kone Academy founder, software engineering educator",
    image: "https://kids.koneacademy.io/author-philip.jpg"
  }
};

export const SEOManager: React.FC = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    // Helper to set/update meta tag content
    const updateMetaTag = (name: string, content: string, isProperty: boolean = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 1. Identify active configuration
    let activeSEO = DEFAULT_SEO;
    const path = location.pathname;

    // Handle direct static matches
    if (ROUTE_SEO_MAP[path]) {
      activeSEO = ROUTE_SEO_MAP[path];
    }
    // Handle dynamic kit routes: /kits/:slug or /stem-kits/:slug
    else if (path.startsWith('/kits/') || path.startsWith('/stem-kits/')) {
      const kitSlug = path.replace(/^\/(kits|stem-kits)\//, '').replace(/\/$/, '');
      const kit = STEM_KITS.find(k => k.slug === kitSlug || k.id === kitSlug);
      if (kit) {
        const fullImg = kit.image.startsWith('http') ? kit.image : `https://kids.koneacademy.io${kit.image}`;
        activeSEO = {
          title: `${kit.title} | Kone Kids STEM Hardware`,
          description: `${kit.tagline} Designed for ${kit.ageRange}. Hands-on STEM hardware with video guides and syllabus alignment. Available in Ghana.`,
          keywords: `${kit.title}, ${kit.category} kit, STEM kits Ghana, ${kit.ageRange}, kids robotics, coding hardware`,
          image: fullImg,
          schema: {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": kit.title,
            "image": [fullImg],
            "description": kit.tagline || kit.overview,
            "brand": {
              "@type": "Brand",
              "name": "Kone Kids"
            },
            "offers": {
              "@type": "Offer",
              "price": kit.priceGHS.toFixed(2),
              "priceCurrency": "GHS",
              "availability": "https://schema.org/InStock",
              "url": `https://kids.koneacademy.io/kits/${kit.slug}/`
            }
          }
        };
      } else if (kitSlug === 'school-stem-pack' || kitSlug === 'school-pack') {
        const schoolImg = `https://kids.koneacademy.io${SCHOOL_PACK_OFFERING.image}`;
        activeSEO = {
          title: `${SCHOOL_PACK_OFFERING.title} | Kone Kids`,
          description: SCHOOL_PACK_OFFERING.subtitle,
          keywords: "school STEM kits, classroom lab pack, robotics club Ghana",
          image: schoolImg
        };
      }
    }
    // Handle query param deep link: /kits?kit=...
    else if ((path === '/kits' || path === '/kits/' || path === '/stem-kits' || path === '/stem-kits/') && location.search) {
      const searchParams = new URLSearchParams(location.search);
      const qKit = searchParams.get('kit');
      if (qKit) {
        const kit = STEM_KITS.find(k => k.slug === qKit || k.id === qKit);
        if (kit) {
          const fullImg = kit.image.startsWith('http') ? kit.image : `https://kids.koneacademy.io${kit.image}`;
          activeSEO = {
            title: `${kit.title} | Kone Kids STEM Hardware`,
            description: `${kit.tagline} Designed for ${kit.ageRange}. Available across Ghana with doorstep delivery.`,
            keywords: `${kit.title}, ${kit.category} kit, STEM kits Ghana`,
            image: fullImg
          };
        }
      }
    }
    else if (path.startsWith('/blog/')) {
      const articleId = params.id;
      const article = blogArticles.find(art => art.slug === articleId);
      if (article) {
        activeSEO = {
          title: `${article.title} | Kone Kids Parent Hub`,
          description: article.summary,
          keywords: `STEM learning, tech kids education, learning tutorials, ${article.category.toLowerCase()}`,
          schema: {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.summary,
            "image": [
              "https://kids.koneacademy.io/og-image.png?v=2"
            ],
            "datePublished": article.isoDate,
            "dateModified": article.isoDate,
            "author": {
              "@type": "Person",
              "name": article.author.name,
              "jobTitle": article.author.role,
              "image": "https://kids.koneacademy.io/author-philip.jpg",
              "url": "https://www.linkedin.com/in/philip-kone/",
              "sameAs": [
                "https://www.linkedin.com/in/philip-kone/"
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Kone Academy",
              "url": "https://www.koneacademy.io/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kids.koneacademy.io/og-image.png?v=2"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://kids.koneacademy.io/blog/${article.slug}`
            }
          }
        };

        // Set article specific meta tags
        updateMetaTag('author', article.author.name);
        updateMetaTag('article:author', article.author.name, true);
        updateMetaTag('article:published_time', article.isoDate, true);
        updateMetaTag('article:modified_time', article.isoDate, true);
      } else {
        activeSEO = {
          title: `STEM Article | Kone Kids Parent Hub`,
          description: "Read our latest article on nurturing coding and robotics skills in youth.",
          keywords: "STEM learning, tech kids education, learning tutorials"
        };
      }
    }

    // 2. Update Document Meta Details
    document.title = activeSEO.title;

    const isBlogArticle = path.startsWith('/blog/') && Boolean(params.id);
    const imgUrl = activeSEO.image || 'https://kids.koneacademy.io/og-image.png?v=2';

    // Update main description & keyword tags
    updateMetaTag('description', activeSEO.description);
    updateMetaTag('keywords', activeSEO.keywords);

    // Update Open Graph (Social Sharing) Tags (Facebook, WhatsApp, LinkedIn, iMessage, Pinterest)
    updateMetaTag('og:type', isBlogArticle ? 'article' : 'website', true);
    updateMetaTag('og:site_name', 'Kone Kids Academy', true);
    updateMetaTag('og:locale', 'en_US', true);
    const canonicalPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
    updateMetaTag('og:title', activeSEO.title, true);
    updateMetaTag('og:description', activeSEO.description, true);
    updateMetaTag('og:url', `https://kids.koneacademy.io${canonicalPath}`, true);
    updateMetaTag('og:image', imgUrl, true);
    updateMetaTag('og:image:secure_url', imgUrl, true);
    updateMetaTag('og:image:type', 'image/png', true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', activeSEO.title, true);

    // Article Specific Social Meta Tags
    if (isBlogArticle) {
      updateMetaTag('article:publisher', 'https://www.facebook.com/profile.php?id=61584327765846', true);
      updateMetaTag('article:section', 'STEM Education', true);
    }

    // Update Twitter Card Tags (Twitter / X, Discord, Telegram, Slack)
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@koneacademy');
    updateMetaTag('twitter:creator', '@koneacademy');
    updateMetaTag('twitter:domain', 'kids.koneacademy.io');
    updateMetaTag('twitter:title', activeSEO.title);
    updateMetaTag('twitter:description', activeSEO.description);
    updateMetaTag('twitter:image', imgUrl);
    updateMetaTag('twitter:image:alt', activeSEO.title);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://kids.koneacademy.io${canonicalPath}`);

    // 3. Update Dynamic JSON-LD Schema
    const SCHEMA_SCRIPT_ID = 'seo-dynamic-jsonld';
    let schemaScript = document.getElementById(SCHEMA_SCRIPT_ID);
    if (schemaScript) {
      schemaScript.remove();
    }

    if (activeSEO.schema) {
      schemaScript = document.createElement('script');
      schemaScript.id = SCHEMA_SCRIPT_ID;
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.innerHTML = JSON.stringify(activeSEO.schema);
      document.head.appendChild(schemaScript);
    }
  }, [location, params]);

  return null; // Side-effect component, renders nothing
};

export default SEOManager;
