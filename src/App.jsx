import React, { useState, useEffect } from "react";
import {
  Eye,
  Database,
  GraduationCap,
  Send,
  Sparkles,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Code2
} from "lucide-react";
import GridCursorEffect from "./GridCursorEffect";
import CustomCursor from "./CustomCursor";

export default function App() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Mouse spotlight coordinates for the background glow
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = {
    "Languages": ["Python", "JavaScript (ES6+)", "C / C++", "SQL (MySQL)", "HTML5 / CSS3"],
    "AI & Computer Vision": ["OpenCV", "PyTorch", "TensorFlow", "CLAHE & Morphological Filters", "Scikit-Learn", "Medical Image Pre-processing"],
    "Web & Systems": ["React.js", "Node.js / Express", "MySQL Relational Design", "REST APIs", "Tkinter Desktop GUI"],
    "Tools & Infrastructure": ["Git & GitHub", "Vercel", "Google Apps Script", "VS Code", "Jupyter Lab"]
  };

  const domains = [
    {
      icon: <Eye className="text-sky-400" size={26} />,
      title: "Computer Vision & Medical AI",
      desc: "Developing diagnostic screening algorithms, morphological feature extraction pipelines, CLAHE contrast enhancement, and deep neural architectures for clinical imaging."
    },
    {
      icon: <Database className="text-emerald-400" size={26} />,
      title: "Systems & Database Architecture",
      desc: "Architecting normalized relational database models, high-reliability desktop management applications, and cloud-integrated data workflows for university operations."
    },
    {
      icon: <GraduationCap className="text-amber-400" size={26} />,
      title: "Academic Pedagogy & Mentorship",
      desc: "Delivering core computer science curriculum in Digital Logic and Full Stack Development, mentoring students through research pipelines and production deployments."
    }
  ];

  const projects = [
    {
      title: "Detection of Diabetic Retinopathy Using Pattern Recognition",
      category: "Medical AI & Computer Vision",
      badge: "JSS STU Research",
      desc: "Automated fundus image processing pipeline to detect retinal vascular abnormalities. Implements median noise suppression, contrast-limited adaptive histogram equalization (CLAHE), and morphological closing to segment microaneurysms and hard exudates for stage grading.",
      stack: ["Python", "OpenCV", "CLAHE", "Morphological Filters", "Graythresh Binarization"],
      highlights: "Normalized dynamic illumination disparities across diverse digital fundus camera sensors without losing thin micro-vessels."
    },
    {
      title: "Citrus Crop Multi-Disease Diagnostic System",
      category: "Machine Learning & Agriculture",
      badge: "IFIM Conf. 2025",
      desc: "Automated in-field foliar pathology classifier targeting major citrus infections: Citrus Canker, Black Spot, Scab, Greening (HLB), and Melanose. Employs fine-tuned convolutional backbones with custom augmentation to handle varying natural lighting.",
      stack: ["Python", "TensorFlow / PyTorch", "Transfer Learning", "Data Augmentation", "Scikit-Learn"],
      highlights: "Engineered localized color-space segmentation to reject false positives caused by specular sun glare and soil residues."
    },
    {
      title: "JSS STU Sports Department Management System",
      category: "Desktop & Relational Database",
      badge: "Campus Production",
      desc: "Production desktop management environment replacing legacy physical ledgers. Organizes athlete directories, multi-tier tournament fixtures, departmental athletic inventory, and qualification audits.",
      stack: ["Python", "Tkinter GUI", "MySQL", "Relational Schema"],
      highlights: "Designed foolproof data entry validations for sports administrative staff, preventing relational key orphan errors."
    }
  ];

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4500);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-sky-500 selection:text-black font-sans">

      {/* 1. Custom Hardware-Accelerated Smooth Cursor */}
      <CustomCursor />

      {/* 2. Interactive Spider-Web Elastic Physics Canvas */}
      <GridCursorEffect />

      {/* 3. Ambient Mouse Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.07), transparent 80%)`
        }}
      />

      {/* 4. Blueprint Grid Background Overlays */}
      <div className="pointer-events-none fixed inset-0 blueprint-grid z-0 opacity-80" />
      <div className="pointer-events-none fixed inset-0 blueprint-grid-major z-0 opacity-60" />

      {/* 5. Hero Radar Coordinate Rings Graphic */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] z-0 opacity-35">
        <div className="absolute inset-0 rounded-full border border-sky-500/10"></div>
        <div className="absolute inset-16 rounded-full border border-sky-500/15 border-dashed"></div>
        <div className="absolute inset-36 rounded-full border border-sky-500/20"></div>
        <div className="absolute inset-56 rounded-full border border-sky-500/25"></div>
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-sky-500/10"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-sky-500/10"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1 -translate-y-1 rounded-full bg-sky-400 animate-ping"></div>
      </div>

      {/* 6. Main Interactive Content Layer */}
      <div className="relative z-30">

        {/* Sticky Header Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/80 backdrop-blur-md border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* <a href="#home" className="flex items-center gap-2.5 font-mono text-sm tracking-wider font-bold text-white hover:text-sky-400 transition"> */}
            <a href="#home" className="flex items-center gap-2.5 font-mono text-sm tracking-wider font-bold text-white hover:text-sky-400 transition group">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-8 h-8 rounded-lg object-contain border border-slate-700/80 group-hover:border-sky-400 transition shadow-sm"
              />
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              MOHAMMED DANISH
            </a>

            <div className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-slate-400">
              <a href="#home" className="hover:text-sky-400 transition">About</a>
              <a href="#expertise" className="hover:text-sky-400 transition">Systems</a>
              <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
              <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
              <a href="#contact" className="px-3.5 py-1.5 rounded-lg border border-sky-400/40 text-sky-300 hover:bg-sky-400/10 transition">
                Get In Touch &rarr;
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-6xl mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14">

            {/* Bio Column */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/50 border border-sky-500/30 text-xs font-mono text-sky-300 mb-6">
                <Sparkles size={13} className="text-sky-400" /> SYSTEMS & VISION RESEARCH
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 leading-none">
                Mohammed
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-indigo-300 mb-6 leading-tight">
                Danish
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4">
                Assistant Professor &bull; Computer Vision & Deep Learning &bull; Systems Developer
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Bridging computer vision diagnostics with robust production systems. Teaching computer science in Bengaluru while engineering diagnostic biomedical pipelines and clean relational database applications.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm transition shadow-lg shadow-sky-400/10"
                >
                  View Featured Builds <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Portrait Card */}
            <div className="relative shrink-0">
              <div className="relative w-56 h-64 sm:w-72 sm:h-84 rounded-3xl p-1 bg-gradient-to-tr from-sky-500/30 via-slate-800/80 to-sky-400/20 shadow-2xl shadow-sky-500/10 backdrop-blur-md">
                <img
                  src="/danish.jpeg"
                  alt="Mohammed Danish"
                  className="w-full h-full object-cover rounded-[22px] bg-slate-900"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=Mohammed+Danish&backgroundColor=07090e&textColor=38bdf8&fontFamily=Courier";
                  }}
                />

                {/* Active Status Badge */}
                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-slate-700 text-[11px] font-mono text-emerald-400 shadow-xl backdrop-blur">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Bengaluru, India</span>
                </div>
              </div>
            </div>

          </div>

          {/* Metrics Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16 pt-8 border-t border-slate-800/60 font-mono">
            <div>
              <div className="text-2xl font-bold text-white">Bengaluru</div>
              <div className="text-xs text-slate-500 mt-0.5">Location Base</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-400">IFIM 2025</div>
              <div className="text-xs text-slate-500 mt-0.5">Research Publication</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">BCA & MCA</div>
              <div className="text-xs text-slate-500 mt-0.5">Pedagogy & Systems</div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-slate-950/40 border-y border-slate-800/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Systems & Research</div>
              <h2 className="text-3xl font-bold text-white">What I Build</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {domains.map((d, i) => (
                <div key={i} className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition duration-200 backdrop-blur-sm">
                  <div className="p-3 w-fit rounded-xl bg-slate-950 border border-slate-800 mb-5">
                    {d.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Arsenal */}
        <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Technical Capabilities</div>
            <h2 className="text-3xl font-bold text-white">Skills & Toolkit</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, list], idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-sky-300 font-semibold mb-4 border-b border-slate-800 pb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {list.map((item, i) => (
                      <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/80 text-slate-300 border border-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-20 bg-slate-950/40 border-t border-slate-800/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Portfolio Work</div>
                <h2 className="text-3xl font-bold text-white">Featured Builds & Research</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">Verified academic & practical systems</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="group p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 flex flex-col justify-between transition-all duration-200 backdrop-blur-sm"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20">{proj.badge}</span>
                      <span className="text-slate-500">{proj.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition mb-3">
                      {proj.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {proj.desc}
                    </p>
                  </div>

                  <div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 text-xs text-slate-300 font-mono mb-4 leading-relaxed">
                      <span className="text-sky-400 block font-semibold mb-0.5">Key Challenge Solved:</span>
                      {proj.highlights}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                      {proj.stack.map((t, i) => (
                        <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">Connect</div>
              <h2 className="text-3xl font-bold text-white mb-3">Get In Touch</h2>
              <p className="text-slate-400 text-sm">
                Interested in research collaboration, academic discussions, or system architecture development?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-2xl backdrop-blur-md">
              {contactSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-center font-mono text-sm">
                  Thank you! Your message has been recorded.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. John Doe"
                        className="w-full text-sm px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full text-sm px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      placeholder="Let me know how we can collaborate..."
                      className="w-full text-sm px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm inline-flex items-center justify-center gap-2 transition"
                  >
                    <Send size={15} /> Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 py-8 text-center text-xs font-mono text-slate-500">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>&copy; {new Date().getFullYear()} Mohammed Danish &bull; Bengaluru, India</div>
            <div className="flex items-center gap-6 text-slate-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition inline-flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a href="#home" className="hover:text-sky-400 transition">Back to top &uarr;</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}