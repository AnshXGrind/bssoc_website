export default function WhatIsBssocPage() {
  return (
    <main className="pt-28 md:pt-32 pb-16 max-w-full overflow-hidden">
      <section className="px-6 md:px-12 py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">BSSOC</span>
          </h1>
          <p className="text-white/70 font-mono text-lg max-w-3xl">
            BSSOC is a focused open source program where developers stop consuming and start building.
          </p>
          <p className="text-white/70 font-mono text-lg max-w-3xl mt-4">
            You work on real projects, solve real problems, and create work that actually matters.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Why BSSOC</h2>
          <ul className="space-y-3 text-white/80 font-mono max-w-3xl leading-relaxed">
            <li>No fake contributions</li>
            <li>No resume padding</li>
            <li>No endless tutorials</li>
            <li>Only real building</li>
          </ul>
          <p className="text-white/70 font-mono mt-6">This is where you actually learn by doing.</p>
        </div>
      </section>
    </main>
  );
}
