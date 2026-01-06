# HK AI Coding Guide - Udviklingsstatus

**Projekt:** HK's Guide til AI Coding  
**Dato:** 6. januar 2026  
**Status:** I udvikling - Grundstruktur færdig

---

## ✅ Færdige Komponenter

### Design & Tema
- ✅ HK-branded farvetema (rød primærfarve #DC2626)
- ✅ Professionelt layout med sidebar navigation
- ✅ Responsivt design (desktop + mobil)
- ✅ HK Danmark logo integration
- ✅ Dark mode support

### Komponenter
- ✅ `CodeBlock` - Kopiérbar code block med syntax highlighting
- ✅ `AppSidebar` - Navigation med HK logo og collapsible menu
- ✅ Layout med Toaster for notifikationer
- ✅ Alle shadcn/ui komponenter installeret

### Data & Navigation
- ✅ `lib/content.ts` - Navigation struktur og fase-data
- ✅ Sidebar navigation med alle sektioner
- ✅ Breadcrumb navigation
- ✅ Progress indicators

---

## ✅ Færdige Sider (5 af 13)

### 1. Forside (`/`)
- ✅ Hero sektion med HK logo
- ✅ 3 hurtige CTA-kort (Ny til Vibe-Coding, Klar til at bygge, Brug for hjælp)
- ✅ 4-trins proces oversigt med kort
- ✅ Yderligere ressourcer sektion
- ✅ Alle links fungerer

### 2. Hvad er Vibe-Coding (`/kom-i-gang/vibe-coding`)
- ✅ Definition af Vibe-Coding
- ✅ AI-integrator rolle forklaring
- ✅ Ressourcer og links
- ✅ Navigation til næste side

### 3. At Prompte (`/kom-i-gang/at-prompte`)
- ✅ Definition af prompting
- ✅ 6 elementer i en god prompt (Rolle, Opgave, Format, Tone, Mål, Begrænsninger)
- ✅ Sammenligning: Dårlig vs. Bedre prompt
- ✅ **Kopiérbar prompt** med CodeBlock komponent
- ✅ Tips til bedre prompts

### 4. Ordforklaring (`/kom-i-gang/ordforklaring`)
- ✅ Søgbar ordliste
- ✅ 4 kategorier med tabs (AI & Vibe Coding, Værktøjer, Webudvikling, Data & Drift)
- ✅ Tabel med alle termer og definitioner
- ✅ Eksterne ressource links

### 5. Fase 1: Undersøgelse (`/processen/undersogelse`)
- ✅ Progress bar (1 af 4)
- ✅ Fase ikon og beskrivelse
- ✅ **Kopiérbar system prompt** (lang, komplet)
- ✅ Anbefalede platforme (Google AI Studio, Claude, ChatGPT)
- ✅ Accordion med "Hvordan virker det?" og "Tips"
- ✅ Navigation til næste fase

---

## ⏳ Manglende Sider (8 af 13)

### Processen (3 faser mangler)

#### 6. Fase 2: MVP (`/processen/mvp`)
- ⏳ Progress bar (2 af 4)
- ⏳ PRD Generator prompt (fra `docs/Prompts/2 - MVP.md`)
- ⏳ Interview-flow (Q1-Q10)
- ⏳ PRD skabelon (kopiérbar)
- ⏳ Navigation til fase 3

#### 7. Fase 3: Teknisk Design (`/processen/teknisk-design`)
- ⏳ Progress bar (3 af 4)
- ⏳ Tech Design prompt (fra `docs/Prompts/3 - Teknisk design.md`)
- ⏳ Spørgsmål til Vibe-Coderen (Q1-Q7)
- ⏳ Tech Design skabelon (kopiérbar)
- ⏳ Omkostnings-tabel
- ⏳ Navigation til fase 4

#### 8. Fase 4: Agents (`/processen/agents`)
- ⏳ Progress bar (4 af 4)
- ⏳ AGENTS.md generator prompt (fra `docs/Prompts/4 - Agents.md generator.md`)
- ⏳ Værktøjs-specifikke configs (Cursor, Windsurf, Claude, etc.)
- ⏳ Alle prompts kopiérbare
- ⏳ Completion CTA

### Best Practices (3 sider mangler)

#### 9. God Vibecoding (`/best-practices/god-vibecoding`)
- ⏳ Projektstruktur forklaring (fra `docs/god vibecoding.md`)
- ⏳ Folder tree diagram
- ⏳ 4 mapper forklaret:
  - agents.md
  - documentation.agent/
  - documentation/
  - memory/

#### 10. Funktioner i Henosia (`/best-practices/henosia`)
- ⏳ Liste af funktioner (fra `docs/funktioner i henosia.md`)
- ⏳ Upload billede
- ⏳ Edit mode
- ⏳ Selection tree
- ⏳ Plan / Build mode
- ⏳ Custom instructions
- ⏳ Assets

#### 11. Hyppige Fejl (`/best-practices/hyppige-fejl`)
- ⏳ 4 hyppige fejl (fra `docs/Hyppige fejl.md`)
- ⏳ Alert-bokse for hver fejl
- ⏳ Løsninger og forebyggelse
- ⏳ Tjekliste før deployment

### Ressourcer (2 sider mangler)

#### 12. Links & Værktøjer (`/ressourcer/links`)
- ⏳ Kategoriserede link-kort (fra `docs/Links.md`)
- ⏳ 8 kategorier:
  - Cloud IDE (Henosia, Google AI Studio)
  - IDE værktøjer (Antigravity, VS Code, Cursor)
  - Asynkrone agenter (Google Jules, Copilot)
  - Database (Supabase)
  - Email (Resend)
  - AI Agents (OpenRouter)
  - Dokumentation (Context7)
  - Layout (Stitch)

#### 13. Om Bo Sundgaard (`/ressourcer/om`)
- ⏳ Profil sektion (fra `docs/Om mig.md`)
- ⏳ Rolle: Faglig konsulent i HK/Privat
- ⏳ Projekter med links:
  - uniteapps.dk
  - forhandl.dk
  - Uniteapps (Python)

---

## 📁 Filstruktur

```
app/
├── layout.tsx ✅
├── page.tsx ✅
├── globals.css ✅
├── kom-i-gang/
│   ├── vibe-coding/page.tsx ✅
│   ├── at-prompte/page.tsx ✅
│   └── ordforklaring/page.tsx ✅
├── processen/
│   ├── undersogelse/page.tsx ✅
│   ├── mvp/page.tsx ⏳
│   ├── teknisk-design/page.tsx ⏳
│   └── agents/page.tsx ⏳
├── best-practices/
│   ├── god-vibecoding/page.tsx ⏳
│   ├── henosia/page.tsx ⏳
│   └── hyppige-fejl/page.tsx ⏳
└── ressourcer/
    ├── links/page.tsx ⏳
    └── om/page.tsx ⏳

components/
├── app-sidebar.tsx ✅
├── code-block.tsx ✅
└── ui/ ✅ (alle shadcn komponenter)

lib/
├── content.ts ✅
└── utils.ts ✅

docs/ (kilde-dokumenter)
├── Prompts/
│   ├── 1 - Undersøgelse.md ✅ (brugt)
│   ├── 2 - MVP.md ⏳
│   ├── 3 - Teknisk design.md ⏳
│   └── 4 - Agents.md generator.md ⏳
├── at-prompte.md ✅ (brugt)
├── Om Vibe-coding.md ✅ (brugt)
├── ordforklaring.md ✅ (brugt)
├── god vibecoding.md ⏳
├── funktioner i henosia.md ⏳
├── Hyppige fejl.md ⏳
├── Links.md ⏳
└── Om mig.md ⏳
```

---

## 🎯 Næste Skridt

### Prioritet 1: Færdiggør Processen (Fase 2-4)
Disse er kernen af guiden og indeholder de vigtigste prompts:
1. Fase 2: MVP
2. Fase 3: Teknisk Design
3. Fase 4: Agents

### Prioritet 2: Best Practices
Vigtige for at undgå fejl:
1. Hyppige Fejl
2. God Vibecoding
3. Funktioner i Henosia

### Prioritet 3: Ressourcer
Afsluttende sider:
1. Links & Værktøjer
2. Om Bo Sundgaard

---

## 🔧 Teknisk Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Toast Notifications:** Sonner

---

## 📝 Noter

- Alle prompts skal være i kopiérbare CodeBlock komponenter
- Hver fase-side skal have progress bar
- Alle sider skal have navigation til næste/forrige
- Responsivt design er kritisk (mobil + desktop)
- HK branding skal være konsistent gennem hele sitet

---

**Sidst opdateret:** 6. januar 2026, 10:28
