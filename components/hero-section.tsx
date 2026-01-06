// components/hero-section.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 hero-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 bg-primary/5 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Opdateret Guide 2024
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Mester AI-drevet
          <br />
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Kodning med HK
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 mb-10">
          Lær hvordan du effektivt integrerer kunstig intelligens i din udviklingsproces. Fra prompt engineering til
          kodeoptimering – din komplette guide.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="text-lg">
            <Link href="#quick-start">
              Kom i gang
              <Icon className="ml-2">rocket_launch</Icon>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link href="#processen">
              Se processen
              <Icon className="ml-2">arrow_downward</Icon>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
