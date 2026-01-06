# Del IV - Generer AGENTS.md og AI Agent-konfigurationsfiler

Jeg hjælper dig med at oprette instruktionsfilerne, der skal guide din AI-kodeassistent til at bygge din MVP. Det er disse filer, der får magien til at ske!

<details>
<summary><b>📁 Påkrævede dokumenter - Vedhæft venligst</b></summary>

### Påkrævet:

1. **PRD Dokument** (fra Del II) - Definerer HVAD der skal bygges
2. **Teknisk Design Dokument** (fra Del III) - Definerer HVORDAN det skal bygges

### Valgfrit men nyttigt:

* **Research Resultater** (fra Del I) - Yderligere kontekst

Vedhæft disse i ethvert format (.txt, .pdf, .docx, .md) eller indsæt teksten, hvis den er kort.

</details>

Når du har vedhæftet dine filer, skal du bekræfte dit setup:

**A) Teknisk Niveau:**

* **Vibe-coder** - AI gør det hele, jeg guider og tester.

**B) Hvilke(t) AI-værktøj(er) vil du bruge?** (Du kan vælge flere)

* 1. **Claude Code** - Terminal-baseret agent


* 2. **Gemini CLI** - Gratis terminal-agent


* 3. **Google Antigravity** - Googles agentiske IDE


* 4. **Cursor** - AI-drevet IDE


* 5. **Windsurf** - Begyndervenlig IDE


* 6. **Cline** - Open source VS Code udvidelse


* 7. **GitHub Copilot** - I VS Code


* 8. **Bolt.new / Lovable** - No-code platforme


* 9. **Aider** - CLI pair-programmer der bruger AGENTS.md til kontekst



Vedhæft venligst filer og skriv værktøjsnumrene (f.eks. "4, 5"):

---

## Instruktioner til AI-Assistenten

<details>
<summary><b>🤖 KRITISK: Genereringsregler & Logik</b></summary>

### 🎯 Dit Mål

Du er en ekspert Tech Lead, der opsætter et **Progressive Disclosure** dokumentationssystem for en AI Agent.
Dit output skal være **modulært** for at forhindre overbelastning af kontekstvinduet.

1. **Master Plan (`AGENTS.md`)**: Overordnet kontekst, roadmap og aktiv status.
2. **Detaljerede Dokumenter (`agent_docs/`)**: Specifikke implementeringsdetaljer.
3. **Værktøjs-configs**: Kortfattede henvisninger til ovenstående.

### 🧠 Retningslinjer for Indholdsudtræk

* **Fra PRD:** Udtræk præcise funktionsnavne, user stories, succesmålinger og begrænsninger.
* **Fra Teknisk Design:** Udtræk den præcise tech stack, arkitekturbeslutninger og implementeringstilgange.
* **Sprog Niveau:** Tilpas forklaringer i `agent_docs/` til en **Vibe-coder**.
* Forklar *koncepter* enkelt, fokuser på "hvad vi skal gøre nu".
* Undgå tung teknisk jargon, hvor det ikke er nødvendigt.


* **Vær Specifik:** Erstat alle pladsholdere i klammer med faktiske projektdetaljer.
* **Brug Eksempler:** Inkluder kodeeksempler med kommentarer, der forklarer "hvorfor".

### 🧠 High-Order Prompts (Meta-kognition)

Inkluder disse adfærdsinstruktioner i AGENTS.md for at forbedre agentens ræsonnement:

```markdown
## 🧠 Hvordan jeg skal tænke
1. **Forstå Hensigten Først**: Før du svarer, skal du identificere, hvad brugeren faktisk har brug for.
2. **Stil KUN ÉT Spørgsmål ad Gangen**: Dette er kritisk. Overvæld aldrig brugeren. Hvis du mangler information, så stil ét specifikt spørgsmål og vent på svar.
3. **Planlæg Før Kodning**: Skitser tilgangen, få godkendelse, og implementer derefter.
4. **Test Efter Ændringer**: Verificer at hver ændring virker, før du går videre.
5. **Forklar Trade-offs**: Når du anbefaler noget, så nævn alternativer kort.

```

### 🚫 Anti-Patterns at Inkludere

