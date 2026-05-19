const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const pathways = ['coding', 'robotics', 'ai', 'blog', 'blog/best-coding-platforms-kids'];

pathways.forEach(pathway => {
    const dir = path.join(distDir, pathway);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(
        path.join(distDir, 'index.html'),
        path.join(dir, 'index.html')
    );
    console.log(`✅ Pre-rendered: /${pathway}`);
});
