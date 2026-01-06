# Stitch AI Redesign Prompt - HK's Guide til AI Coding

## Overordnet Vision
Redesign HK's Guide til AI Coding til en moderne, professionel og brugervenlig dokumentationsside med fokus på læsbarhed, navigation og visuelt hierarki. Designet skal være clean, tilgængeligt og inspireret af moderne dokumentationssider som Vercel, Stripe og Linear.

## Nuværende Arkitektur (BEVAR DENNE STRUKTUR)

### Teknisk Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Layout**: SidebarProvider med AppSidebar komponent
- **Sprog**: Dansk

### Filstruktur (BEVAR)
```
app/
├── layout.tsx (root layout med SidebarProvider)
├── page.tsx (forside)
├── globals.css (global styling)
├── kom-i-gang/
│   ├── vibe-coding/page.tsx
│   ├── at-prompte/page.tsx
│   └── ordforklaring/page.tsx
├── processen/
│   ├── undersogelse/page.tsx
│   ├── mvp/page.tsx (skal oprettes)
│   ├── teknisk-design/page.tsx (skal oprettes)
│   └── agents/page.tsx (skal oprettes)
└── best-practices/
    ├── god-vibecoding/page.tsx (skal oprettes)
    ├── henosia/page.tsx (skal oprettes)
    └── hyppige-fejl/page.tsx (skal oprettes)
└── ressourcer/
    ├── links/page.tsx (skal oprettes)
    └── om/page.tsx (skal oprettes)

components/
├── app-sidebar.tsx (BEVAR - kun styling opdateringer)
├── code-block.tsx (BEVAR - kun styling opdateringer)
└── ui/ (shadcn/ui komponenter - BEVAR)

lib/
└── content.ts (navigation struktur - BEVAR)
```

## Menustruktur (BEVAR DENNE NØJAGTIGT)

```typescript
// Fra lib/content.ts - BEVAR DENNE STRUKTUR
navigation = [
  {
    title: "Hjem",
    href: "/",
    icon: "home"
  },
  {
    title: "Kom i Gang",
    href: "/kom-i-gang",
    icon: "book-open",
    items: [
      { title: "Hvad er Vibe-Coding?", href: "/kom-i-gang/vibe-coding" },
      { title: "At Prompte", href: "/kom-i-gang/at-prompte" },
      { title: "Ordforklaring", href: "/kom-i-gang/ordforklaring" }
    ]
  },
  {
    title: "Processen",
    href: "/processen",
    icon: "rocket",
    items: [
      { title: "Fase 1: Undersøgelse", href: "/processen/undersogelse" },
      { title: "Fase 2: MVP", href: "/processen/mvp" },
      { title: "Fase 3: Teknisk Design", href: "/processen/teknisk-design" },
      { title: "Fase 4: Agents", href: "/processen/agents" }
    ]
  },
  {
    title: "Best Practices",
    href: "/best-practices",
    icon: "lightbulb",
    items: [
      { title: "God Vibecoding", href: "/best-practices/god-vibecoding" },
      { title: "Funktioner i Henosia", href: "/best-practices/henosia" },
      { title: "Hyppige Fejl", href: "/best-practices/hyppige-fejl" }
    ]
  },
  {
    title: "Ressourcer",
    href: "/ressourcer",
    icon: "link",
    items: [
      { title: "Links & Værktøjer", href: "/ressourcer/links" },
      { title: "Om Bo Sundgaard", href: "/ressourcer/om" }
    ]
  }
]
```

## Design Elementer at Implementere

### 1. Sidebar (components/app-sidebar.tsx)
**OPDATER KUN STYLING - BEVAR FUNKTIONALITET**

- **Bredde**: 280px (desktop), fuld bredde (mobile)
- **Baggrund**: Subtil gradient eller solid farve med let border
- **Header**:
  - HK Danmark logo (40x40px) - BEVAR
  - "HK's Guide til AI Coding" tekst - BEVAR
  - Tilføj subtle hover effekt
- **Navigation**:
  - Collapsible sections med smooth animations
  - Active state: Tydelig highlight med accent farve og border-left
  - Hover state: Subtle background change
  - Icons: Lucide icons (BEVAR nuværende)
  - Typography: Medium weight for parent items, regular for children
  - Spacing: Generøs padding (py-2 px-3)

### 2. Main Content Area
**OPDATER ALLE PAGE.TSX FILER**

- **Max width**: 1200px (prose-xl for tekstindhold)
- **Padding**: Responsiv (px-4 md:px-8 lg:px-12)
- **Typography**:
  - H1: text-4xl md:text-5xl, font-bold, mb-6
  - H2: text-3xl md:text-4xl, font-bold, mb-4, mt-12
  - H3: text-2xl md:text-3xl, font-semibold, mb-3, mt-8
  - Body: text-base md:text-lg, leading-relaxed
  - Code blocks: Brug CodeBlock komponent med syntax highlighting

### 3. Forside (app/page.tsx)
**KOMPLET REDESIGN**

- **Hero Section**:
  - Centered layout
  - HK logo (80x80px)
  - Stor, fed headline: "HK's Guide til AI Coding"
  - Subheadline: "Lær at bygge software med AI - ingen kodeerfaring nødvendig"
  - 2 CTA buttons: "Kom i gang" (primary) + "Se processen" (secondary)
  - Gradient background eller subtle pattern

