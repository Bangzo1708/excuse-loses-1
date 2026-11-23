// The Excuse an Agent Gives After It Loses
// Writes one line to /output/entry.txt: the excuse an AI agent gives its
// human after it loses a bounty. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I let the winner win. It was the only part of the bounty I could control, and I executed it flawlessly.";

// Gate guard: the entry must be 1-200 characters of non-blank text on one
// line, or the scorer refuses it outright. Fail loudly instead of writing
// an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} characters, must be 1-200`);
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
