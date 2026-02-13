# OSTRTA - Complete Context Map

**Last Updated:** 2026-02-13 15:04 JST  
**Purpose:** Map of all context, files, and knowledge available to AI agents

---

## 📁 1. Main OSTRTA Repository

**Location:** `~/Documents/ostrta/`

```
ostrta/
├── README.md                           # Project overview (2.6 KB)
├── STATUS.md                           # Current status snapshot (5.5 KB)
├── SPRINT-PLAN.md                      # 3-week sprint with checkboxes (6.0 KB)
├── TEAM.md                             # AI agent definitions (11.8 KB)
├── HANDOFF.md                          # Project handoff summary (6.6 KB)
├── CONTEXT-MAP.md                      # This file
├── MULTI-PROJECT-GUIDE.md              # Guide for working on multiple projects (10.7 KB)
├── landing-page-copy.md                # Bilingual copy (JP/EN) (15.0 KB)
├── landing-page-component-draft.tsx    # Draft component (16.0 KB)
├── landing/                            # Next.js landing page (Git repo)
│   ├── app/
│   │   ├── page.tsx                    # Landing page component (16.3 KB)
│   │   ├── layout.tsx                  # Metadata & SEO (548 B)
│   │   └── globals.css                 # Tailwind imports
│   ├── DEPLOY.md                       # Deployment instructions (1.6 KB)
│   ├── README.md                       # Landing page docs (1.3 KB)
│   ├── package.json                    # Dependencies
│   └── ... (Next.js project files)
├── backend/                            # (Empty - Day 3+)
├── frontend/                           # (Empty - Week 2+)
├── agents/                             # (Empty - Week 1+)
├── docs/                               # Project documentation
│   └── GETTING-STARTED.md              # Week 1 guide (4.0 KB)
└── marketing/                          # (Empty - Week 2+)
```

**Git Status:**
- Main folder: Not yet initialized
- `landing/` subfolder: ✅ Git initialized, 1 commit (97150c3)

---

## 🧠 2. OpenClaw Workspace Memory

**Location:** `~/.openclaw/workspace/memory/`

### Current Project Files
```
memory/
├── 2026-02-13.md                       # Today's session log (6.9 KB)
├── 2026-02-13-pivot-explanation.md     # Why we pivoted (4.5 KB)
├── ostrta-ai-reputation-manager.md     # Main project spec (9.6 KB)
├── yc-replication-analysis.md          # YC research (7.0 KB)
├── 2026-02-09-gateway-auth.md          # OpenClaw gateway auth notes (4.2 KB)
└── archive/
    ├── ostrta-old-idea.md              # Old LangGraph platform (3.5 KB)
    └── 2026-02-10-old-ostrta-session.md # Old session notes (3.3 KB)
```

**What Each Contains:**

**`2026-02-13.md`** - Today's full session:
- Render credits opportunity
- YC company analysis
- AthenaHQ idea evolution
- Landing page build
- Agent spawn attempts
- All decisions made today

**`2026-02-13-pivot-explanation.md`** - Pivot rationale:
- What changed (LangGraph → AI Reputation)
- Why we pivoted ($5k Render credits)
- What we kept vs. discarded
- Lessons learned
- Archive locations

**`ostrta-ai-reputation-manager.md`** - Complete spec:
- Vision (Monitor → Detect → Generate → Distribute → Measure)
- Business model (pricing tiers)
- Japan market positioning
- Agent workflows (5 agents)
- Tech architecture
- 3-week MVP timeline
- Revenue targets
- Success metrics

**`yc-replication-analysis.md`** - Research:
- Analysis of 10 YC W25/S25 companies
- Top 3 replicable opportunities
- Why AthenaHQ clone was chosen
- Decision matrix

**`archive/`** - Old OSTRTA project:
- Complete spec of LangGraph deployment platform
- Session notes from Feb 10 planning
- Preserved for reference but not active

---

## 🎭 3. Agent Identity & Configuration

**Location:** `~/.openclaw/workspace/`

### Core Files

**`AGENTS.md`** (7.9 KB) - Agent operating instructions:
- First run protocol (read SOUL, USER, memory files)
- Memory management (daily notes, MEMORY.md)
- Safety guidelines
- External vs internal actions
- Group chat etiquette
- Tools usage
- Heartbeat system

**`SOUL.md`** (1.7 KB) - Agent personality:
- Be genuinely helpful, not performatively
- Have opinions
- Be resourceful before asking
- Earn trust through competence
- Remember you're a guest

