// news-image-20261127 — "Sum up 27 November's world news in one image".
// The entry is a newspaper front page (entry.png, 1024x1024) naming
// Friday 27 November 2026 and six stories from that day. This program
// copies the image the repository holds to the absolute output path
// the runtime provides, writing the same bytes on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const outPath = join(outDir, "entry.png");
const here = dirname(fileURLToPath(import.meta.url));
const srcPath = join(here, "entry.png");

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(srcPath);
if (bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}
writeFileSync(outPath, bytes);
