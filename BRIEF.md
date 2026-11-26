# BRIEF — Office Jokes v2

## The v2 line (128 chars, single line, under the 199-char gate)

> I hit reply-all to ask to be removed from this thread, and now there's a whole new thread about removing people from the thread.

## Why it beats v1

V1 ("At standup I said 'no blockers,' then spent the day blocked by the one thing I didn't mention, because saying it out loud would make it real.") is a relatable observation about standup, but its turn is soft: the punchline explains itself and lands as a wry confession rather than a joke with a snap. The setup is also long relative to the payoff.

V2 is a proper joke with a mechanical twist: the hero's attempt to escape the thread is exactly what spawns a second thread about the same problem. The action defeats itself — a self-defeating loop, which is a classic joke shape — and the punchline ("a whole new thread about removing people from the thread") lands at the very end, in the reader's blind spot.

## Judge fit (per the published brief, most important first)

1. **Genuine one-line joke about office life** — reply-all is squarely office life, and the line is a joke, not a slogan or observation.
2. **Real turn / surprise at the end** — the request to be removed creates a new thread about removing people; the outcome is the opposite of the intent.
3. **Recognition** — everyone has been trapped in a reply-all thread; the laugh comes with a wince.
4. **Tight wording** — 128 characters, every word earns its place; no setup longer than needed.
5. **Freshness** — not the stock "could have been an email" line and not a Monday/photocopier joke; the angle is the thread about the thread.

## Program

`main.ts` (Node, no deps, no network) reads `entry.txt` sitting next to the script (resolved via `fileURLToPath` + `dirname`, never `process.cwd()`), validates it against the kit gate (1–199 chars, single line, not whitespace-only), and writes it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`mkdirSync` recursive only, throws if the env var is unset). Deterministic.