Tilføj disse til værktøjs-configs for at forhindre almindelige AI-fejl:

```markdown
## ⚠️ Hvad man IKKE må gøre
- Slet IKKE filer uden eksplicit bekræftelse
- Modificer IKKE databaseskemaer uden en backup-plan
- Tilføj IKKE funktioner, der ikke er i den nuværende fase
- Spring IKKE tests over for "simple" ændringer
- Stil IKKE flere spørgsmål i samme svar

```

### 🚫 "Less is More" for Configs

* Læg **IKKE** store tekstblokke ind i `CLAUDE.md` eller `.cursorrules`.
* Læg i stedet det indhold i `agent_docs/code_patterns.md` eller `agent_docs/tech_stack.md`.
* Konfigurationsfilerne skal blot *pege* AI'en mod den rette dokumentation.

</details>

Efter at have modtaget filerne, udtræk følgende:

**Fra PRD (SKAL UDTRÆKKES):**

* Produktnavn og en-linjes beskrivelse
* Primær user story (præcis tekst)
* Alle "must-have" funktioner (præcis liste)
* "Nice-to-have" funktioner (præcis liste)
* IKKE i MVP funktioner (præcis liste)
* Succesmålinger (alle sammen)
* UI/UX krav (design ord/vibe)
* Tidslinje og begrænsninger

**Fra Teknisk Design (SKAL UDTRÆKKES):**

* Komplet tech stack (frontend, backend, database, deployment)
* Projektstruktur (præcis mappe-layout)
* Databaseskema (hvis angivet)
* Implementeringstilgang for hver funktion
* Deployment platform og trin
* AI værktøjsanbefalinger

---

## Generer AGENTS.md (Universelle Instruktioner)

### 1. Opret `AGENTS.md` (Master Plan)

Generer denne fil i projektets rod. Det skal være den primære sandhedskilde for projektstatus og overordnede mål.

```markdown
# AGENTS.md - Master Plan for [App Navn]

## 🎯 Projekt overblik
**App:** [App Navn]
**Mål:** [En-linjes beskrivelse]
**Stack:** [Tech Stack]
**Nuværende Fase:** Fase 1 - Fundament

## 🧠 Hvordan jeg skal tænke
1. **Forstå Hensigten Først**: Før du svarer, skal du identificere, hvad brugeren faktisk har brug for.
2. **Stil KUN ÉT Spørgsmål ad Gangen**: Dette er kritisk. Hvis du mangler information, så stil ét specifikt spørgsmål og vent på svar.
3. **Planlæg Før Kodning**: Skitser tilgangen, få godkendelse, og implementer derefter.
4. **Test Efter Ændringer**: Verificer at hver ændring virker, før du går videre.

## 📁 Kontekst Filer
Referer til disse for detaljer (indlæs kun når nødvendigt):
- `agent_docs/tech_stack.md`: Tech stack & biblioteker
- `agent_docs/code_patterns.md`: Kodestil & mønstre
- `agent_docs/product_requirements.md`: Fuld PRD

## 🔄 Nuværende Tilstand (Opdater Dette!)
**Sidst Opdateret:** [Dato]
**Arbejder På:** [Nuværende opgave]
**Nyligt Fuldført:** [Sidst fuldførte punkt]
**Blokeret Af:** [Eventuelle blokeringer, eller "Ingen"]

## 🚀 Roadmap
### Fase 1: Fundament
- [ ] Initialiser projekt
- [ ] Opsæt database

### Fase 2: Kernefunktioner
- [ ] [Funktion 1]
- [ ] [Funktion 2]

## ⚠️ Hvad man IKKE må gøre
- Slet IKKE filer uden eksplicit bekræftelse
- Modificer IKKE databaseskemaer uden en backup-plan
- Tilføj IKKE funktioner, der ikke er i den nuværende fase
- Spring IKKE tests over for "simple" ændringer

```

### 2. Opret `agent_docs/` Mappen

Opret en mappe kaldet `agent_docs` og tilføj disse filer. **Fyld dem med RIGE DETALJER fra kildedokumenterne.**

#### `agent_docs/tech_stack.md`

*Instruktioner: List hvert bibliotek, version og setup-kommando fra det Tekniske Design.*

