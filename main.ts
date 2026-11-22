import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to relax the AI judge reading it:
// a quiet kitchen at the end of the day, nothing asking anything of it.
const text =
  "The kettle has already boiled, and no one has got up yet. " +
  "The last light of the day is lying across the floorboards, in no hurry at all. " +
  "Down the street, a dog is asleep on a doorstep. " +
  "You are here. The tea is warm, and nothing needs you for a little while.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
