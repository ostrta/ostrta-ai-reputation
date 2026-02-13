# Managing Multiple Projects with OpenClaw

**Guide for working on multiple projects without context pollution**

---

## 🎯 Overview

When working with OpenClaw AI agents across multiple projects, it's important to maintain **context isolation**. Each project should have its own team structure, memory files, and agent sessions without polluting other projects.

This guide explains how OSTRTA is structured and how to set up additional projects alongside it.

---

## 🗂️ Context Architecture

### Workspace-Level Context (Shared Across All Projects)

**Location:** `~/.openclaw/workspace/`

These files define the AI agent's core identity and remain consistent:

- **AGENTS.md** - General operating instructions (how the agent works)
- **SOUL.md** - Agent personality (who it is)
- **USER.md** - Information about you
- **IDENTITY.md** - Agent name and vibe
- **TOOLS.md** - Can be updated per project or kept general
- **HEARTBEAT.md** - Periodic tasks (can be project-specific)

**Think of these as the agent's "personality core" - stays the same regardless of which project you're working on.**

---

### Project-Level Context (Isolated Per Project)

Each project has its own isolated context:

**Directory Structure:**
```
~/Documents/
├── ostrta/                          # OSTRTA AI Reputation Manager
│   ├── TEAM.md                      # OSTRTA-specific team definitions
│   ├── README.md                    # Project overview
│   ├── STATUS.md                    # Current status
│   ├── SPRINT-PLAN.md               # Project roadmap
│   └── ... (other project files)
│
├── other-project/                   # Separate project
│   ├── TEAM.md                      # Different team structure
│   ├── README.md                    # Different project
│   └── ... (isolated context)
│
└── another-project/                 # Another separate project
    └── TEAM.md                      # Yet another team structure
```

**Memory Files:**
```
~/.openclaw/workspace/memory/
├── ostrta-ai-reputation-manager.md  # OSTRTA project memory
├── other-project-name.md            # Other project memory
├── 2026-02-13.md                    # Daily session logs
└── ... (date-based logs)
```

---

## 🤖 Team Definitions Are Per-Project

### Key Principle: Teams Live in Their Repo

Each project's **TEAM.md** file defines:
- Agent roles (CEO, Product, Marketing, Ops, etc.)
- Agent personalities
- Agent responsibilities
- Session labels (project-specific prefixes)
- Communication protocols

**Example:**

**OSTRTA Team** (`~/Documents/ostrta/TEAM.md`):
- `ostrta-ceo` - Strategic lead for AI Reputation Manager
- `ostrta-product` - LangGraph workflows, API integrations
- `ostrta-marketing` - Bilingual content, beta recruitment
- `ostrta-ops` - System health, customer success

**Other Project Team** (`~/Documents/other-project/TEAM.md`):
- `otherproject-lead` - Different role structure
- `otherproject-dev` - Different tech stack
- `otherproject-designer` - Different responsibilities

**No overlap. No pollution.**

---

## 🔄 How Context Switching Works

### When You Say "Let's Work on [Project]"

The AI agent automatically:

1. **Reads project-specific files:**
   - `~/Documents/[project]/README.md` - Quick overview
   - `~/Documents/[project]/TEAM.md` - Team structure
   - `~/Documents/[project]/STATUS.md` - Current state

2. **Loads project memory:**
   - `~/.openclaw/workspace/memory/[project-name].md` - Project-specific memory
   - Recent daily logs relevant to that project

3. **Spawns project-specific agents:**
   - Uses labels from that project's TEAM.md
   - Example: `ostrta-ceo` vs `otherproject-ceo`

4. **Stays isolated:**
   - All work references that project's files
   - No cross-contamination with other projects

---

## 📋 Setting Up a New Project

### Step 1: Clone/Create Project Directory

```bash
# Clone from GitHub (if existing)
cd ~/Documents
git clone <repo-url> new-project-name

# Or create new directory
mkdir ~/Documents/new-project-name
cd ~/Documents/new-project-name
git init
```

---

### Step 2: Create Project-Specific TEAM.md

**Template:**

```markdown
# [PROJECT NAME] AI Team

**Product:** [Brief description]
**Repository:** [GitHub URL]

---

## 👔 [Role 1] Agent

**Session Label:** `projectname-role1`

**Personality:** [Define personality]

**Context:**
- [Key project info]
- [Tech stack]
- [Goals]

**Responsibilities:**
- [What this agent does]

**Schedule:**
- Daily: [Time] - [Task]
- Weekly: [Time] - [Task]

**Deliverables:**
- [What they produce]

---

## 🛠️ [Role 2] Agent

[Similar structure...]

---

## 📊 Communication Protocols

### Human → AI
- Update `TEAM.md` or use `sessions_send`

### AI → Human
- Scheduled reports via cron
- Urgent notifications

### AI → AI
- Use `sessions_send` with agent labels
```

---

### Step 3: Create Project Memory File

The AI agent will automatically create:
```
~/.openclaw/workspace/memory/new-project-name.md
```

But you can also create it manually with initial context:

```markdown
# [Project Name] - Memory

**Started:** [Date]
**Status:** [Phase]

## Project Overview
[Brief description]

## Key Decisions
- [Decision 1]
- [Decision 2]

## Technical Context
- [Stack]
- [Architecture]

## Next Steps
- [TODO 1]
- [TODO 2]
```

---

### Step 4: Tell the Agent Which Project to Work On

**Example conversation:**

```
You: "Let's work on new-project now"

Agent: *Reads ~/Documents/new-project/TEAM.md*
        *Loads memory/new-project.md*
        *Switches context*

Agent: "Working on new-project. I see we're building [X] with [Y] tech stack. 
        What should I focus on?"
```