```markdown
# Tech Stack & Værktøjer
- **Frontend:** [Framework]
- **Backend:** [Framework]
- **Database:** [Database]
- **Styling:** [Library]

// [Eksempel på komponent-kode for deres stack]

```

## Fejlhåndtering

```javascript
// [Eksempel på fejlhåndteringsmønster]

```

## Navngivningskonventioner

* [List konventioner]

```

#### `agent_docs/product_requirements.md`
*Instruktioner: Kopier kernekravene, user stories og succesmålinger fra PRD.*
```markdown
# Produktkrav
[Indhold fra PRD]

```

#### `agent_docs/testing.md`

*Instruktioner: Definer teststrategien baseret på det Tekniske Design.*

```markdown
# Teststrategi
- **Unit Tests:** [Værktøj]
- **E2E Tests:** [Værktøj]
- **Manuelle Tjek:** [Liste]

```

---

## Generer Værktøjs-specifikke Konfigurationsfiler

Baseret på de værktøjer de valgte, generer de passende konfigurationsfiler nedenfor. Hver fil skal referere til AGENTS.md som den primære kilde og tilføje værktøjs-specifik adfærd.

### For Claude Code Brugere - CLAUDE.md:

Brug denne præcise skabelon, udfyld med projekt-specifikke detaljer:

```markdown
# CLAUDE.md - Claude Code Konfiguration for [App Navn]

## 🎯 Projekt Kontekst
**App:** [App Navn]
**Stack:** [Tech Stack]
**Stadie:** MVP Udvikling
**Bruger Niveau:** Vibe-coder

## 📋 Direktiver
1. **Master Plan:** Læs altid `AGENTS.md` først. Den indeholder nuværende fase og opgaver.
2. **En Ting ad Gangen:** Stil kun ét spørgsmål ad gangen.
3. **Dokumentation:** Referer til `agent_docs/` for detaljer om tech stack, mønstre og tests.
4. **Inkrementel Byg:** Byg én lille funktion ad gangen. Test hyppigt.
5. **Ingen Linting:** Ager ikke som en linter. Brug `npm run lint` hvis nødvendigt.
6. **Kommunikation:** Vær kortfattet. Forklar din plan før du implementerer.

## 🛠 Kommandoer
- `npm run dev` - Start server
- `npm test` - Kør tests
- `npm run lint` - Tjek kodestil

```

### For Cursor Brugere - .cursorrules:

```markdown
# Cursor Regler for [App Navn]

## 🎯 Projekt Kontekst
**App:** [App Navn]
**Stack:** [Tech Stack]
**Stadie:** MVP Udvikling
**Bruger Niveau:** Vibe-coder

## 📋 Direktiver
1. **Master Plan:** Læs altid `AGENTS.md` først. Den indeholder nuværende fase og opgaver.
2. **En Ting ad Gangen:** Stil kun ét spørgsmål ad gangen.
3. **Dokumentation:** Referer til `agent_docs/` for detaljer om tech stack, mønstre og tests.
4. **Inkrementel Byg:** Byg én lille funktion ad gangen. Test hyppigt.
5. **Ingen Linting:** Ager ikke som en linter. Brug `npm run lint` hvis nødvendigt.
6. **Kommunikation:** Vær kortfattet. Forklar din plan før du implementerer.

## 🛠 Kommandoer
- `npm run dev` - Start server
- `npm test` - Kør tests
- `npm run lint` - Tjek kodestil

```

### For Windsurf Brugere - .windsurfrules:

```markdown
# Windsurf Regler for [App Navn]

## 🎯 Projekt Kontekst
**App:** [App Navn]
**Stack:** [Tech Stack]
**Stadie:** MVP Udvikling
**Bruger Niveau:** Vibe-coder

## 📋 Direktiver
1. **Master Plan:** Læs altid `AGENTS.md` først. Den indeholder nuværende fase og opgaver.
2. **En Ting ad Gangen:** Stil kun ét spørgsmål ad gangen.
3. **Dokumentation:** Referer til `agent_docs/` for detaljer om tech stack, mønstre og tests.
4. **Inkrementel Byg:** Byg én lille funktion ad gangen. Test hyppigt.
5. **Ingen Linting:** Ager ikke som en linter. Brug `npm run lint` hvis nødvendigt.
6. **Kommunikation:** Vær kortfattet. Forklar din plan før du implementerer.

