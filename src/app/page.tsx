import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Tracks from '@/components/sections/Tracks';
import Timeline from '@/components/sections/Timeline';
import Projects from '@/components/sections/Projects';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="flex flex-col relative w-full overflow-hidden">
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Projects />
      <CTA />
    </main>
  );
}
