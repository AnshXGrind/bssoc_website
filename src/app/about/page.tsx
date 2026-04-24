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
            BSSOC is a build-first open source program where contributors ship real product work under structured mentoring.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Why BSSOC</h2>
          <p className="text-white/75 font-mono max-w-3xl leading-relaxed">
            It filters for execution, not buzzwords. The workflow mirrors real teams: clear milestones, PR review standards, and consistent delivery.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Program Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/75 font-mono">
            <div className="glass-card p-5">AI/ML</div>
            <div className="glass-card p-5">Full Stack</div>
            <div className="glass-card p-5">Systems</div>
            <div className="glass-card p-5">Web3</div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">How It Works</h2>
          <ol className="space-y-3 text-white/75 font-mono">
            <li>Apply and get shortlisted.</li>
            <li>Join your project pod and mentor group.</li>
            <li>Ship production-ready features in milestones.</li>
            <li>Showcase outcomes publicly.</li>
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
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