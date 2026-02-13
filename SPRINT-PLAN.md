# OSTRTA - 3-Week MVP Sprint

**Started:** 2026-02-13  
**Launch Target:** 2026-03-06  
**Goal:** 5 beta customers testing end-to-end system

---

## Week 1: Landing Page + Infrastructure + Monitoring Prototype

### Days 1-2: Landing Page ✨ **CURRENT PRIORITY**
- [x] Define value proposition (English + Japanese)
- [x] Write landing page copy
  - [x] Hero section (headline + subheadline)
  - [x] Problem section (AI search is the new Google)
  - [x] Solution section (Monitor → Detect → Generate → Distribute → Measure)
  - [x] Features breakdown
  - [x] Pricing tiers ($49, $299, $999)
  - [x] Social proof / testimonials placeholder
  - [x] Beta signup CTA
- [x] Design/build landing page
  - [x] Tech choice: Next.js ✅
  - [x] Responsive design (Tailwind CSS)
  - [ ] Japanese version toggle (skipped for MVP)
- [x] Beta signup form (email capture via Formspree)
- [ ] Deploy to Vercel (requires Mhuman login)
- [ ] Share for feedback (Japanese Twitter/LinkedIn)

**Status:** 90% complete - Landing page built, needs deployment

**Location:** `~/Documents/ostrta/landing/`

**To Deploy:**
```bash
cd ~/Documents/ostrta/landing
vercel login      # Follow prompts
vercel --prod     # Deploy to production
```

**Success:** Live landing page with 10+ beta signups

---

### Days 3-4: Infrastructure Setup
- [ ] Create Render account
- [ ] Connect $5k credits
- [ ] Set up Postgres database
- [ ] Set up Redis
- [ ] Create GitHub repo: `ostrta-ai-reputation`
- [ ] Basic FastAPI backend structure
- [ ] Environment variables setup
- [ ] Deploy "Hello World" to Render

**Success:** Backend deployed and accessible

---

### Days 5-7: Monitoring Agent Prototype
- [ ] Query ChatGPT API (test with own brand)
- [ ] Query Perplexity API
- [ ] Query Claude API (Anthropic)
- [ ] Query Gemini API (Google)
- [ ] Store results in Postgres
- [ ] Simple detection logic (baseline comparison)
- [ ] Email report (send to self)
- [ ] Test with 2-3 different brands

**Success:** Working monitoring script, daily reports

---

## Week 2: Content Generation + Strategy Agent

### Days 8-10: Strategy Agent
- [ ] Gap analysis logic (what's missing/wrong in AI mentions)
- [ ] Content brief generation (topics, angles, keywords)
- [ ] Brand voice learning (scrape existing content)
- [ ] LangGraph workflow for strategy

**Success:** Given detection report, generates content strategy

---

### Days 11-14: Content Generation Agent
- [ ] Blog post generation (using strategy brief)
- [ ] LinkedIn post generation
- [ ] Twitter thread generation
- [ ] Brand voice consistency checks
- [ ] LangGraph workflow for content gen
- [ ] Human approval workflow (email with draft + approve/edit link)
- [ ] Quality testing (generate 10 articles, rate them)

**Success:** High-quality article draft from detected issue

---

## Week 3: Distribution + Measurement + Beta Launch

### Days 15-17: Distribution Agent
- [ ] WordPress API integration
- [ ] Medium API integration
- [ ] LinkedIn API integration (scheduling)
- [ ] Twitter API integration (scheduling)
- [ ] Publish workflow (after approval)
- [ ] Error handling + retries
- [ ] Publication confirmation

**Success:** Auto-publish approved content to blog/Medium/LinkedIn

---

### Days 18-19: Measurement Agent + Dashboard
- [ ] Re-run queries weekly
- [ ] Track mention frequency
- [ ] Track sentiment changes
- [ ] Compare week-over-week
- [ ] ROI calculation ("mentions increased 40%")
- [ ] Customer dashboard (Next.js)
  - [ ] View current detection results
  - [ ] Approve/edit generated content
  - [ ] View published content
  - [ ] See improvement metrics
- [ ] Stripe integration (billing)

**Success:** Customer can see their brand improving in AI search

---

### Days 20-21: Beta Launch
- [ ] Polish landing page (add demo video)
- [ ] Email beta signups (onboarding sequence)
- [ ] Onboard 5 beta customers
  - [ ] Set up their brands
  - [ ] Run first detection
  - [ ] Generate first content
  - [ ] Get approval
  - [ ] Publish
- [ ] Collect feedback
- [ ] Product Hunt launch post (draft)
- [ ] Japanese Twitter/LinkedIn announcement
- [ ] Case study (first customer)

**Success:** 5 beta customers using full loop, 3+ testimonials

---

## Success Metrics

### Week 1
- [x] Landing page live
- [ ] 10+ beta signups
- [ ] Backend deployed on Render
- [ ] Monitoring working for 1 test brand

### Week 2
- [ ] Content generation producing quality drafts
- [ ] Human approval workflow functional
- [ ] 20+ beta signups

### Week 3
- [ ] 5 beta customers onboarded
- [ ] End-to-end loop working (monitor → generate → publish → measure)
- [ ] First article published via system
- [ ] 3+ customer testimonials
- [ ] Product Hunt post ready

### Month 1 (Week 4)
- [ ] Convert 3 beta customers to paid (¥50k MRR)
- [ ] 2 case studies published
- [ ] Launch on Product Hunt

---

## Team Activation Schedule

**Week 1 (Now):**
- [ ] Spawn Marketing Agent (landing page copy)
- [ ] Spawn CEO Agent (strategic oversight)
- [ ] Spawn Product Agent (when technical work starts Day 3)

**Week 2:**
- [ ] Marketing Agent: Content marketing, beta recruitment
- [ ] Product Agent: LangGraph workflows, content quality

**Week 3:**
- [ ] Spawn Ops Agent (customer onboarding support)
- [ ] All agents: Beta launch coordination

---

## Daily Rhythm (Starting Week 1)

**9:00 JST:** CEO Agent check-in (review progress, blockers, priorities)  
**10:00 JST:** Product Agent standup (technical guidance when needed)  
**11:00 JST:** Marketing Agent (content creation, copy refinement)  
**EOD:** Mhuman updates this file with progress

---

## Current Status

**Date:** 2026-02-13  
**Week:** 1  
**Day:** 1  
**Current Focus:** Landing page (copy + design)  
**Blockers:** None  
**Next Milestone:** Landing page live + 10 beta signups

---

## Notes

- Keep human-in-loop for MVP (all content approved before publishing)
- Focus on quality > quantity
- Japan market first (Japanese landing page priority)
- Test with own brand throughout (dogfooding)
- Get beta customer feedback early and often

**Let's ship this.** 🚀
