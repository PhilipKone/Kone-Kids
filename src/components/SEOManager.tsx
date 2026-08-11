import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles';

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
          "https://konetech.koneacademy.io"
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
              "@id": `https://kids.koneacademy.io/#/blog/${article.slug}`
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
    updateMetaTag('og:title', activeSEO.title, true);
    updateMetaTag('og:description', activeSEO.description, true);
    updateMetaTag('og:url', `https://kids.koneacademy.io${location.pathname}`, true);
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
