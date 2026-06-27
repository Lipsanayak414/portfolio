import { useState } from 'react';
import { ExternalLink, Github, Database, Workflow, ClipboardCheck, LineChart, Play, CreditCard, DollarSign } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { SlideViewer } from './SlideViewer';

export function Projects() {
  const [activeSlides, setActiveSlides] = useState<{ title: string; embedUrl: string } | null>(null);
  const projects = [
    {
      title: 'LedgerLens',
      category: 'Analytics Engineering',
      status: 'Live',
      icon: Database,
      gradient: 'from-indigo-500 to-violet-700',
      description:
        'A PostgreSQL analytics warehouse with a star-schema model, cohort retention, PSI drift detection, and dbt-style data tests.',
      artifacts: ['PostgreSQL', 'Star schema', 'dbt-style tests'],
      tags: ['Analytics Engineering', 'Retention', 'Data Modelling'],
      href: 'https://github.com/Lipsanayak414',
      cta: 'View on GitHub',
      ctaIcon: Github,
    },
    {
      title: 'Process Gap Analyser',
      category: 'AI + BA',
      status: 'Live',
      icon: Workflow,
      gradient: 'from-violet-500 to-fuchsia-700',
      description:
        'A four-agent system (Process Mapper, Gap Analyst, Root Cause Analyst, Improvement Strategist) that turns a process description into a structured gap report with root-cause analysis and prioritised actions, orchestrated through n8n.',
      artifacts: ['CrewAI', 'FastAPI', 'n8n'],
      tags: ['AI Agents', 'Automation', 'Business Analysis'],
      href: 'https://github.com/Lipsanayak414',
      cta: 'View on GitHub',
      ctaIcon: Github,
    },
    {
      title: 'UAT Test Case Generator',
      category: 'AI + QA',
      status: 'Live',
      icon: ClipboardCheck,
      gradient: 'from-emerald-500 to-teal-700',
      description:
        'A three-agent crew (Requirements Analyst, QA Specialist, BA Reviewer) that parses requirements documents into structured test matrices with coverage summaries, wired end-to-end with n8n.',
      artifacts: ['CrewAI', 'FastAPI', 'n8n'],
      tags: ['AI Agents', 'QA Automation', 'Business Analysis'],
      href: 'https://github.com/Lipsanayak414',
      cta: 'View on GitHub',
      ctaIcon: Github,
    },
    {
      title: 'Netflix 2025 Analysis',
      category: 'Product Analytics',
      status: 'Case study',
      icon: Play,
      gradient: 'from-red-500 to-rose-700',
      description:
        'An analytical teardown of Netflix\'s 2025 product and subscriber landscape, covering retention mechanics, engagement signals, and the strategic levers that drive long-term subscriber value.',
      artifacts: ['Cohort analysis', 'Retention modelling', 'KPI design'],
      tags: ['Streaming', 'Product Analytics', 'Retention'],
      embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSYnvAOe0ysdxRqjp7iwNqP3q95RFupVyKNH9ZePRZLiLPrc7BEii7ebEIj4jAF06Om1KSc8AZ2oeJp/pubembed?start=true&loop=false&delayms=3000',
      cta: 'View slideshow',
      ctaIcon: Play,
    },
    {
      title: 'Revolut 2025 Strategy Deck',
      category: 'Product Strategy',
      status: 'Case study',
      icon: CreditCard,
      gradient: 'from-blue-500 to-indigo-700',
      description:
        'A strategic analysis of Revolut\'s 2025 product direction, examining growth levers, competitive positioning, and the product bets that could define the next phase of the business.',
      artifacts: ['Strategic analysis', 'Competitive landscape', 'Product roadmap'],
      tags: ['Fintech', 'Product Strategy', 'Growth'],
      embedUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSbny3rk1oUrOdo-m9jwSWT_mENGRptr5Illj8LE-2D-6KxxjNALK2X2ScnGVXx4LINFxJQ1EEptmBx/pubembed?start=true&loop=false&delayms=3000',
      cta: 'View slideshow',
      ctaIcon: Play,
    },
    {
      title: 'Pricing Transformation Model',
      category: 'Commercial Analytics',
      status: 'Live',
      icon: DollarSign,
      gradient: 'from-amber-500 to-orange-700',
      description:
        'Models how an insurance software vendor should migrate from perpetual licensing to SaaS subscriptions, optimising conversion pricing and sunset timing to minimise the ARR trough while maximising long-term recurring revenue.',
      artifacts: ['PostgreSQL', 'Python', 'Power BI'],
      tags: ['Pricing Strategy', 'SaaS Transition', 'Financial Modelling'],
      href: 'https://github.com/Lipsanayak414/pricing-transformation',
      cta: 'View on GitHub',
      ctaIcon: Github,
    },
    {
      title: 'Subscriber Retention Teardown',
      category: 'Product Analytics',
      status: 'Case study',
      icon: LineChart,
      gradient: 'from-rose-500 to-red-700',
      description:
        'A teardown of streaming subscriber economics: where the retention and engagement levers sit across the lifecycle, and which leading indicators predict churn before it shows up in revenue.',
      artifacts: ['Cohort analysis', 'KPI design', 'Data storytelling'],
      tags: ['Retention', 'Product Analytics', 'Experimentation'],
      // TODO: link to the published deck or write-up
      href: '#',
      cta: 'View case study',
      ctaIcon: ExternalLink,
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6 bg-white dark:bg-gray-950 overflow-hidden glow-accents">
      <div aria-hidden className="bg-dot-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal className="mb-12 max-w-2xl">
          <SectionHeader index="03" title="Projects">
            Things I have built to prove the thinking: analytics engineering, AI-enabled BA workflows,
            and product analytics
          </SectionHeader>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const CtaIcon = project.ctaIcon;
            return (
              <Reveal key={index} delay={index} className="h-full">
                <div className="group h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-600/15 dark:hover:shadow-indigo-900/40 transition-all duration-300 border border-gray-200/80 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:-translate-y-1.5 transform-gpu flex flex-col">
                  <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <div aria-hidden className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.25), transparent 50%)' }} />
                    <div aria-hidden className="absolute -inset-x-10 -top-10 h-24 bg-white/10 blur-2xl rotate-12 translate-y-[-120%] group-hover:translate-y-[260%] transition-transform duration-700 ease-out" />
                    <Icon className="relative text-white/95 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" size={56} strokeWidth={1.5} />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>

                    <div className="space-y-3 mb-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.artifacts.map((a, i) => (
                          <span key={i} className="text-xs bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">
                            {a}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {'embedUrl' in project ? (
                      <button
                        onClick={() => setActiveSlides({ title: project.title, embedUrl: project.embedUrl as string })}
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm"
                      >
                        {project.cta} <CtaIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <a
                        href={project.href ?? '#'}
                        target={project.href?.startsWith('http') ? '_blank' : undefined}
                        rel={project.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm"
                      >
                        {project.cta} <CtaIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {activeSlides && (
        <SlideViewer
          title={activeSlides.title}
          embedUrl={activeSlides.embedUrl}
          onClose={() => setActiveSlides(null)}
        />
      )}
    </section>
  );
}
