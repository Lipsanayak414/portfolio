import { useState } from 'react';
import { ArrowRight, Linkedin, Mail, Github, Download, MapPin, ShieldCheck, FlaskConical, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE } from '../../content/profile';
import { ProofBar } from './ProofBar';

/**
 * Built around how a recruiter actually reads this page: a short first pass,
 * F-patterned down the left margin, with most attention in the top third.
 *
 * So the left column carries everything load-bearing — who she is, the one-line
 * claim, four hard numbers, and the two actions worth taking — and the right
 * column carries the supporting detail a second pass will reach. Prose is kept
 * short because dense paragraphs are consistently skipped in scan studies.
 */
export function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  const method = [
    { icon: FlaskConical, label: 'Hypotheses before dashboards', text: 'Every product change starts as a testable question, so go or no-go calls rest on evidence rather than the loudest voice in the room.' },
    { icon: TrendingUp, label: 'Lifecycle, not snapshots', text: 'Activation, engagement and churn tracked as one connected system, to find the few levers that actually move retention.' },
    { icon: ShieldCheck, label: 'AI that can be held to account', text: 'Measurable acceptance criteria, a defined answer for when the system does not know, and a human in the loop where the stakes require one.' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 px-6 pt-24 pb-16 md:pt-28 md:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-line-grid mask-fade-b absolute inset-0 opacity-70" />
        <div className="animate-blob absolute -top-24 -left-16 h-80 w-80 rounded-full bg-indigo-300/40 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left column — everything that must survive a 7-second scan. */}
        <motion.div
          className="md:col-span-7 space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-lg bg-brand-gradient flex items-center justify-center shrink-0">
              {imgFailed ? (
                <span className="text-xl font-bold text-white">LN</span>
              ) : (
                <img
                  src="/Nayak-Lipsa.jpeg"
                  alt="Lipsa Nayak"
                  width={80}
                  height={80}
                  fetchPriority="high"
                  decoding="async"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wide">
                Business Analyst · Product Analytics &amp; AI Systems
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={13} className="text-indigo-500 shrink-0" />
                {PROFILE.location}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gradient pb-1 leading-[1.03]">
              Lipsa Nayak
            </h1>
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] text-gray-700 dark:text-gray-300 leading-snug font-medium">
              I turn data into product decisions, and make AI systems accountable for them.
            </p>
          </div>

          {/* The numbers, at the top of the page rather than four screens down. */}
          <ProofBar />

          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            Five years across SaaS, media intelligence, finance and IT consulting — experimentation,
            retention analytics and SQL, now applied to specifying and governing the AI features
            teams actually ship.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#projects" className="btn-shimmer bg-brand-gradient px-6 py-3 text-white rounded-lg transition-all flex items-center gap-2 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5 transform-gpu group font-medium">
              See the work <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PROFILE.cv}
              download
              className="px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-white/5 backdrop-blur hover:border-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:-translate-y-0.5 transform-gpu"
            >
              <Download size={18} /> Download CV
            </a>
            <div className="flex items-center gap-1 ml-auto sm:ml-0">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:-translate-y-0.5 transition-all transform-gpu">
                <Linkedin size={21} />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:-translate-y-0.5 transition-all transform-gpu">
                <Github size={21} />
              </a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:-translate-y-0.5 transition-all transform-gpu">
                <Mail size={21} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right column — second-pass detail. On phones the grid stacks, so this
            lands below the CTAs without pushing anything above the fold. */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/90 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-5">
              How I work
            </p>
            <div className="space-y-5">
              {method.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3.5"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.12 }}
                  >
                    <div className="w-10 h-10 shrink-0 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="text-indigo-600 dark:text-indigo-300" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{step.label}</p>
                      <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 mt-0.5">{step.text}</p>
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
