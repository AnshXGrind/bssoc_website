export default function AboutPage() {
  const roleDetails = [
    {
      title: "Admin",
      detail: "Define scope, maintain standards, and approve final PR quality.",
    },
    {
      title: "Mentor",
      detail: "Drive contributor execution, reviews, and delivery cadence.",
    },
    {
      title: "Contributor",
      detail: "Pick issues, ship code, and communicate blockers quickly.",
    },
  ]

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

      <section id="tracks" className="px-6 md:px-12 py-20 bg-[#0A0A0A]">
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

      <section id="how-it-works" className="px-6 md:px-12 py-20 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">How It Works</h2>
          <ol className="space-y-3 text-white/75 font-mono">
            <li>Apply - Submit your application.</li>
            <li>Selection - Only committed builders are selected.</li>
            <li>Build - Work on real-world projects with structure.</li>
            <li>Contribute - Push meaningful code, not small fixes.</li>
            <li>Showcase - End with projects you can actually show.</li>
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Who Should Join</h2>
          <ul className="space-y-3 text-white/75 font-mono mb-10">
            <li>Developers stuck in tutorial loop</li>
            <li>People serious about building</li>
            <li>Anyone who wants real experience</li>
          </ul>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roleDetails.map((role) => (
              <article key={role.title} className="glass-card p-6">
                <h3 className="text-2xl font-bold uppercase mb-3">{role.title}</h3>
                <p className="text-white/75 font-mono text-sm">{role.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}