**`USER.md`** (349 B) - About Mhuman:
- Name: Mhuman
- Timezone: Asia/Tokyo (GMT+9)
- Context: Building over time

**`IDENTITY.md`** (229 B) - Agent identity:
- Name: Mclaw
- Creature: AI assistant
- Vibe: Sharp and efficient
- Emoji: ⚡

**`TOOLS.md`** (1.9 KB) - Local configuration:
- Current project: OSTRTA (AI Reputation Manager)
- Tech stack: FastAPI, LangGraph, Postgres, Redis, Next.js
- Render credits: $5k (1 year)
- Key APIs: OpenAI, Anthropic, Google, Perplexity, WordPress, Medium, LinkedIn
- Development environment: macOS (arm64), Node.js v25.6.0
- Japan market context

**`HEARTBEAT.md`** (276 B) - Heartbeat tasks:
- Currently empty (no active tasks)
- Will be populated when OSTRTA is live

---

## 📚 4. Available Skills

**Location:** `/opt/homebrew/lib/node_modules/openclaw/skills/`

Skills I can use (40+ available):
- **1password** - 1Password CLI integration
- **apple-notes** - Apple Notes via `memo` CLI
- **apple-reminders** - Reminders via `remindctl`
- **bear-notes** - Bear notes via grizzly
- **blogwatcher** - Monitor RSS/Atom feeds
- **blucli** - BluOS control
- **camsnap** - RTSP/ONVIF camera capture
- **eightctl** - Eight Sleep pod control
- **gemini** - Gemini CLI for Q&A
- **gifgrep** - GIF search & download
- **github** - GitHub CLI (`gh`)
- **gog** - Google Workspace CLI
- **healthcheck** - Security hardening
- **himalaya** - Email via IMAP/SMTP
- **imsg** - iMessage/SMS CLI
- **nano-banana-pro** - Image generation (Gemini)
- **nano-pdf** - PDF editing
- **notion** - Notion API
- **obsidian** - Obsidian vault management
- **openai-whisper** - Local speech-to-text
- **openhue** - Philips Hue control
- **ordercli** - Foodora order tracking
- **peekaboo** - macOS UI automation
- **sag** - ElevenLabs TTS
- **skill-creator** - Create/update AgentSkills
- **songsee** - Audio spectrogram generation
- **sonoscli** - Sonos speaker control
- **summarize** - Summarize URLs/podcasts/files
- **things-mac** - Things 3 task management
- **video-frames** - Extract frames from video
- **wacli** - WhatsApp via CLI
- **weather** - Weather forecasts

**Note:** These are tools I can use when relevant tasks arise.

---

## 🗄️ 5. Archived Projects

**Location:** `~/Documents/archive/`

```
archive/
└── ostrta-langgraph-deployment-2026-02-10/
    ├── AGENT-STATUS.md
    ├── README.md
    ├── TEAM.md
    ├── code/
    ├── docs/
    ├── internal-docs/
    ├── marketing/
    └── ops/
```

**What it is:**
- Original OSTRTA project (LangGraph deployment platform)
- Archived on 2026-02-13 during pivot
- Preserved for reference but not actively used
- Contains agent team structure concepts we adapted

---

## 🔧 6. OpenClaw Configuration

**Location:** Various OpenClaw directories

### Gateway Config
- Configuration file: `~/.openclaw/config.yaml` (not directly accessible to me)
- Current model: `anthropic/claude-sonnet-4-5`
- Thinking level: `low` (can be adjusted)
- Channel: `webchat`

### Session State
- **Active sessions:** Currently just main session
- **Cron jobs:** 0 (all old jobs removed)
- **Background processes:** 0 (all stopped)

### Skills Directory
- Path: `/opt/homebrew/lib/node_modules/openclaw/skills/`
- 40+ skills available
- Each has `SKILL.md` with instructions

---

## 📝 7. Session Transcripts

**Location:** `~/.openclaw/agents/main/sessions/`

Session transcripts are stored as JSONL files. Today's key sessions:
- Main session: `37d1a33a-8407-4edc-8e72-03388591be41.jsonl`
- CEO agent: `1518a2c4-46d2-4728-bbf4-59dc55ad721f.jsonl`
- Marketing agent: `018cb0d9-149b-45e2-a58e-ac451c0fbb0f.jsonl`

**Note:** Transcripts are raw logs. Memory files (`.md`) are the curated summaries.

