# ₹1,000 → ₹10,000 in 7 days — launch kit

Everything here is built. Left for you: fill 3 config values, deploy (2 min), shoot 2 Reels, post 1 LinkedIn update, watch the numbers.

## What's in the box

| Path | What |
|---|---|
| `docs/index.html` | Fake-door landing page. `?o=rsvp` (default) = Shaadi Headcount ₹2,499 · `?o=shots` = Model Shots ₹999. Lead form → UPI QR/deep-link → UTR confirm. Every step logged. |
| `docs/rsvp/setup.html` | **You** run this once per paying customer: couple, events, paste guest list → get the host's admin link. ~5 min. |
| `docs/rsvp/admin.html?k=…` | Host dashboard: live headcount per event, per-guest "WhatsApp →" (pre-typed invite), CSV for caterer. Auto-refresh 15s. |
| `docs/rsvp/g.html?t=…` | Guest RSVP page (Hinglish). Per event: coming / not coming + how many. Editable later. |
| `docs/lib.js` | Config + 20-line Supabase REST helper. No SDK, no build step. |
| `content-kit.md` | 4 Reel scripts, Stories, landing copy, LinkedIn post, ad copy + targeting, DM scripts, tracking-sheet spec. |
| `research.md` | The 6 market reports + scoreboard (why these two offers, why the other five died). |

Backend: Supabase project `shaadi-headcount` (Mumbai, free tier). Tables are RLS-locked; the browser only ever hits `events` (insert-only) and 5 security-definer RPCs. The publishable key in `lib.js` is safe to ship.

## Deploy — 5 minutes

1. `docs/lib.js` → set `upiVpa`, `whatsapp` (91 + 10 digits), `linkedin`. Money lands in **your** UPI, under **your** name. Persona never touches payments.
2. Deploy the `docs/` folder as static files. Fastest: drag the folder onto https://app.netlify.com/drop — or `npx vercel docs --prod`.
3. Put the deployed URL back into `lib.js` → `siteBase` (no trailing slash) and redeploy once. This is what guest links are built from.
4. Open `/?o=rsvp` and `/?o=shots` on your phone. Tap through to the UPI screen — GPay should open with ₹ prefilled. Don't pay yourself.
5. Put `/?o=rsvp` in the Instagram bio for the first 24h, swap to `/?o=shots` for the next 24h (or use two link-in-bio slots).

A demo wedding already exists for shooting the Reel: setup slug `test-demo`, admin link → run this in Supabase SQL editor:
`select admin_token from weddings where slug='test-demo';` → `…/rsvp/admin.html?k=<token>`. Add ~20 fake guests via `setup.html` if you want the dashboard to look full.

## Reading the numbers

Supabase → SQL editor:

```sql
-- funnel per offer, last 7 days
select offer, event, count(distinct lead_id) leads
from events where created_at > now() - interval '7 days'
group by 1,2 order by 1, array_position(array['visit','reserve','upi_intent','paid'], event);

-- who reserved / paid (call them back)
select created_at, offer, event, payload->>'name' name, payload->>'whatsapp' wa, payload->>'extra' extra, payload->>'utr' utr
from events where event in ('reserve','paid') order by created_at desc;
```

Decision rules (48h fake-door, ₹0 spent):
- Reach but **<2% tap "Reserve"** → creative/hook problem. Swap to Reel 2 (pain-first). Don't touch price.
- Reserve clicks but **no UPI intents** → price/trust problem. Add the LinkedIn post link above the fold; try ₹1,999 / ₹799.
- **Any paid** → that offer wins. Kill the other. Spend ₹250/day on the Reel that produced the payment (Engagement → Messages, see content-kit §5).
- Verify every UTR in your UPI app before delivering. Anyone can type 12 digits.

## The 7 days

| Day | Do | Time |
|---|---|---|
| **1 (today)** | Fill config, deploy, test on phone. Record Reel A1 (screen-record dashboard) and Reel B1 (flat-lay → model shots; generate 10 demo images first — see below). | 2h |
| **2** | Post Reel A1 + Story sequence A (poll). Post LinkedIn builder's log. Reply to every HEADCOUNT comment with DM script. | 45 min + replies |
| **3** | Post Reel B1 + Story B. Swap bio link. Check SQL funnel. | 45 min |
| **4** | Read numbers. Pick winner by the rules above. Post the winner's Reel 2 (pain-first). If RSVP won: onboard payers via `setup.html`. If Shots won: deliver images. | 1–2h |
| **5** | ₹250 boost on winning Reel → Messages. Ask first customer for a story tag / screenshot. Post it. | 30 min + delivery |
| **6** | ₹250 boost day 2. Second content angle (planner/boutique-owner POV). | 30 min |
| **7** | Tally: revenue, CAC, what converted. Decide: keep running, or stop with a clean write-up for LinkedIn (that post is itself worth something to your job search). | 1h |

Total: ~8–10h across the week. Everything else is waiting.

## Model Shots — how to actually deliver (if B wins)

Not pre-built; it's API glue + human QA and costs real money per image. Pipeline: fal.ai `fashn/tryon` or `idm-vton` (garment-preserving; ~₹8–15/image) → 12 generations per order → you pick the 10 best → zip → WhatsApp. Demo images for the Reel: ~₹150 of the ₹1,000. Sarees drape badly in try-on models — lead the Reel with kurtis/lehenga/jewellery, offer sarees with the redo guarantee.

## Risks, stated once

- 800 followers may contain zero brides and zero boutique owners. The LinkedIn post is the hedge for A; Reel reach to non-followers is the hedge for B. If both funnels show visits but zero reserves after 48h, the honest answer is "no demand at this reach" — stop, write it up, don't spend the ₹1,000.
- A couple's buying cycle is longer than 7 days. Expect A's payments to come from someone in your LinkedIn network who has a wedding in the family, not from a stranger.
- Free AI image tools are closing in on B. It's a 2026 window, not a business.