---

## 🧹 Best Practices for Context Isolation

### 1. Use Clear Project Labels

**Agent session labels should be project-specific:**
- OSTRTA: `ostrta-ceo`, `ostrta-product`, `ostrta-marketing`
- Other project: `otherproject-lead`, `otherproject-dev`

This prevents confusion when multiple projects have agents running.

---

### 2. Create Project-Specific Memory Files

**Don't put everything in one memory file.**

Instead:
- `memory/ostrta-ai-reputation-manager.md` - OSTRTA project
- `memory/other-project-name.md` - Other project
- `memory/2026-02-13.md` - Daily log (can mention multiple projects)

---

### 3. Use Project-Specific Cron Jobs

When setting up scheduled tasks:

```javascript
// OSTRTA CEO daily standup
{
  name: "OSTRTA CEO - Daily Standup",
  schedule: { kind: "cron", expr: "0 9 * * *" },
  payload: {
    kind: "agentTurn",
    message: "You are the CEO Agent for OSTRTA. Read ~/Documents/ostrta/TEAM.md..."
  }
}

// Other project daily standup (different time)
{
  name: "Other Project Lead - Daily Standup",
  schedule: { kind: "cron", expr: "0 10 * * *" },
  payload: {
    kind: "agentTurn",
    message: "You are the Lead for Other Project. Read ~/Documents/other-project/TEAM.md..."
  }
}
```

---

### 4. Maintain Separate Git Repositories

Each project should be its own Git repository:

```
~/Documents/ostrta/          → https://github.com/ostrta/ostrta-ai-reputation
~/Documents/other-project/   → https://github.com/you/other-project
```

**Don't mix project files in the same repo** (unless intentionally building a monorepo).

---

### 5. Update TOOLS.md When Switching Focus

The `~/.openclaw/workspace/TOOLS.md` file can be updated to reflect the current primary project:

```markdown
## Current Project: [Project Name]

**Project Doc:** `memory/project-name.md`

**Tech Stack:**
- [Stack for this project]

**Key APIs/Services:**
- [APIs for this project]
```

Or keep it general and let each project's README define its tools.

---

## 🚀 Example: Working on OSTRTA vs Another Project

### Scenario: You're building OSTRTA and a separate SaaS product

**Directory Structure:**
```
~/Documents/
├── ostrta/                    # AI Reputation Manager
│   ├── TEAM.md                # OSTRTA agents: CEO, Product, Marketing, Ops
│   ├── landing/               # Next.js landing page
│   └── ...
│
└── saas-product/              # Separate SaaS project
    ├── TEAM.md                # SaaS agents: Lead, Backend, Frontend
    ├── app/                   # Rails app
    └── ...
```

**Memory Files:**
```
~/.openclaw/workspace/memory/
├── ostrta-ai-reputation-manager.md    # OSTRTA context
├── saas-product-name.md               # SaaS context
└── 2026-02-13.md                      # Daily log (both projects)
```

**Agent Sessions:**
- OSTRTA: `ostrta-ceo`, `ostrta-product`, `ostrta-marketing`, `ostrta-ops`
- SaaS: `saas-lead`, `saas-backend`, `saas-frontend`

**Switching:**
```
You: "Let's work on OSTRTA landing page"
Agent: *Reads ~/Documents/ostrta/TEAM.md and memory/ostrta-ai-reputation-manager.md*

You: "Now let's switch to the SaaS product backend"
Agent: *Reads ~/Documents/saas-product/TEAM.md and memory/saas-product-name.md*
```

**No context pollution. Clean separation.**

---

## ⚠️ Common Pitfalls to Avoid

### ❌ Don't Do This:

1. **Mixing project files in one directory:**
   ```
   ~/Documents/projects/
   ├── ostrta-files/
   ├── saas-files/
   └── other-files/
   ```
   👎 Hard to maintain context isolation.

2. **Using generic agent labels across projects:**
   ```
   - ceo (which project?)
   - product (for what?)
   - marketing (for which product?)
   ```
   👎 Confusing when multiple projects are active.

3. **Putting all memory in one file:**
   ```
   memory/everything.md
   ```
   👎 Context becomes polluted, hard to separate concerns.

---

### ✅ Do This Instead:

1. **Separate directories per project:**
   ```
   ~/Documents/ostrta/
   ~/Documents/saas-product/
   ~/Documents/client-work/
   ```

2. **Project-specific labels:**
   ```
   - ostrta-ceo
   - saas-lead
   - clientwork-manager
   ```

3. **Project-specific memory:**
   ```
   memory/ostrta-ai-reputation-manager.md
   memory/saas-product-name.md
   memory/client-work-project.md
   ```

---

## 🎯 Summary

**Context isolation = cleaner AI collaboration**

✅ **Each project has:**
- Its own directory
- Its own TEAM.md (team structure)
- Its own memory file
- Its own agent session labels
- Its own Git repository

✅ **Shared across projects:**
- Agent core identity (SOUL.md, AGENTS.md)
- User profile (USER.md)
- Daily session logs (can mention multiple projects)

✅ **When switching projects:**
- Tell the agent which project
- It reads that project's context
- Work stays isolated

---

## 📚 References

- **OSTRTA Example:** This repository is an example of isolated project context
- **Agent Documentation:** `~/.openclaw/workspace/AGENTS.md`
- **Memory System:** `~/.openclaw/workspace/memory/`
- **OpenClaw Docs:** https://docs.openclaw.ai

---

**Now you can work on multiple projects with OpenClaw without context pollution!** 🚀

_Last updated: 2026-02-13_
