import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ExternalLink, Github, Database, Workflow, ClipboardCheck, LineChart, Play, CreditCard, DollarSign, ChevronDown, Download } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { SlideViewer } from './SlideViewer';
import { PROFILE } from '../../content/profile';

interface ProjectLink {
  label: string;
  icon: LucideIcon;
  /** External or in-page URL. Mutually exclusive with `embedUrl`. */
  href?: string;
  /** Opens the slide viewer instead of navigating. */
  embedUrl?: string;
  download?: boolean;
  primary?: boolean;
}

interface Project {
  title: string;
  /** Promoted to a full-width card. Recruiter guidance is consistent that two
   *  or three strong, role-aligned cases outperform a flat grid of many. */
  featured?: boolean;
  category: string;
  status: string;
  icon: LucideIcon;
  gradient: string;
  description: string;
  /** The three lines a reviewer actually wants; revealed on demand. */
  detail: { problem: string; approach: string; result: string };
  artifacts: string[];
  tags: string[];
  links: ProjectLink[];
}

/** Her repository list — used where a project has no dedicated public repo yet. */
const REPOS = `${PROFILE.github}?tab=repositories`;

export function Projects() {
  const [activeSlides, setActiveSlides] = useState<{ title: string; embedUrl: string } | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'LedgerLens',
      featured: true,
      category: 'Analytics Engineering',
      status: 'Live',
      icon: Database,
      gradient: 'from-indigo-500 to-violet-700',
      description:
        'A PostgreSQL analytics warehouse with a star-schema model, cohort retention, PSI drift detection, and dbt-style data tests.',
      detail: {
        problem:
          'Retention reporting that is rebuilt by hand every cycle drifts, and nobody notices until a number is challenged in a review.',
        approach:
          'Modelled the domain as a star schema in PostgreSQL, built cohort retention on top of it, and added PSI drift detection plus dbt-style tests that fail loudly when the data moves underneath the model.',
        result:
          'Retention and cohort metrics that are reproducible from source, with data quality assertions running as part of the pipeline rather than as an afterthought.',
      },
      artifacts: ['PostgreSQL', 'Star schema', 'dbt-style tests'],
      tags: ['Analytics Engineering', 'Retention', 'Data Modelling'],
      links: [{ label: 'Browse repositories', href: REPOS, icon: Github, primary: true }],
    },
    {
      title: 'Process Gap Analyser',
      featured: true,
      category: 'AI + BA',
      status: 'Live',
      icon: Workflow,
      gradient: 'from-violet-500 to-fuchsia-700',
      description:
        'A four-agent system (Process Mapper, Gap Analyst, Root Cause Analyst, Improvement Strategist) that turns a process description into a structured gap report with root-cause analysis and prioritised actions, orchestrated through n8n.',
      detail: {
        problem:
          'Process discovery is slow, inconsistent between analysts, and the first draft of a gap analysis is largely mechanical work.',
        approach:
          'Split the task across four specialised agents so each has one job and one output contract, then orchestrated the handoffs in n8n with a FastAPI service behind them. The analyst reviews and owns the output rather than accepting it.',
        result:
          'A structured gap report with root causes and prioritised actions produced from a plain-language process description, as a first draft for a human to challenge.',
      },
      artifacts: ['CrewAI', 'FastAPI', 'n8n'],
      tags: ['AI Agents', 'Automation', 'Business Analysis'],
      links: [{ label: 'Browse repositories', href: REPOS, icon: Github, primary: true }],
    },
    {
      title: 'UAT Test Case Generator',
      category: 'AI + QA',
      status: 'Live',
      icon: ClipboardCheck,
      gradient: 'from-emerald-500 to-teal-700',
      description:
        'A three-agent crew (Requirements Analyst, QA Specialist, BA Reviewer) that parses requirements documents into structured test matrices with coverage summaries, wired end-to-end with n8n.',
      detail: {
        problem:
          'Writing UAT matrices by hand is repetitive, and coverage gaps are easy to miss when requirements run to dozens of pages.',
        approach:
          'A three-agent crew where the third agent exists specifically to review the first two — a reviewer role in the pipeline rather than a single model asked to be careful.',
        result:
          'Structured test matrices with an explicit coverage summary, so gaps are visible on the artefact instead of being discovered during UAT.',
      },
      artifacts: ['CrewAI', 'FastAPI', 'n8n'],
      tags: ['AI Agents', 'QA Automation', 'Business Analysis'],
      links: [{ label: 'Browse repositories', href: REPOS, icon: Github, primary: true }],
    },
    {
      title: 'Netflix 2025 Analysis',
      category: 'Product Analytics',
      status: 'Case study',
      icon: Play,
      gradient: 'from-red-500 to-rose-700',
      description:
        "An analytical teardown of Netflix's 2025 product and subscriber landscape, covering retention mechanics, engagement signals, and the strategic levers that drive long-term subscriber value.",
      detail: {
        problem:
          'Streaming subscriber growth is a saturating market; the interesting question is which engagement signals predict churn early enough to act on.',
        approach:
          'Worked the subscriber lifecycle as a connected system — activation, engagement, churn — and mapped the levers to the metrics that actually move them.',
        result:
          'A deck arguing which retention levers are worth roadmap space and which leading indicators to instrument first.',
      },
      artifacts: ['Cohort analysis', 'Retention modelling', 'KPI design'],
      tags: ['Streaming', 'Product Analytics', 'Retention'],
      links: [
        {
          label: 'View slideshow',
          embedUrl:
            'https://docs.google.com/presentation/d/e/2PACX-1vSYnvAOe0ysdxRqjp7iwNqP3q95RFupVyKNH9ZePRZLiLPrc7BEii7ebEIj4jAF06Om1KSc8AZ2oeJp/pubembed?start=true&loop=false&delayms=3000',
          icon: Play,
          primary: true,
        },
        { label: 'Download deck', href: '/Netflix_2025_Analysis.pptx', icon: Download, download: true },
      ],
    },
    {
      title: 'Revolut 2025 Strategy Deck',
      category: 'Product Strategy',
      status: 'Case study',
      icon: CreditCard,
      gradient: 'from-blue-500 to-indigo-700',
      description:
        "A strategic analysis of Revolut's 2025 product direction, examining growth levers, competitive positioning, and the product bets that could define the next phase of the business.",
      detail: {
        problem:
          'Neobank growth stories look similar from the outside; the differences are in which product bets compound and which merely add surface area.',
        approach:
          'Assessed the competitive landscape and growth levers together, then tested each candidate bet against what it would require the business to be good at.',
        result:
          'A strategy deck with a defensible position on where the next phase of growth should come from, and what it costs to pursue.',
      },
      artifacts: ['Strategic analysis', 'Competitive landscape', 'Product roadmap'],
      tags: ['Fintech', 'Product Strategy', 'Growth'],
      links: [
        {
          label: 'View slideshow',
          embedUrl:
            'https://docs.google.com/presentation/d/e/2PACX-1vSbny3rk1oUrOdo-m9jwSWT_mENGRptr5Illj8LE-2D-6KxxjNALK2X2ScnGVXx4LINFxJQ1EEptmBx/pubembed?start=true&loop=false&delayms=3000',
          icon: Play,
          primary: true,
        },
        { label: 'Download deck', href: '/Revolut_2025_Strategy_Deck.pptx', icon: Download, download: true },
      ],
    },
    {
      title: 'Pricing Transformation Model',
      featured: true,
      category: 'Commercial Analytics',
      status: 'Live',
      icon: DollarSign,
      gradient: 'from-amber-500 to-orange-700',
      description:
        'Models how an insurance software vendor should migrate from perpetual licensing to SaaS subscriptions, optimising conversion pricing and sunset timing to minimise the ARR trough while maximising long-term recurring revenue.',
      detail: {
        problem:
          'Moving from perpetual licences to subscriptions puts revenue through a trough before it compounds, and the depth of that trough is a pricing and timing decision.',
        approach:
          'Built a model in PostgreSQL and Python over conversion pricing and sunset timing, then surfaced the trade-offs in Power BI so commercial stakeholders could interrogate the scenarios themselves.',
        result:
          'A scenario model that makes the ARR trough explicit and shows which pricing and sunset combinations shorten it.',
      },
      artifacts: ['PostgreSQL', 'Python', 'Power BI'],
      tags: ['Pricing Strategy', 'SaaS Transition', 'Financial Modelling'],
      links: [
        {
          label: 'View on GitHub',
          href: `${PROFILE.github}/pricing-transformation`,
          icon: Github,
          primary: true,
        },
      ],
    },
    {
      title: 'Subscriber Retention Teardown',
      category: 'Product Analytics',
      status: 'Case study',
      icon: LineChart,
      gradient: 'from-rose-500 to-red-700',
      description:
        'A teardown of streaming subscriber economics: where the retention and engagement levers sit across the lifecycle, and which leading indicators predict churn before it shows up in revenue.',
      detail: {
        problem:
          'By the time churn shows up in revenue, the decision that caused it is months old and the cohort is already gone.',
        approach:
          'Traced the lifecycle back from cancellation to the engagement signals that preceded it, and separated the indicators that lead from the ones that merely correlate.',
        result:
          'A view of which leading indicators are worth instrumenting and alerting on, ahead of the revenue impact.',
      },
      artifacts: ['Cohort analysis', 'KPI design', 'Data storytelling'],
      tags: ['Retention', 'Product Analytics', 'Experimentation'],
      links: [{ label: 'Ask about this work', href: '#contact', icon: ExternalLink, primary: true }],
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  /** Shared card internals so featured and compact cards stay consistent. */
  const Links = ({ project }: { project: Project }) => (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.links.map((link, i) => {
        const LinkIcon = link.icon;
        const cls = `flex items-center gap-2 font-medium text-sm transition-colors ${
          link.primary
            ? 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300'
            : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300'
        }`;

        if (link.embedUrl) {
          return (
            <button
              key={i}
              onClick={() => setActiveSlides({ title: project.title, embedUrl: link.embedUrl as string })}
              className={cls}
            >
              {link.label} <LinkIcon size={16} />
            </button>
          );
        }

        const external = link.href?.startsWith('http');
        return (
          <a
            key={i}
            href={link.href}
            download={link.download}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={cls}
          >
            {link.label} <LinkIcon size={16} />
          </a>
        );
      })}
    </div>
  );

  const Tags = ({ project }: { project: Project }) => (
    <div className="flex flex-wrap gap-2">
      {project.artifacts.map((a, i) => (
        <span key={i} className="text-xs bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">
          {a}
        </span>
      ))}
      {project.tags.map((tag, i) => (
        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div>
  );

  /** Problem and approach collapse; the result never does. */
  const Detail = ({ project, index }: { project: Project; index: number }) => {
    const isOpen = expanded === index;
    return (
      <>
        <div className="rounded-lg bg-emerald-50/70 dark:bg-emerald-500/10 border border-emerald-200/70 dark:border-emerald-500/20 px-3.5 py-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
            Result
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{project.detail.result}</p>
        </div>

        <button
          onClick={() => setExpanded(isOpen ? null : index)}
          aria-expanded={isOpen}
          className="self-start inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          {isOpen ? 'Hide detail' : 'Problem & approach'}
          <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <dl className="space-y-2.5 text-sm border-l-2 border-indigo-200 dark:border-indigo-500/30 pl-4">
              {(['problem', 'approach'] as const).map((k) => (
                <div key={k}>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">{k}</dt>
                  <dd className="text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{project.detail[k]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </>
    );
  };

  return (
    <section id="projects" className="relative py-20 px-6 bg-white dark:bg-gray-950 overflow-hidden glow-accents">
      <div aria-hidden className="bg-dot-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal className="mb-10 max-w-2xl">
          <SectionHeader index="01" title="Selected work">
            Three cases in depth, and four more in brief. Each one states the problem, the approach
            and what came out of it.
          </SectionHeader>
        </Reveal>

        {/* Featured — full width, horizontal, result visible without a click. */}
        <div className="space-y-6 mb-12">
          {featured.map((project) => {
            const Icon = project.icon;
            const index = projects.indexOf(project);
            return (
              <Reveal key={project.title} delay={index} direction="up">
                <article className="group grid md:grid-cols-12 gap-0 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-600/15 dark:hover:shadow-indigo-900/40 transition-all duration-300 border border-gray-200/80 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-500/40">
                  <div className={`relative md:col-span-4 min-h-[11rem] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden p-6`}>
                    <div aria-hidden className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.25), transparent 50%)' }} />
                    <div aria-hidden className="absolute -inset-x-10 -top-10 h-24 bg-white/10 blur-2xl rotate-12 translate-y-[-120%] group-hover:translate-y-[260%] transition-transform duration-700 ease-out" />
                    <Icon className="relative text-white/95 drop-shadow-lg transition-transform duration-500 group-hover:scale-110" size={52} strokeWidth={1.5} />
                    <span className="absolute top-4 left-4 bg-white/90 px-2.5 py-1 rounded-full text-[11px] font-semibold text-gray-800">
                      {project.category}
                    </span>
                  </div>

                  <div className="md:col-span-8 p-6 md:p-7 flex flex-col gap-3.5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1.5 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <Detail project={project} index={index} />
                    <Tags project={project} />
                    <Links project={project} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
          Also in the portfolio
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project) => {
            const Icon = project.icon;
            const index = projects.indexOf(project);
            return (
              <Reveal key={project.title} delay={index} className="h-full">
                <article className="group h-full bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-indigo-600/10 dark:hover:shadow-indigo-900/30 transition-all duration-300 border border-gray-200/80 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-500/40 hover:-translate-y-1 transform-gpu flex flex-col gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-sm`}>
                      <Icon className="text-white" size={21} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h4>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600/80 dark:text-indigo-400/80 mt-0.5">
                        {project.category} · {project.status}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
                  <div className="mt-auto flex flex-col gap-3">
                    <Detail project={project} index={index} />
                    <Tags project={project} />
                    <Links project={project} />
                  </div>
                </article>
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
