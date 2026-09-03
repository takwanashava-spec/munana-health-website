import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(projectRoot, 'dist');
const html = readFileSync(join(dist, 'index.html'), 'utf8');
const localReferences = [...html.matchAll(/(?:src|href)="(?!#|https?:|mailto:|tel:)([^"]+)"/g)]
  .map((match) => match[1]);
const missing = localReferences.filter((reference) => !existsSync(join(dist, reference)));

if (missing.length) {
  console.error(`Missing local files: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`Website check passed: ${localReferences.length} local references found.`);
