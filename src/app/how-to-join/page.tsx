import Link from "next/link";

export default function HowToJoinPage() {
  return (
    <main className="pt-28 md:pt-32 pb-16 max-w-full overflow-hidden">
      <section className="px-6 md:px-12 py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Join</span>
          </h1>
          <ul className="space-y-3 text-white/75 font-mono mb-10 text-base md:text-lg">
            <li>Developers stuck in tutorial loop</li>
            <li>People serious about building</li>
            <li>Anyone who wants real experience</li>
          </ul>
          <p className="text-white/70 font-mono text-lg max-w-3xl mb-8">Ready to build something real?</p>
          <p className="text-white/70 font-mono text-lg max-w-3xl mb-10">Stop learning. Start building.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/how-to-join"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-mono uppercase tracking-widest text-sm"
            >
              Apply Now
            </Link>
            <Link
              href="/how-to-join"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/90 rounded-full font-mono uppercase tracking-widest text-sm"
            >
              View Application
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}