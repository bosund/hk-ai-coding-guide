# Agents Guide

Dette dokument indeholder instruktioner til AI-agenter, der arbejder på dette projekt.

## Ordbog & Tooltips

Når du skriver ny tekst eller opretter nye sider, skal du altid tjekke om der bruges tekniske begreber, som er forklaret i vores ordbog. 

### Hvordan du gør:
1.  **Søg efter ord:** Tjek listen over tilgængelige begreber i `lib/glossary-data.ts`.
2.  **Brug komponenten:** Hvis et ord findes i listen, skal du pakke det ind i en `<GlossaryTerm>` komponent.
3.  **Import:** Importér komponenten fra `@/components/glossary-term`.

**Eksempel:**
```tsx
import { GlossaryTerm } from "@/components/glossary-term";

// ... inde i din komponent
<p>
  Vi anbefaler at starte med en <GlossaryTerm term="MVP">MVP</GlossaryTerm> 
  for at teste din idé hurtigt.
</p>
```

### Best Practice:
- Markér kun ordet første gang det optræder i et afsnit eller på en side for at undgå visuel støj.
- Brug altid præcis det ord, der står som `term` i `lib/glossary-data.ts`.
