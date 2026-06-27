import { Search, Layers, Lightbulb, FileText } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function About() {
  const highlights = [
    {
      icon: Search,
      title: 'Evidence, not instinct',
      description:
        'I frame product changes as testable hypotheses and measure them, so go or no-go calls rest on evidence rather than the loudest voice in the room.',
    },
    {
      icon: Layers,
      title: 'Built around retention',
      description:
        'I work the full subscriber lifecycle, activation, engagement, and churn, to find the few levers that actually move the metric instead of reporting on all of them.',
    },
    {
      icon: Lightbulb,
      title: 'AI-enabled execution',
      description:
        'I build agentic workflows with CrewAI, FastAPI, and n8n that take repetitive analyst work off the critical path and turn it into something a team can rely on.',
    },
    {
      icon: FileText,
      title: 'Analysis that reaches the roadmap',
      description:
        'I translate behavioural analysis into KPI frameworks and roadmap decisions that leadership uses weekly, not dashboards that get opened once and forgotten.',
    }
  ];

  return (
    <section id="about" className="relative py-20 px-6 bg-white dark:bg-gray-950 overflow-hidden glow-accents">
      <div aria-hidden className="bg-dot-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="md:col-span-4">
          <SectionHeader index="01" title="About me">
            I'm an analytics and product-focused Business Analyst with 5+ years turning subscriber and
            behavioural data into decisions. I work where experimentation, retention, and AI-enabled
            execution meet the product roadmap.
          </SectionHeader>
        </Reveal>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index} className="h-full">
                <div className="ring-gradient-hover group h-full p-6 rounded-2xl glass transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-600/10 hover:-translate-y-1.5 transform-gpu">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-500/20 dark:to-violet-500/20 group-hover:from-indigo-600 group-hover:to-violet-600 transition-all duration-300 shadow-sm">
                    <Icon className="text-indigo-600 dark:text-indigo-300 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
