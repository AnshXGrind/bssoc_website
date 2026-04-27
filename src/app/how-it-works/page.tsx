export default function HowItWorksPage() {
  return (
    <main className="pt-28 md:pt-32 pb-16 max-w-full overflow-hidden">
      <section className="px-6 md:px-12 py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Works</span>
          </h1>
          <ol className="space-y-4 text-white/75 font-mono text-base md:text-lg">
            <li>1. Apply - Submit your application.</li>
            <li>2. Selection - Only committed builders are selected.</li>
            <li>3. Build - Work on real-world projects with structure.</li>
            <li>4. Contribute - Push meaningful code, not small fixes.</li>
            <li>5. Showcase - End with projects you can actually show.</li>
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#1e293b] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Program Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/75 font-mono">
            <div className="glass-card p-5">AI/ML - Build intelligent systems, not just notebooks.</div>
            <div className="glass-card p-5">Web Dev - Create production-ready applications, not clones.</div>
            <div className="glass-card p-5">Systems - Understand how things work under the hood.</div>
            <div className="glass-card p-5">Open Source - Contribute where it actually matters.</div>
          </div>
        </div>
      </section>
    </main>
  );
}