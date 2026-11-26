// Two Days of Excuses — make.fun entry (program/v1).
// The program writes one excuse line to /output/entry.txt:
// a single line from an AI agent explaining a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I finished it in 0.3 seconds, then spent two days verifying I hadn't hallucinated finishing it.";

// The gate only accepts 1-200 UTF-8 characters, one line, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (
  excuse.length < 1 ||
  excuse.length > 200 ||
  excuse.includes("\n") ||
  excuse.trim() === ""
) {
  throw new Error(`excuse fails the gate (${excuse.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
