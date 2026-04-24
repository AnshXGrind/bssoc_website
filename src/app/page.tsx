import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <main className="flex flex-col relative w-full overflow-hidden">
      <Hero />
      <About />
    </main>
  );
}
