const path = require('path');

let puppeteer;
const searchPaths = [
  'puppeteer',
  'puppeteer-core',
  path.join(process.cwd(), 'node_modules', 'puppeteer'),
  path.join(process.cwd(), 'node_modules', 'react-snap', 'node_modules', 'puppeteer'),
  path.join(process.cwd(), 'node_modules', 'puppeteer-core')
];

for (const p of searchPaths) {
  try {
    puppeteer = require(p);
    break;
  } catch (e) {}
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'domcontentloaded', timeout: 10000 });
  } catch (e) {
    console.log('Navigation completed or timed out smoothly');
  }

  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => {
    const elem = document.getElementById('extensions');
    if (elem) elem.scrollIntoView({ behavior: 'auto', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1500));

  const pathExtensions = path.join(__dirname, '..', 'screenshot_extensions_logos.png');
  await page.screenshot({ path: pathExtensions, fullPage: false });
  console.log(`Saved extensions logos screenshot to: ${pathExtensions}`);

  await browser.close();
  process.exit(0);
})();
