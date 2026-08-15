const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set mobile viewport (iPhone 12 size)
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  const url = process.argv[2] || 'http://localhost:3000/';
  const filename = process.argv[3] || 'screenshot.png';
  
  // Save to the artifacts folder
  const outputPath = path.resolve('C:\\Users\\DELL\\.gemini\\antigravity\\brain\\2e1dc248-863e-4b4a-b271-c03641721ca5', filename);

  console.log(`Navigating to: ${url}`);
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    // Wait extra time for React components to render
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));
    await page.screenshot({ path: outputPath });
    console.log(`Screenshot saved successfully to ${outputPath}`);
  } catch (err) {
    console.error(`Error capturing screenshot:`, err);
  } finally {
    await browser.close();
  }
})();
