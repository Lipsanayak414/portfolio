import { GraduationCap } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  const phases = [
    {
      role: 'Business Analyst',
      company: 'Cision',
      location: 'London, UK',
      period: '2024 to Present',
      detail: [
        'Designed and ran experimentation frameworks to evaluate product changes across core subscription lines, turning engagement signals into go or no-go calls on feature rollouts.',
        'Consolidated multi-source subscriber data into SQL and Data pipelines, lifting data accuracy by 32% and cutting manual reporting effort by 45%.',
        'Built behavioural and cohort analyses across the subscriber lifecycle and translated them into roadmap priorities with Product, Marketing, and Engineering.',
        'Defined KPI frameworks and Power BI dashboards adopted by 100% of the commercial team for weekly plan and revenue tracking.',
      ],
    },
    {
      role: 'Business Analyst',
      company: 'Frontier Space Technologies',
      location: 'Birmingham, UK',
      period: '2023',
      detail: [
        'Analysed engagement and behavioural patterns across user cohorts and built models that improved targeting accuracy by 18%.',
        'Designed retention and pricing analyses that reduced churn by 11% and lifted engagement by 19%.',
        'Built reporting frameworks and ran cross-functional workshops to align teams on shared metric definitions.',
      ],
    },
    {
      role: 'Business Analyst',
      company: 'Brillio',
      location: 'India',
      period: '2022',
      detail: [
        'Standardised KPI definitions and data models across business units so plan-versus-plan comparison was finally reliable.',
        'Translated business requirements into analytical solutions and ETL workflows, shortening decision cycles.',
        'Analysed large structured and unstructured datasets to surface operational inefficiencies that fed directly into product strategy.',
      ],
    },
    {
      role: 'Data Analyst',
      company: 'Infosys',
      location: 'India',
      period: '2020 to 2022',
      detail: [
        'Automated ETL pipelines in SQL and Python across large datasets, cutting manual processing effort by 40%.',
        'Delivered forecasting, anomaly detection, and trend analysis to support planning for global enterprise clients.',
        'Built self-serve dashboards so stakeholders could monitor KPIs without waiting on the analytics team.',
      ],
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      title: 'MSc, Management',
      org: 'Cranfield University, UK',
      period: '2022 to 2024',
    },
    {
      icon: GraduationCap,
      title: 'BTech, Information Technology',
      org: 'VSSUT, India',
      period: '2015 to 2019',
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden glow-accents bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div aria-hidden className="bg-line-grid mask-fade-b pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="md:col-span-4">
          <SectionHeader index="02" title="Experience" dark>
            5+ years across SaaS, media intelligence, and space-tech, with a consistent thread:
            experimentation, retention, and analytics that reach a decision.
          </SectionHeader>
        </Reveal>

        <div className="md:col-span-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 via-violet-400/60 to-transparent"></div>

          <div className="space-y-12">
            {phases.map((exp, index) => (
              <Reveal key={index} delay={index} direction="up">
                <div className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/40 ring-4 ring-gray-950">
                    <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="ring-gradient-hover glass-dark p-6 rounded-2xl hover:shadow-2xl hover:shadow-indigo-900/40 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-1 gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-sm text-indigo-300 bg-indigo-500/15 border border-indigo-400/20 px-3 py-1 rounded-full font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-indigo-200/90 font-medium mb-4">
                      {exp.company}
                      <span className="text-gray-400 font-normal"> · {exp.location}</span>
                    </p>

                    <ul className="space-y-2">
                      {exp.detail.map((d, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education strip */}
          <Reveal delay={4} className="mt-12 pl-0 md:pl-20">
            <div className="grid sm:grid-cols-2 gap-4">
              {education.map((ed, i) => {
                const Icon = ed.icon;
                return (
                  <div key={i} className="glass-dark rounded-xl p-5">
                    <Icon className="text-indigo-300 mb-3" size={22} />
                    <p className="font-semibold text-white text-sm">{ed.title}</p>
                    <p className="text-gray-400 text-sm">{ed.org}</p>
                    {ed.period && <p className="text-gray-500 text-xs mt-1">{ed.period}</p>}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}