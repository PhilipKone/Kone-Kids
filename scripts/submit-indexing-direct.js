import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const keyPath = path.join(projectRoot, 'service_account.json');

if (!fs.existsSync(keyPath)) {
  console.error('❌ service_account.json not found in project root!');
  process.exit(1);
}

const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
console.log('🔑 Service Account Email:', keyData.client_email);
console.log('🌐 Target Domain: https://kids.koneacademy.io/');
console.log('\n---------------------------------------------------');
console.log('📌 NOTE: To allow this script to submit URLs automatically:');
console.log('1. Go to Google Search Console (https://search.google.com/search-console)');
console.log('2. Select kids.koneacademy.io (or koneacademy.io)');
console.log('3. Go to Settings -> Users and permissions -> Add User');
console.log(`4. Add: ${keyData.client_email} as Owner or Full User.`);
console.log('---------------------------------------------------\n');
