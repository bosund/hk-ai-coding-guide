// app/page.tsx
import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { QuickStartSection } from '@/components/quick-start-section';
import { ProcessSection } from '@/components/process-section';
import { ResourcesSection } from '@/components/resources-section';
import { CTASection } from '@/components/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <QuickStartSection />
      <ProcessSection />
      <ResourcesSection />
      <CTASection />
    </>
  );
}
