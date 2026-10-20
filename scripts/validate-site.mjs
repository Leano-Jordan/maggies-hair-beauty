#!/usr/bin/env node
/**
 * Dependency-free static-site integrity check.
 * Run: node scripts/validate-site.mjs
 */
import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlFiles = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.github') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}

const errors = [];
const warnings = [];
const exists = async (file) => access(file).then(() => true).catch(() => false);

await walk(root);
if (!htmlFiles.length) {
  console.error('FAIL: no HTML pages found');
  process.exit(1);
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const rel = path.relative(root, file);
  const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]));

  for (const match of html.matchAll(/\b(?:href|src)=["']([^"'#][^"']*)["']/gi)) {
    const raw = match[1].trim();
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(raw)) continue;
    const clean = raw.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = path.resolve(path.dirname(file), decodeURIComponent(clean));
    if (!target.startsWith(root + path.sep) && target !== root) {
      errors.push(rel + ': local reference escapes repository: ' + raw);
      continue;
    }
    if (!(await exists(target))) errors.push(rel + ': missing local target ' + raw);
  }

  for (const match of html.matchAll(/\bsrcset=["']([^"']+)["']/gi)) {
    for (const candidate of match[1].split(',')) {
      const raw = candidate.trim().split(/\s+/)[0];
      if (!raw || /^(?:https?:|data:|\/\/)/i.test(raw)) continue;
      const target = path.resolve(path.dirname(file), decodeURIComponent(raw));
      if (!(await exists(target))) errors.push(rel + ': missing srcset asset ' + raw);
    }
  }

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch { errors.push(rel + ': invalid JSON-LD block'); }
  }

  const titleCount = (html.match(/<title\b/gi) || []).length;
  if (titleCount !== 1) errors.push(rel + ': expected exactly one <title>, found ' + titleCount);
  if (!/<meta\s+name=["']description["']/i.test(html)) warnings.push(rel + ': missing meta description');
  if (!/<main\b/i.test(html)) warnings.push(rel + ': missing main landmark');
  if (!/<html\b[^>]*\blang=/i.test(html)) errors.push(rel + ': missing document language');
}

console.log('Checked ' + htmlFiles.length + ' HTML pages.');
if (warnings.length) {
  console.warn('\nWarnings:');
  for (const warning of warnings) console.warn('WARN ' + warning);
}
if (errors.length) {
  console.error('\nErrors:');
  for (const error of errors) console.error('FAIL ' + error);
  process.exit(1);
}
console.log('PASS: local links/assets, document titles, language, landmarks and JSON-LD syntax.');
