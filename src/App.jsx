export default function ResumeWebsite() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm mb-4">
              Junior Frontend Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Vadym <span className="text-zinc-400">Porada</span>
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-8">
              Junior Web Developer with a solid foundation in HTML, CSS, and
              JavaScript. Passionate about building responsive and interactive
              web experiences while continuously improving through personal
              projects and full-stack learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/PorVad"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-2xl font-medium hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="mailto:porada.vadym@gmail.com"
                className="px-6 py-3 border border-zinc-700 rounded-2xl hover:bg-zinc-900 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">Quick Info</h2>

            <div className="space-y-4 text-zinc-300">
              <div>
                <p className="text-zinc-500 text-sm">Location</p>
                <p>Quebec, Canada</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Languages</p>
                <p>English, French, Spanish, Ukrainian, Russian</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Current Focus</p>
                <p>Frontend & Full-Stack Development</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Technologies</p>
                <p>HTML5, CSS3, JavaScript, Git, React</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "Git/GitHub",
            "React",
            "Responsive Design",
            "DOM Manipulation",
            "Teamwork",
            "Problem Solving",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:-translate-y-1 transition"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition">
            <h3 className="text-2xl font-semibold mb-4">IP Camera Shop</h3>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Web application for managing IP cameras with full CRUD
              functionality. Users can create, edit, delete, search, and sort
              camera items stored in the browser.
            </p>

            <ul className="space-y-2 text-zinc-400 mb-6">
              <li>• CRUD operations</li>
              <li>• localStorage support</li>
              <li>• Search & sorting system</li>
              <li>• Image preview functionality</li>
            </ul>

            <a
              href="https://github.com/PorVad/ip-camerashop"
              target="_blank"
              className="inline-block px-5 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
            >
              View Project
            </a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition">
            <h3 className="text-2xl font-semibold mb-4">
              Government Information Platform
            </h3>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Personal project focused on creating a platform where citizens can
              access public information through a structured and user-friendly
              interface.
            </p>

            <ul className="space-y-2 text-zinc-400 mb-6">
              <li>• Responsive UI design</li>
              <li>• Interactive user interface</li>
              <li>• Planned authentication system</li>
              <li>• Planned online voting feature</li>
            </ul>

            <button className="px-5 py-3 border border-zinc-700 rounded-xl text-zinc-400 cursor-default">
              In Development
            </button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-6">
          {[
            {
              company: "IGA",
              date: "Jul 2023 — Feb 2024",
              desc: "Worked efficiently in a fast-paced environment and demonstrated strong attention to detail.",
            },
            {
              company: "St-Hubert",
              date: "Oct 2024 — May 2025",
              desc: "Performed effectively under pressure and collaborated closely with team members.",
            },
            {
              company: "TUPP",
              date: "May 2025 — Present",
              desc: "Adapted quickly to different responsibilities while learning new processes efficiently.",
            },
          ].map((job) => (
            <div
              key={job.company}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold">{job.company}</h3>
                <p className="text-zinc-500">{job.date}</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500">
            © 2026 Vadym Porada. All rights reserved.
          </p>

          <div className="flex gap-6 text-zinc-400">
            <a href="mailto:porada.vadym@gmail.com" className="hover:text-white transition">
              Email
            </a>

            <a
              href="https://github.com/PorVad"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
