import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error("Template dist/index.html not found! Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

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
    path: 'blog',
    title: 'Parent Hub & STEM Insights | Kone Kids Blog',
    desc: 'Research-backed guides, EdTech articles, and parenting insights for youth tech education. Learn how to foster STEM literacy at home.',
    canonical: 'https://kids.koneacademy.io/blog/'
  },
  {
    path: 'author/philip-hotor',
    title: 'Philip Hotor | Founder & Head of Engineering - Kone Academy',
    desc: 'Biography, research insights, and STEM publications by Philip Hotor, Founder & Head of Engineering at Kone Academy and Kone Kids.',
    canonical: 'https://kids.koneacademy.io/author/philip-hotor/'
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

console.log("Generating static HTML files for clean GitHub Pages 200 OK sitelinks...");

for (const r of routes) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${r.title}</title>`);

  // Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${r.canonical}" />`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${r.desc}" />`);

  // Replace OpenGraph Title, Description, Url
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${r.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${r.desc}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${r.canonical}" />`);

  // Replace Twitter Title, Description, Url
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${r.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${r.desc}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${r.canonical}" />`);

  const targetDir = path.join(distDir, r.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`  ✓ Generated: dist/${r.path}/index.html`);
}

console.log("\nAll static clean routes successfully generated for Kone Kids!");
