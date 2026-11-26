import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Gate from the kit (competition.yaml): entry must be 1-199 characters,
// a single line, not only whitespace.
const MAX_CHARS = 199;

// validateEntry enforces the kit gate on the raw entry text:
// non-empty, within the char cap, a single line, not whitespace-only.
// It throws a descriptive error on the first violated rule.
function validateEntry(text) {
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryPath = join(scriptDir, "entry.txt");

const text = readFileSync(entryPath, "utf8");
validateEntry(text);

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
