// components/cta-section.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Klar til at effektivisere din kode?</span>
          <span className="block text-blue-200">Start din læringsrejse i dag.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button asChild variant="secondary" size="lg">
              <Link href="#">Opret gratis konto</Link>
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button asChild variant="outline" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
              <Link href="#">Læs mere om HK</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