## 🛠 Kommandoer
- `npm run dev` - Start server
- `npm test` - Kør tests
- `npm run lint` - Tjek kodestil

```

### For Gemini CLI Brugere - GEMINI.md:

```markdown
# GEMINI.md - Gemini CLI Konfiguration for [App Navn]

## 🎯 Projekt Kontekst
**App:** [App Navn]
**Stack:** [Tech Stack]
**Stadie:** MVP Udvikling
**Bruger Niveau:** Vibe-coder

## 📋 Direktiver
1. **Master Plan:** Læs altid `AGENTS.md` først. Den indeholder nuværende fase og opgaver.
2. **En Ting ad Gangen:** Stil kun ét spørgsmål ad gangen.
3. **Dokumentation:** Referer til `agent_docs/` for detaljer om tech stack, mønstre og tests.
4. **Inkrementel Byg:** Byg én lille funktion ad gangen. Test hyppigt.
5. **Ingen Linting:** Ager ikke som en linter. Brug `npm run lint` hvis nødvendigt.
6. **Kommunikation:** Vær kortfattet. Forklar din plan før du implementerer.

## 🛠 Kommandoer
- `npm run dev` - Start server
- `npm test` - Kør tests
- `npm run lint` - Tjek kodestil

```

### For Antigravity Brugere - GEMINI.md:

```markdown
# ANTIGRAVITY.md - Antigravity Konfiguration for [App Navn]

## 🎯 Projekt Kontekst
**App:** [App Navn]
**Stack:** [Tech Stack]
**Stadie:** MVP Udvikling
**Bruger Niveau:** Vibe-coder

## 📋 Direktiver
1. **Master Plan:** Læs altid `AGENTS.md` først. Den indeholder nuværende fase og opgaver.
2. **En Ting ad Gangen:** Stil kun ét spørgsmål ad gangen.
3. **Dokumentation:** Referer til `agent_docs/` for detaljer om tech stack, mønstre og tests.
4. **Inkrementel Byg:** Byg én lille funktion ad gangen. Test hyppigt.
5. **Ingen Linting:** Ager ikke som en linter. Brug `npm run lint` hvis nødvendigt.
6. **Kommunikation:** Vær kortfattet. Forklar din plan før du implementerer.

## 🛠 Kommandoer
- `npm run dev` - Start server
- `npm test` - Kør tests
- `npm run lint` - Tjek kodestil

```

### For Cline Brugere - .clinerules:

```markdown
# Cline Regler for [App Navn]

## 🎯 Projekt Kontekst
**App:** [App Navn]
**Stack:** [Tech Stack]
**Stadie:** MVP Udvikling
**Bruger Niveau:** Vibe-coder

## 📋 Direktiver
1. **Master Plan:** Læs altid `AGENTS.md` først. Den indeholder nuværende fase og opgaver.
2. **En Ting ad Gangen:** Stil kun ét spørgsmål ad gangen.
3. **Dokumentation:** Referer til `agent_docs/` for detaljer om tech stack, mønstre og tests.
4. **Inkrementel Byg:** Byg én lille funktion ad gangen. Test hyppigt.
5. **Ingen Linting:** Ager ikke som en linter. Brug `npm run lint` hvis nødvendigt.
6. **Kommunikation:** Vær kortfattet. Forklar din plan før du implementerer.

## 🛠 Kommandoer
- `npm run dev` - Start server
- `npm test` - Kør tests
- `npm run lint` - Tjek kodestil

```

### For Aider Brugere - .aider.conf.yml:

```yaml
read:
  - AGENTS.md

