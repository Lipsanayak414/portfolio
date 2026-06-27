import { useState } from 'react';
import { ArrowRight, Linkedin, Mail, Github, Target, FlaskConical, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  const method = [
    { icon: FlaskConical, label: 'Hypotheses before dashboards', text: 'I frame every product change as a testable question before building a single report. Go or no-go calls rest on evidence, not the loudest voice in the room.' },
    { icon: TrendingUp, label: 'Lifecycle, not snapshots', text: 'I track activation, engagement, and churn as a connected system to find the few levers that actually move retention, not report on every metric that touches it.' },
    { icon: Target, label: 'Insight that reaches the roadmap', text: 'I automate the repetitive analyst work so the thinking I deliver is the kind that changes what gets built, not just what gets reported on a weekly slide.' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 px-6 pt-28 pb-20">
      {/* Layered background: grid texture + animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-line-grid mask-fade-b absolute inset-0 opacity-70" />
        <div className="animate-blob absolute -top-24 -left-16 h-80 w-80 rounded-full bg-indigo-300/40 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Drop your photo in /public as Nayak-Lipsa.jpeg and it appears here. */}
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-lg bg-brand-gradient flex items-center justify-center">
            {imgFailed ? (
              <span className="text-2xl font-bold text-white">LN</span>
            ) : (
              <img
                src="/Nayak-Lipsa.jpeg"
                alt="Lipsa Nayak"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="space-y-2">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide">
              Product &amp; Analytics
            </p>
            <h1 className="text-6xl md:text-7xl font-extrabold text-gradient pb-1 leading-[1.05]">Lipsa Nayak</h1>
            <h2 className="text-2xl md:text-[2rem] text-gray-700 dark:text-gray-300 leading-snug max-w-xl">
              I turn data into product decisions
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Product and Business Analyst with 5+ years of experience across SaaS, media intelligence, finance,
            and IT consulting, supported by finance analytics projects. I combine experimentation, customer
            analytics, SQL, Python, and Power BI to improve retention, engagement, and commercial outcomes.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-shimmer bg-brand-gradient px-6 py-3 text-white rounded-lg transition-all flex items-center gap-2 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5 transform-gpu group">
              View my work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://linkedin.com/in/lipsanayak/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:-translate-y-0.5 transition-all transform-gpu">
              <Linkedin size={24} />
            </a>
            <a href="#contact" aria-label="Email" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:-translate-y-0.5 transition-all transform-gpu">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Lipsanayak414" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:-translate-y-0.5 transition-all transform-gpu">
              <Github size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/90 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-6">
              How I work
            </p>
            <div className="space-y-5">
              {method.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.12 }}
                  >
                    <div className="w-11 h-11 shrink-0 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="text-indigo-600 dark:text-indigo-300" size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{step.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{step.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}