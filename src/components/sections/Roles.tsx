"use client"

const roles = [
  {
    name: "Admin",
    desc: "Own project quality, planning, and delivery outcomes.",
  },
  {
    name: "Mentor",
    desc: "Guide execution, unblock contributors, and review output.",
  },
  {
    name: "Contributor",
    desc: "Pick issues, ship features, and communicate clearly.",
  },
]

export default function Roles() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#1e293b] border-t border-white/10 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
          Roles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <article key={role.name} className="glass-card p-7">
              <h3 className="text-2xl font-black uppercase tracking-wide mb-3">{role.name}</h3>
              <p className="text-white/75 font-mono text-sm leading-relaxed">{role.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
