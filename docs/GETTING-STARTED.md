# Getting Started - OSTRTA AI Reputation Manager

## What We're Building

**OSTRTA** monitors how brands appear on AI search engines (ChatGPT, Perplexity, Claude, Gemini), detects issues, generates corrective content, distributes it, and measures improvements.

**Think:** SEO for the AI era, but we don't just report—we fix.

---

## Week 1 Objectives (Current)

### Infrastructure Setup
- [ ] Create Render account
- [ ] Connect $5k credits
- [ ] Set up Postgres database
- [ ] Set up Redis
- [ ] Create GitHub repo: `ostrta-ai-reputation`

### Monitoring Agent
- [ ] Build FastAPI backend
- [ ] Create monitoring agent (LangGraph)
- [ ] Query ChatGPT API (brand mentions)
- [ ] Query Perplexity API
- [ ] Query Claude API (Anthropic)
- [ ] Query Gemini API (Google)
- [ ] Store baseline results in Postgres

### Detection Logic
- [ ] Compare current vs. baseline
- [ ] Sentiment analysis
- [ ] Flag missing mentions
- [ ] Flag negative sentiment
- [ ] Flag factual errors

### Reporting
- [ ] Daily detection report (email)
- [ ] Simple dashboard (view current results)

### Testing
- [ ] Test with own brand (OpenClaw or personal)
- [ ] Verify detection works
- [ ] Refine query templates

---

## Tech Setup

### Local Development
```bash
# Clone repo (once created)
git clone https://github.com/[username]/ostrta-ai-reputation
cd ostrta-ai-reputation

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Frontend setup
cd ../frontend
npm install

# Run locally
# Backend: uvicorn main:app --reload
# Frontend: npm run dev
```

### Environment Variables
```bash
# .env
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...
PERPLEXITY_API_KEY=...
```

### Render Deployment
```bash
# Web Service (FastAPI)
# Build Command: pip install -r requirements.txt
# Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT

# Background Worker (Agents)
# Build Command: pip install -r requirements.txt
# Start Command: python workers/monitoring_agent.py
```

---

## Key Files

```
ostrta-ai-reputation/
├── backend/
│   ├── main.py                  # FastAPI app
│   ├── agents/
│   │   ├── monitoring.py        # Monitoring agent
│   │   ├── detection.py         # Detection logic
│   │   ├── strategy.py          # Strategy agent (Week 2)
│   │   ├── content_gen.py       # Content generation (Week 2)
│   │   └── distribution.py      # Distribution agent (Week 3)
│   ├── models/
│   │   ├── brand.py             # Brand model
│   │   ├── query.py             # Query model
│   │   └── result.py            # Result model
│   ├── services/
│   │   ├── ai_platforms.py      # AI platform integrations
│   │   ├── sentiment.py         # Sentiment analysis
│   │   └── reporting.py         # Report generation
│   └── requirements.txt
├── frontend/
│   ├── pages/
│   ├── components/
│   └── package.json
├── docs/
└── README.md
```

---

## Development Workflow

### Daily
1. Morning: Review AI team agent outputs (cron reports)
2. Build: Focus on current week's objectives
3. Test: Manual testing + automated tests
4. Evening: Commit progress, update AI agents

### Weekly
1. Monday: Sprint planning (Product agent)
2. Wednesday: Mid-week check-in (CEO agent)
3. Friday: Week review, next week prep (all agents)

---

## Questions to Answer This Week

1. Which AI platforms have APIs we can use?
2. What queries should we run for each brand? (industry-specific)
3. How do we store baseline results effectively?
4. How sensitive should detection be? (avoid false positives)
5. What does a good daily report look like?

---

## Success Criteria (Week 1)

✅ Render infrastructure running  
✅ Monitoring agent queries all 4 platforms  
✅ Results stored in Postgres  
✅ Detection logic flags issues  
✅ Daily email report generated  
✅ Tested with 1 brand (own brand)  

**Deliverable:** Working monitoring system for 1 test brand

---

**Let's start building!** 🚀
