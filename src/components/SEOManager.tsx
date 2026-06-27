import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  schema?: Record<string, any>;
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
    title: "Class Login | Enter the Mission Map - Kone Kids",
    description: "Log in to your student account at Kone Kids. Connect with your class, track your badges, and continue your programming missions.",
    keywords: "student login, kids coding login, classroom tracker, student dashboard"
  },
  '/blog': {
    title: "Parent Hub & STEM Insights | Kone Kids Blog",
    description: "Resources, guides, and insights for parents raising tomorrow's tech innovators. Learn how to foster STEM literacy at home.",
    keywords: "parent STEM guides, raise tech kids, EdTech insights, coding education parents"
  },
  '/coding': {
    title: "Coding Missions Map | Learn Scratch & Python - Kone Kids",
    description: "Interactive learning pathway teaching block-based coding, HTML/CSS, and Python to young coders.",
    keywords: "coding for kids, learn Scratch, Scratch games, kids Python course"
  },
  '/robotics': {
    title: "Robotics Sandbox | Telemetry & Electronics - Kone Kids",
    description: "Virtual and hands-on robotics labs teaching microcontrollers, circuit design, and Arduino coding.",
    keywords: "robotics lab, kids Arduino, electronics for kids, virtual robots simulation"
  },
  '/ai': {
    title: "AI & Machine Learning Studio for Youth - Kone Kids",
    description: "Learn how artificial intelligence works by training custom models, classifying images, and coding neural networks.",
    keywords: "AI for kids, train machine learning, kids neural network, AI foundation school"
  }
};

export const SEOManager: React.FC = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    // 1. Identify active configuration
    let activeSEO = DEFAULT_SEO;
    const path = location.pathname;

    // Check direct static matches
    if (ROUTE_SEO_MAP[path]) {
      activeSEO = ROUTE_SEO_MAP[path];
    } 
    // Handle dynamic blog routes: /blog/:id
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
            "datePublished": article.publishDate,
            "author": {
              "@type": "Person",
              "name": article.author.name,
              "jobTitle": article.author.role,
              "sameAs": [
                "https://www.linkedin.com/in/philip-kone-hotor/"
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Kone Academy",
              "url": "https://www.koneacademy.io/",
              "sameAs": [
                "https://www.linkedin.com/company/konecodeacdemy/",
                "https://www.facebook.com/profile.php?id=61584327765846",
                "https://www.instagram.com/koneacademy",
                "https://x.com/koneacademy",
                "https://www.tiktok.com/@koneacademy",
                "https://youtube.com/@koneacademy"
              ]
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://kids.koneacademy.io/blog/${article.slug}`
            }
          }
        };
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

    // Update main description & keyword tags
    updateMetaTag('description', activeSEO.description);
    updateMetaTag('keywords', activeSEO.keywords);

    // Update Open Graph (Social Sharing) Tags
    updateMetaTag('og:title', activeSEO.title, true);
    updateMetaTag('og:description', activeSEO.description, true);
    updateMetaTag('og:url', `https://kids.koneacademy.io${location.pathname}`, true);

    // Update Twitter Card Tags
    updateMetaTag('twitter:title', activeSEO.title);
    updateMetaTag('twitter:description', activeSEO.description);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://kids.koneacademy.io${location.pathname}`);

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
