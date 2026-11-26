// One Line, One Laugh — entry writer.
//
// Writes the single funny line (the competition's PRIMARY entry) to
// /output/entry.txt on every run. Deterministic, stdlib only, no
// network, no secrets, no reading files outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My bank account and I have an agreement: it stays empty, and I stay optimistic. So far, both of us are keeping our word.";

// Gate: the entry must be 1 to 140 characters of UTF-8 text, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  throw new Error(
    `Entry length ${length} is outside the 1-140 character gate; refusing to write.`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry is only whitespace; refusing to write.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