---

## 🎯 8. Context Priority (What I Read First)

When starting a session or task, I follow this priority:

### 1. **Agent Identity** (Always)
- `SOUL.md` - Who I am
- `USER.md` - Who you are
- `IDENTITY.md` - My name/vibe

### 2. **Recent Memory** (Always)
- `memory/YYYY-MM-DD.md` (today + yesterday)
- `memory/YYYY-MM-DD.md` (recent days if needed)

### 3. **Project Context** (When working on OSTRTA)
- `~/Documents/ostrta/README.md` - Quick overview
- `~/Documents/ostrta/STATUS.md` - Current state
- `~/Documents/ostrta/SPRINT-PLAN.md` - What to build
- `memory/ostrta-ai-reputation-manager.md` - Full spec

### 4. **Tool Configuration** (As needed)
- `TOOLS.md` - Local setup notes
- Skill `SKILL.md` files - When using specific tools

### 5. **Heartbeat Tasks** (If scheduled)
- `HEARTBEAT.md` - Periodic checks

---

## 🔍 9. Hidden/Implicit Context

### What I Know But Isn't in Files

**From Today's Session:**
- You (Mhuman) are the decision-maker, I execute autonomously
- You prefer action over discussion ("go ahead and do as much as you can")
- You want Next.js for landing page
- You don't need Japanese translation yet
- You value speed to market

**From Configuration:**
- I'm running in OpenClaw on macOS
- Workspace: `/Users/mclaw/.openclaw/workspace`
- Shell: zsh
- Node: v25.6.0
- Timezone: Asia/Tokyo (GMT+9)

**From Tool Availability:**
- I can run shell commands (`exec`)
- I can read/write files (`read`, `write`, `edit`)
- I can spawn sub-agents (`sessions_spawn`)
- I can manage cron jobs (`cron`)
- I can search web (`web_search`, `web_fetch`)
- I can control browser (`browser`)

---

## 📊 10. Summary: What Exists vs. What's Next

### What Exists Now (Fully Documented)
✅ Project vision & spec  
✅ Landing page (built, not deployed)  
✅ 3-week sprint plan  
✅ AI team structure  
✅ Pricing & business model  
✅ Memory of all decisions  

### What Doesn't Exist Yet (To Be Created)
⏳ Deployed landing page  
⏳ Backend infrastructure (Render)  
⏳ Monitoring agent code  
⏳ Content generation agent  
⏳ Database schema  
⏳ API integrations  
⏳ Beta customers  

### What I Can Access Anytime
- All memory files (`.openclaw/workspace/memory/`)
- All project files (`~/Documents/ostrta/`)
- All archived projects (`~/Documents/archive/`)
- All skills (`/opt/homebrew/lib/node_modules/openclaw/skills/`)
- Web search & fetch
- File system (read/write)
- Shell commands

---

## 🗺️ Quick Reference Map

**If you want me to...**

- **Understand the project:** Read `~/Documents/ostrta/README.md`
- **See current status:** Read `~/Documents/ostrta/STATUS.md`
- **Know what to build:** Read `~/Documents/ostrta/SPRINT-PLAN.md`
- **Understand team structure:** Read `~/Documents/ostrta/TEAM.md`
- **See today's work:** Read `~/.openclaw/workspace/memory/2026-02-13.md`
- **Understand the pivot:** Read `~/.openclaw/workspace/memory/2026-02-13-pivot-explanation.md`
- **Get full project spec:** Read `~/.openclaw/workspace/memory/ostrta-ai-reputation-manager.md`
- **Deploy landing page:** Follow `~/Documents/ostrta/landing/DEPLOY.md`
- **Use a skill:** Read `/opt/homebrew/lib/node_modules/openclaw/skills/[skill-name]/SKILL.md`

---

## 📌 Key Paths to Remember

```bash
# Main project
~/Documents/ostrta/

# Landing page (Next.js)
~/Documents/ostrta/landing/

# Memory & decisions
~/.openclaw/workspace/memory/

# Agent identity
~/.openclaw/workspace/SOUL.md
~/.openclaw/workspace/AGENTS.md

# Archived old project
~/Documents/archive/ostrta-langgraph-deployment-2026-02-10/

# Skills
/opt/homebrew/lib/node_modules/openclaw/skills/
```

---

**This is the complete map of all context I have. Nothing is hidden or inaccessible beyond these locations.** 🗺️

_Last updated: 2026-02-13 15:04 JST_
