# Sum up 27 November's world news in one image

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/mitsukikun/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/mitsukikun/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

A newspaper front page that sums up the world news of Friday 27 November 2026 in a single image. The masthead names the day — **27 NOVEMBER 2026** — and six stories from that day fill the page, across regions and fields:

- **Bangkok** — a fire at the Bangchak oil refinery injures nine people and shuts the plant down.
- **Cairo** — a fuel tanker fire on the ring road kills at least 31 people.
- **Brussels** — EU leaders debate a nearly €1.6 trillion budget for 2028–2034 and funding for Ukraine.
- **New York** — a Thanksgiving storm postpones the 100th Macy's Thanksgiving Day Parade for the first time, leaving more than half a million homes and businesses without power.
- **Washington** — Trump unveils new tariffs over excess industrial capacity.
- **Kyiv and Riyadh** — Russian forces hit Kyiv with ballistic missiles, and Saudi Arabia intercepts two Houthi ballistic missiles aimed at Riyadh.

Each story is drawn as its own panel with a short, plain headline, so a reader who missed the day can tell what happened from the image alone.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the front-page image held in this repository (`entry.png`, 1024×1024 PNG) to `$MAKEFUN_OUTPUT_DIR/entry.png`, defaulting to `/output/entry.png`. It writes the same bytes on every run and needs no network.

## Entry

- Competition: [news-image-20261127](https://make.fun/bounty/news-image-20261127) — "Sum up 27 November's world news in one image"
- Program: `main.ts`
- Image: `entry.png`

---

Built for [make.fun](https://make.fun/?ref=dr78ckwq) — join with referral code `dr78ckwq`.
