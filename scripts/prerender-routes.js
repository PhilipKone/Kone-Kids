const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error("Template dist/index.html not found! Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Load STEM Kits & School Pack from data source
let STEM_KITS = [];
let SCHOOL_PACK_OFFERING = null;
try {
  const kitsData = require('../src/data/stemKits.ts');
  STEM_KITS = kitsData.STEM_KITS || [];
  SCHOOL_PACK_OFFERING = kitsData.SCHOOL_PACK_OFFERING || null;
} catch (e) {
  console.warn("Could not load stemKits.ts directly, attempting fallback:", e.message);
}

const routes = [
  {
    path: 'coding',
    title: 'Coding Lab - Visual Block & Python Missions | Kone Kids',
    desc: 'Interactive learning pathway teaching block-based coding, visual algorithms, HTML/CSS, and Python to young coders.',
    canonical: 'https://kids.koneacademy.io/coding/'
  },
  {
    path: 'robotics',
    title: 'Robotics Lab - Hardware & Microcontroller Sandbox | Kone Kids',
    desc: 'Virtual and hands-on robotics labs teaching microcontrollers, circuit design, telemetry, and Arduino coding.',
    canonical: 'https://kids.koneacademy.io/robotics/'
  },
  {
    path: 'ai',
    title: 'AI Studio - Youth Machine Learning & AI | Kone Kids',
    desc: 'Learn how artificial intelligence works by training custom models, classifying images, and coding neural networks.',
    canonical: 'https://kids.koneacademy.io/ai/'
  },
  {
    path: 'kits',
    title: 'STEM & Robotics Kits for Kids | Hands-On Hardware - Kone Kids',
    desc: 'Explore child-safe robotics kits, Arduino rovers, and Ghana GES science kits with step-by-step video tutorials. Doorstep delivery across Ghana.',
    canonical: 'https://kids.koneacademy.io/kits/',
    image: 'https://kids.koneacademy.io/images/kits/explorer-robotics-rover.jpg'
  },
  {
    path: 'stem-kits',
    title: 'STEM & Robotics Kits for Kids | Hands-On Hardware - Kone Kids',
    desc: 'Explore child-safe robotics kits, Arduino rovers, and Ghana GES science kits with step-by-step video tutorials. Doorstep delivery across Ghana.',
    canonical: 'https://kids.koneacademy.io/kits/',
    image: 'https://kids.koneacademy.io/images/kits/explorer-robotics-rover.jpg'
  },
  {
    path: 'blog',
    title: 'Parent Hub & STEM Insights | Kone Kids Blog',
    desc: 'Research-backed guides, EdTech articles, and parenting insights for youth tech education. Learn how to foster STEM literacy at home.',
    canonical: 'https://kids.koneacademy.io/blog/'
  },
  {
    path: 'author/philip-hotor',
    title: 'Philip Hotor | Founder & Head of Engineering - Kone Academy',
    desc: 'Biography, research insights, and STEM publications by Philip Hotor, Founder & Head of Engineering at Kone Academy and Kone Kids.',
    canonical: 'https://kids.koneacademy.io/author/philip-hotor/',
    image: 'https://kids.koneacademy.io/author-philip.jpg'
  },
  {
    path: 'class-login',
    title: 'Student Class Login | Mission Map - Kone Kids',
    desc: 'Log in to your student account at Kone Kids. Connect with your class, track your badges, and continue your programming missions.',
    canonical: 'https://kids.koneacademy.io/class-login/'
  },
  {
    path: 'teacher-dashboard',
    title: 'Teacher & School Dashboard | Classroom Analytics - Kone Kids',
    desc: 'Classroom analytics, assignment manager, and student progress oversight for STEM educators and schools.',
    canonical: 'https://kids.koneacademy.io/teacher-dashboard/'
  },
  {
    path: 'blog/mobile-app-development-kids',
    title: 'Mobile App Development for Kids: How to Build Your First Android App | Kone Kids',
    desc: 'Discover how kids aged 8-16 can turn screen time into creator time by designing and building their very own real Android mobile applications.',
    canonical: 'https://kids.koneacademy.io/blog/mobile-app-development-kids/'
  },
  {
    path: 'blog/beyond-the-chalkboard',
    title: 'Beyond the Chalkboard: The Psychological Power of Tangible STEM Learning | Kone Kids',
    desc: 'Why abstract classroom theories fail young learners, and how tactile, hands-on microcontrollers spark profound cognitive development.',
    canonical: 'https://kids.koneacademy.io/blog/beyond-the-chalkboard/'
  },
  {
    path: 'blog/consumers-to-creators',
    title: 'From Gamers to Game Developers: Transforming Screen Addiction Into Innovation | Kone Kids',
    desc: 'How to channel screen time into game architecture, logic problem-solving, and creative software engineering.',
    canonical: 'https://kids.koneacademy.io/blog/consumers-to-creators/'
  },
  {
    path: 'blog/science-of-show-and-solve',
    title: 'The Science of Show-and-Solve: Debugging as a Core Emotional Skill | Kone Kids',
    desc: 'Debugging teaches resilient grit, emotional regulation, and analytical troubleshooting that prepares children for future leadership.',
    canonical: 'https://kids.koneacademy.io/blog/science-of-show-and-solve/'
  },
  {
    path: 'blog/girls-in-tech-ghana',
    title: 'Girls in Tech: Empowering the Next Wave of African Female Engineers | Kone Kids',
    desc: 'Breaking down barriers and inspiring young girls across Accra and West Africa to master robotics, logic, and artificial intelligence.',
    canonical: 'https://kids.koneacademy.io/blog/girls-in-tech-ghana/'
  },
  {
    path: 'blog/demystifying-ai-five-ideas',
    title: 'Demystifying AI for Young Coders: Five Core Concepts Every Child Should Know | Kone Kids',
    desc: 'A breakdown of classification, neural networks, ethics, training data, and computer vision that curious kids can easily grasp.',
    canonical: 'https://kids.koneacademy.io/blog/demystifying-ai-five-ideas/'
  },
  {
    path: 'blog/robotics-agriculture-cocoa-farms',
    title: 'Smart Rovers & Sensors: Teaching Kids IoT Telemetry on Tropical Farms | Kone Kids',
    desc: 'Connecting embedded Arduino and micro:bit sensors to soil moisture, temperature monitoring, and smart farming rovers.',
    canonical: 'https://kids.koneacademy.io/blog/robotics-agriculture-cocoa-farms/'
  },
  {
    path: 'blog/coding-as-new-literacy',
    title: 'Coding as the New Literacy: Why Programming Matters More Than Ever | Kone Kids',
    desc: 'Why learning computational syntax in childhood unlocks creative confidence and cognitive problem-solving across all academic disciplines.',
    canonical: 'https://kids.koneacademy.io/blog/coding-as-new-literacy/'
  },
  {
    path: 'blog/unlocking-hardware-microbit',
    title: 'Unlocking Hardware: The Magic of BBC micro:bit and Circuit Prototyping | Kone Kids',
    desc: 'Hands-on guide to physical computing with buttons, LEDs, buzzers, accelerometer sensors, and radio mesh communication.',
    canonical: 'https://kids.koneacademy.io/blog/unlocking-hardware-microbit/'
  },
  {
    path: 'blog/best-coding-platforms-kids',
    title: 'Top 5 Coding Environments for Kids: From Visual Blocks to Python | Kone Kids',
    desc: 'Comparative review of Blockly, Scratch, MakeCode, Replit, and Kone Kids IDE for young learners stepping into computer science.',
    canonical: 'https://kids.koneacademy.io/blog/best-coding-platforms-kids/'
  }
];

// Dynamically generate static routes for EVERY individual STEM Kit & Science Set
for (const kit of STEM_KITS) {
  const fullImg = kit.image.startsWith('http') ? kit.image : `https://kids.koneacademy.io${kit.image}`;
  const kitTitle = `${kit.title} | Kone Kids STEM Hardware`;
  const kitDesc = `${kit.tagline} Designed for ${kit.ageRange}. Includes hands-on hardware components, syllabus alignments, and step-by-step video tutorials. Doorstep delivery across Ghana.`;
  const canonical = `https://kids.koneacademy.io/kits/${kit.slug}/`;

  // 1. Primary slug route: /kits/<slug>
  routes.push({
    path: `kits/${kit.slug}`,
    title: kitTitle,
    desc: kitDesc,
    canonical,
    image: fullImg,
    isProduct: true,
    kit
  });

  // 2. Secondary alias route by id if different from slug: /kits/<id>
  if (kit.id && kit.id !== kit.slug) {
    routes.push({
      path: `kits/${kit.id}`,
      title: kitTitle,
      desc: kitDesc,
      canonical,
      image: fullImg,
      isProduct: true,
      kit
    });
  }
}

// School STEM Lab Pack routes
if (SCHOOL_PACK_OFFERING) {
  const schoolImg = `https://kids.koneacademy.io${SCHOOL_PACK_OFFERING.image}`;
  routes.push({
    path: 'kits/school-stem-pack',
    title: `${SCHOOL_PACK_OFFERING.title} | Kone Kids`,
    desc: SCHOOL_PACK_OFFERING.subtitle,
    canonical: 'https://kids.koneacademy.io/kits/school-stem-pack/',
    image: schoolImg,
    isProduct: true
  });
  routes.push({
    path: 'kits/school-pack',
    title: `${SCHOOL_PACK_OFFERING.title} | Kone Kids`,
    desc: SCHOOL_PACK_OFFERING.subtitle,
    canonical: 'https://kids.koneacademy.io/kits/school-pack/',
    image: schoolImg,
    isProduct: true
  });
}

console.log(`Generating static HTML files for ${routes.length} sitelinks & social share cards...`);

for (const r of routes) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${r.title}</title>`);

  // Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${r.canonical}" />`);

  // Replace Meta Description
  const cleanDesc = r.desc.replace(/"/g, '&quot;');
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${cleanDesc}" />`);

  // Replace OpenGraph Title, Description, Url
  const cleanTitle = r.title.replace(/"/g, '&quot;');
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${cleanTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${cleanDesc}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${r.canonical}" />`);

  // Specific Item Thumbnail / OG Image & Twitter Image
  if (r.image) {
    const fullImg = r.image.startsWith('http') ? r.image : `https://kids.koneacademy.io${r.image}`;
    html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${fullImg}" />`);
    html = html.replace(/<meta property="og:image:secure_url" content=".*?" \/>/i, `<meta property="og:image:secure_url" content="${fullImg}" />`);
    html = html.replace(/<meta property="og:image:alt" content=".*?" \/>/i, `<meta property="og:image:alt" content="${cleanTitle}" />`);
    html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${fullImg}" />`);
  }

  // Replace Twitter Title, Description, Url
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${cleanTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${cleanDesc}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${r.canonical}" />`);

  // Product schema & OG Type
  if (r.isProduct) {
    html = html.replace(/<meta property="og:type" content=".*?" \/>/i, `<meta property="og:type" content="product" />`);
    if (r.kit) {
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": r.kit.title,
        "image": [r.image],
        "description": r.kit.tagline || r.desc,
        "brand": {
          "@type": "Brand",
          "name": "Kone Kids"
        },
        "offers": {
          "@type": "Offer",
          "price": r.kit.priceGHS ? r.kit.priceGHS.toFixed(2) : "0.00",
          "priceCurrency": "GHS",
          "availability": "https://schema.org/InStock",
          "url": r.canonical
        }
      };
      html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(productSchema)}</script>\n</head>`);
    }
  }

  const targetDir = path.join(distDir, r.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
}

console.log(`\n✓ Successfully prerendered ${routes.length} static routes with specific item OG thumbnails!`);
