import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Office joke entry: copy the single line from entry.txt into the output dir.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.txt");
const line = readFileSync(source, "utf8");

if (line.trim().length === 0 || line.trim().length >= 200) {
  throw new Error("entry.txt must hold one joke under 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, line);

// Confirm the copy landed before exiting, so a silent write failure is loud.
if (readFileSync(target, "utf8") !== line) {
  throw new Error("entry.txt was not copied correctly");
}
