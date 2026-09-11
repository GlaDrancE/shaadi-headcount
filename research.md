# Market research — 6 clusters, 11 Sept 2026

Six parallel research passes (~300 web searches/fetches total). Scored on: willingness to pay 30 · MVP ≤2 days 20 · Instagram demonstrability 20 · acquirable without cold outreach 15 · differentiation 10 · technical fit 5. Kill line: 70.

## Scoreboard

| Rank | Idea | Price | Score | Customers for ₹10K | Verdict |
|---|---|---|---|---|---|
| 1 | **Shaadi Headcount** — WhatsApp RSVP + live headcount per event | ₹2,499/wedding | **75** | 4 | ✅ test |
| 2 | **Model Shots** — product-accurate AI model photos for saree/boutique sellers | ₹999/10 imgs | **72** | 10 | ✅ test |
| 3 | Reel→DM→WhatsApp funnel setup on ReplyKaro/ManyChat | ₹1,499 | 68 | 7 | ⚠️ fallback |
| 4 | Instant vertical video invites (Hindi/regional) | ₹999 | 69 | 10 | ⚠️ week-2 pivot for #1's audience |
| 5 | "Book with UPI advance" page for MUAs/tutors/photographers | ₹1,499 | 61 | 7 | ✗ |
| 6 | IG→WhatsApp order page + UTR reconciliation for home sellers | ₹1,999 | 58 | 5 | ✗ |
| 7 | GitHub → deployed portfolio with AI case studies | ₹999 | 52 | 10 | ✗ |
| 8 | Creator fee-leak migration / link-in-bio | ₹1,999 | 41 | 5 | ✗ |

## Why the two finalists

**Shaadi Headcount (75).** Willingness to pay is proven above our price: Weddingkart WhatsApp RSVP ₹8,499/wedding, Wedding Wishlist RSVP app ₹4,999, SitesPlaced ₹999 (site only, no WhatsApp flow). Nothing sits at ₹1,999–2,999. Timing: September is peak planning for Nov–Feb weddings. Not ChatGPT-able: 300 guests' state, per-guest links, live totals. Built-in distribution: every guest sees the product. Honest weakness: a couple's purchase cycle > 7 days, so the realistic ₹10K path is LinkedIn ("wedding in the family this season?") + one Reel landing, or one wedding planner buying for several weddings.
Sources: weddingkart.co/tools/guest-communication-whatsapp · weddingwishlist.com/wedding-app · sitesplaced.com/blog/wedding-website-cost-india

**Model Shots (72).** The persona's exact audience (women running home boutiques), and the most Instagram-native before/after format of anything researched. Anchors: studio shoot ₹5,000+/day; CatalogX ₹299/20 credits proves the category, but is self-serve and generic. Our wedge is *product-accurate + human-checked + redo guarantee*. Risks stated plainly: Gemini/ChatGPT do product-on-model for free now (fidelity is where they fail — that's the pitch), and sarees are the hardest garment for try-on models (lead with kurtis/lehengas/jewellery).
Sources: catalogx.app/blog/ai-fashion-model-generator-price-india · aicouplephotogenerator.com/india

## Why the rest died

- **DM automation (68).** Meta's Instagram Messaging API needs App Review + Business Verification ("weeks to months"); dev-mode webhooks only fire for testers. So you'd be a ManyChat/ReplyKaro *configurator*, not a builder — zero technical edge, and ₹99/mo Indian tools (ReplyKaro, EngageDM ₹250, FlowDM ₹299) make self-setup a 30-second job. Kept as fallback only because the Reel literally is the product. Useful ammo: ManyChat cut free tier from 1,000 to 25 contacts, no UPI/INR billing, Jan-2026 Meta incident broke comment automations at scale.
- **Local-service booking page (61).** Real demand — Calendly has no UPI ("does not currently support UPI", Calendly community); vendors pay Zyncro ₹299/mo, SalonBoost ₹799–1,499/mo, WedMeGood lakhs for leads. But reaching 5 paying MUAs from an 800-follower non-vendor audience in 7 days is cold outreach with a Reel on top. Agent's own words: "acquisition is effectively cold-outreach-dependent."
- **IG→WhatsApp order desk (58).** Pain is vivid ("re-typing orders from WhatsApp into Excel for two hours every night"; "lose 2–3 orders per week because they can't keep track"), but the buyer believes "WhatsApp catalog + GPay is free," Bikayi (Sequoia/YC) collapsed on this exact thesis, and Ordermatrix already sells it at ₹2,999/mo. Only edge: UTR reconciliation.
- **Dev tools (52).** Devs build it or Zoho/Resume Matcher/readme.so is free; Gumroad boilerplate sellers report first sale 3–8 weeks after launch; median Gumroad creator makes $72/mo. Wrong buyer, wrong timeline.
- **Creator link-in-bio / fee migration (41).** Saturated at ₹0–₹499/mo with UPI-native players (SuperProfile, Ownstreet 0%, Razorpay Pages 2%); setup is $10 on Fiverr. Only fact worth keeping: Topmate's effective fee is 16–18% and payouts get held — good LinkedIn-post material, not a business.

## Cross-cutting facts that shaped the plan

- Indian buyers convert on UPI, not cards. Gumroad/Stan Store/Calendly all fail here. → UPI deep link + QR on the landing page, no Razorpay KYC dependency for the test.
- One sticky bio URL + warm story traffic converts 2–8% on clear offers (ownstreet.in guide). → one landing page, two `?o=` variants.
- "Sell an outcome, not access": Topmate top 1% earn ₹20K/mo, median ≈ nothing (Ravi Handa). → both finalists sell a concrete artefact (a headcount; 10 images).
- Seasonal anomaly for week 2+: Diwali (8 Nov 2026) / Navratri business greeting videos sell ₹390–₹1,080 on Selfanimate — same audience as Shaadi Headcount if a render pipeline is ever built.
