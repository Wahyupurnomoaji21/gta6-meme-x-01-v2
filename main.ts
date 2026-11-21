// gta6-meme-x-01-v2 — entry program for "Post a GTA 6 meme on X" (make.fun).
//
// The entry itself is the X post named in POST.json: the house reads the post
// from X and judges its first picture and text. This program does nothing
// more than copy POST.json from the repository root into the output
// directory, byte for byte, so the house can find it.
//
// Node 22, standard library only. No network, no arguments, exits 0 on
// success.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outputDir, "POST.json"));
console.log(`POST.json copied to ${join(outputDir, "POST.json")}`);
