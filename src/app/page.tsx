import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="flex flex-col relative w-full max-w-full overflow-hidden">
      <Hero />
      <CTA />
    </main>
  );
}