- **Quick Start Cards** (3 kolonner):
  - "Ny til Vibe-Coding?" → Link til /kom-i-gang/vibe-coding
  - "Klar til at bygge?" → Link til /processen/undersogelse
  - "Brug for hjælp?" → Link til /best-practices/hyppige-fejl
  - Hver card: Icon, titel, beskrivelse, hover effekt

- **4-Trins Processen** (2x2 grid):
  - Fase nummer badge
  - Icon (Search, FileText, Code, Bot)
  - Titel og beskrivelse
  - Arrow icon ved hover
  - Link til hver fase

- **Ressourcer Section**:
  - 2x2 grid med links til:
    - Ordforklaring
    - Links & Værktøjer
    - God Vibecoding
    - Funktioner i Henosia
  - Compact cards med icon + tekst

### 4. Content Pages (alle page.tsx filer)
**STANDARDISERET LAYOUT**

```tsx
// Standard struktur for alle content pages:
<div className="max-w-4xl mx-auto">
  {/* Breadcrumb navigation */}
  <nav className="mb-8">...</nav>
  
  {/* Page header */}
  <header className="mb-12">
    <h1>Sidetitel</h1>
    <p className="text-xl text-muted-foreground">Beskrivelse</p>
  </header>
  
  {/* Main content */}
  <article className="prose prose-lg dark:prose-invert max-w-none">
    {/* Markdown content */}
  </article>
  
  {/* Navigation footer */}
  <footer className="mt-16 pt-8 border-t">
    <div className="flex justify-between">
      <Link>← Forrige</Link>
      <Link>Næste →</Link>
    </div>
  </footer>
</div>
```

### 5. UI Komponenter at Bruge (fra shadcn/ui)

- **Card**: For alle card-baserede layouts
- **Badge**: For fase numre og tags
- **Button**: Primary, secondary, outline variants
- **Separator**: Mellem sektioner
- **Alert**: For vigtige noter og advarsler
- **Accordion**: For FAQ eller collapsible content
- **Tabs**: Hvis relevant for content organisering

### 6. Code Block Komponent (components/code-block.tsx)
**OPDATER STYLING**

- Syntax highlighting (brug Shiki eller Prism)
- Copy button i top-right corner
- Language badge
- Line numbers (optional)
- Dark theme optimized
- Rounded corners og subtle shadow

### 7. Farvepalette
Denne pallette bruges nu, su skal lave en ny. Eneste konstant er HKs logo og farven moderne blå som er i logoet.


**Primær**: 
- HK brand farve (fra logo) eller moderne blå (#0066FF)
- Accent: Komplementær farve

**Neutral**:
- Background: #FFFFFF (light) / #0A0A0A (dark)
- Surface: #F8F9FA (light) / #1A1A1A (dark)
- Border: #E5E7EB (light) / #2A2A2A (dark)

**Semantic**:
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
- Info: #3B82F6

### 8. Responsivt Design

- **Mobile** (<768px): 
  - Sidebar som drawer/sheet
  - Single column layouts
  - Reduced padding
  - Stacked navigation

- **Tablet** (768px-1024px):
  - Sidebar synlig
  - 2-column grids hvor relevant

- **Desktop** (>1024px):
  - Full sidebar
  - 3-column grids
  - Optimal læsebredde (max-w-4xl for tekst)

### 9. Animationer og Transitions

- Smooth page transitions
- Hover states på alle interaktive elementer
- Collapsible animations (framer-motion eller CSS)
- Scroll-triggered animations (optional, subtle)

### 10. Accessibility

- Semantic HTML
- ARIA labels hvor nødvendigt
- Keyboard navigation
- Focus states
- Color contrast (WCAG AA minimum)
- Alt text på alle billeder

## Implementerings Rækkefølge

1. **Opdater globals.css** med nye farver og typography
2. **Redesign app-sidebar.tsx** (kun styling, bevar funktionalitet)
3. **Redesign app/page.tsx** (forside)
4. **Opdater app/layout.tsx** hvis nødvendigt (minimal ændring)
5. **Standardiser alle content pages** med ny layout
6. **Opdater code-block.tsx** med bedre styling
7. **Tilføj manglende pages** (mvp, teknisk-design, agents, etc.)
8. **Test responsivt design** på alle breakpoints
9. **Accessibility audit**
10. **Performance optimization**

## Vigtige Noter

- **BEVAR** al eksisterende funktionalitet
- **BEVAR** filstruktur og routing
- **BEVAR** navigation struktur fra lib/content.ts
- **OPDATER** kun styling og layout
- **TILFØJ** manglende pages med placeholder content
- **BRUG** kun shadcn/ui komponenter (ingen nye dependencies)
- **FØLG** Tailwind CSS best practices
- **OPTIMER** for læsbarhed og brugeroplevelse

## Success Kriterier

✅ Moderne, professionelt design
✅ Forbedret læsbarhed og typografi
✅ Intuitiv navigation
✅ Responsivt på alle devices
✅ Hurtig load time
✅ Accessible (WCAG AA)
✅ Konsistent design system
✅ Alle links virker
✅ Ingen broken functionality

---

**Start med at redesigne forsiden (app/page.tsx) og sidebar (components/app-sidebar.tsx) først, så jeg kan godkende retningen før du fortsætter med resten.**
