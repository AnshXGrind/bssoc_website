import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">BSSOC</span>
      </h1>
      
      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mt-12 mb-6">⚙️ Core Operating Model (3 Roles Only)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Project Admin */}
          <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4 text-accent">🧠 1. Project Admin <span className="text-white/50 text-base font-normal">(Owner / Lead)</span></h3>
            <p className="text-white/70 italic mb-6">Function: Governance + quality control + delivery assurance</p>
            
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc pl-5 mb-6 text-white/80 space-y-2">
              <li>Define problem statements (not vague ideas)</li>
              <li>Break projects → milestones (Week 1, Week 2…)</li>
              <li>Approve PRs (final authority)</li>
              <li>Maintain repo standards (README, issues, labels)</li>
              <li>Resolve blockers fast</li>
            </ul>
            
            <h4 className="font-semibold mb-2 mt-auto">Skill bar:</h4>
            <ul className="list-disc pl-5 mb-4 text-white/80 space-y-2">
              <li>Strong Git/GitHub workflow</li>
              <li>Can review code across stack</li>
              <li>Decision-maker mindset</li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-sm font-mono text-accent-blue uppercase">Ratio: 1 Admin per project</span>
            </div>
          </div>

          {/* Mentor */}
          <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4 text-accent">🧑‍🏫 2. Mentor <span className="text-white/50 text-base font-normal">(Execution Driver)</span></h3>
            <p className="text-white/70 italic mb-6">Function: Turn contributors into shippers</p>
            
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc pl-5 mb-6 text-white/80 space-y-2">
              <li>Guide contributors daily/weekly</li>
              <li>Assign issues</li>
              <li>Review PRs before admin</li>
              <li>Ensure deadlines are met</li>
              <li>Maintain velocity</li>
            </ul>
            
            <h4 className="font-semibold mb-2 mt-auto">Skill bar:</h4>
            <ul className="list-disc pl-5 mb-4 text-white/80 space-y-2">
              <li>1–2 years real dev experience (minimum)</li>
              <li>Has built projects (not just tutorials)</li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-sm font-mono text-accent-blue uppercase">Ratio: 1 Mentor per 5–8 contributors</span>
            </div>
          </div>

          {/* Contributor */}
          <div className="border border-white/10 bg-white/5 p-6 rounded-2xl flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4 text-accent">👨‍💻 3. Contributor <span className="text-white/50 text-base font-normal">(Builder)</span></h3>
            <p className="text-white/70 italic mb-6">Function: Ship code. No fluff.</p>
            
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc pl-5 mb-6 text-white/80 space-y-2">
              <li>Pick issues</li>
              <li>Deliver PRs</li>
              <li>Follow coding standards</li>
              <li>Communicate blockers</li>
            </ul>
            
            <h4 className="font-semibold mb-2 mt-auto">Selection filters:</h4>
            <ul className="list-disc pl-5 mb-4 text-white/80 space-y-2">
              <li>GitHub profile</li>
              <li>1 small project minimum</li>
              <li>Basic Git knowledge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}