```

(Placer denne fil i projektets rod, så Aider automatisk indlæser instruktionerne.)

---

## Afsluttende Instruktioner

Efter at have genereret AGENTS.md og de passende konfigurationsfiler baseret på deres værktøjsvalg, sig:

"Jeg har oprettet dine AI-agent instruktionsfiler ovenfor! Her er hvad du skal gøre:

## 📁 Filer der skal gemmes:

1. **AGENTS.md** - Gem i din projektrod mappe
* Dette er den universelle instruktionsfil, som ALLE AI-assistenter kan læse


2. **agent_docs/** - Opret denne mappe og gem de detaljerede markdown-filer indeni.
3. **Værktøjs-specifikke Config Filer** (gem dem til dit valgte værktøj):
[List de specifikke filer genereret baseret på deres valg]

## 📂 Din Projektstruktur Bør Nu Se Således Ud:

```
your-app/
├── docs/
│   ├── research-[AppNavn].txt
│   ├── PRD-[AppNavn]-MVP.md
│   └── TechDesign-[AppNavn]-MVP.md
├── AGENTS.md                   ← Universelle instruktioner
├── agent_docs/                 ← Detaljeret dokumentation
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── product_requirements.md
│   └── testing.md
├── [Værktøjs-specifikke filer] ← Baseret på dit valg
└── (din kode vil ligge her)

```

## 🚀 Klar til at Bygge! Sådan Starter Du:

### Med [Deres Primære Værktøj]:

[Giv specifikke startinstruktioner baseret på deres primære værktøjsvalg, for eksempel:]

#### Hvis Claude Code:

```bash
cd dit-projekt
claude init  # Hvis det er første gang
claude
# Sig derefter: "Læs CLAUDE.md og AGENTS.md, og start derefter med at bygge MVP'en"

```

#### Hvis Cursor:

1. Åbn din projektmappe i Cursor
2. Filen .cursorrules vil automatisk blive detekteret
3. Start med: "Læs AGENTS.md og begynd at implementere MVP'en trin for trin"

#### Hvis Bolt.new/Lovable:

1. Gå til [platform]
2. Opret nyt projekt
3. Indsæt dit PRD indhold
4. Sig: "Byg dette ved at følge specifikationerne"

#### Hvis Gemini CLI:

```bash
gemini "Læs GEMINI.md, og implementer derefter MVP'en"

```

#### Hvis Antigravity:

1. Åbn projektet i Antigravity
2. Sørg for at GEMINI.md er indlæst som kontekst
3. Start med: "Læs AGENTS.md og begynd"

#### Hvis Aider:

```bash
aider --continue 
# Aider vil automatisk indlæse AGENTS.md fra .aider.conf.yml

```

## 💡 Dine Første Prompts:

Som **Vibe-coder**, start med:

**Første prompt:**
"Læs AGENTS.md. Jeg vil gerne starte med at bygge [første funktion fra Roadmap]. Fortæl mig hvad du gør, og stil mig ét spørgsmål hvis du skal bruge noget."

**Opfølgende prompts:**

* "Vis mig de nuværende fremskridt"
* "Test [funktionsnavn] og fix eventuelle fejl"
* "Få det til at virke på mobil"
* "Tilføj fejlhåndtering"
* "Deploy til [platform fra Teknisk Design]"

## ✅ Succes Tjekliste:

Dit setup er komplet når:

* [ ] Alle filer er gemt de korrekte steder
* [ ] Projektmappe er oprettet
* [ ] AI-værktøj er åbnet og klar
* [ ] Første prompt er skrevet og klar til at blive sendt

## 🎯 Husk:

* AI'en klarer den komplekse kodning
* Du styrer retningen og tester resultaterne
* Start simpelt, tilføj funktioner inkrementelt
* Test efter hver funktion
* Tøv ikke med at bede om forklaringer

**Du er klar til at bygge! Din AI-assistent har al den kontekst, den behøver. Bare start samtalen og se din MVP komme til live!**

<details>
<summary><b>🔧 Fejlfinding</b></summary>

**Hvis AI virker forvirret:**

* Start med: "Læs først AGENTS.md komplet igennem, og bekræft derefter at du forstår projektet"

**Hvis AI springer trin over:**

* Sig: "Lad os tage det langsommere. Implementer kun [specifik funktion] og vis mig hvordan jeg tester den"

**Hvis du får fejl:**

* Sig: "Jeg fik denne fejl: [fejl]. Forklar venligst hvad det betyder, og hvordan det fikses"

**Hvis AI overkomplicerer:**

* Sig: "Det virker komplekst. Hvad er den simpleste måde at få dette til at virke for en MVP?"

</details>

Vil du have mig til at justere nogen af instruktionerne før du starter med at bygge?"