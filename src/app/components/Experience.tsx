import { GraduationCap } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  const phases = [
    {
      role: 'Business Analyst',
      company: 'Cision',
      location: 'London, UK',
      period: 'Jan 2024 – Present',
      detail: [
        'Led experimentation frameworks to evaluate subscription product changes, translating engagement signals into data-driven feature rollout decisions across core product lines.',
        'Conducted cohort and behavioural analyses across the subscriber lifecycle to identify retention opportunities, partnering with Product, Marketing, and Engineering to prioritise roadmap initiatives.',
        'Consolidated subscriber data from multiple sources through SQL data pipelines, improving reporting accuracy by 32% while reducing manual reporting effort by 45%.',
        'Defined commercial KPI frameworks and developed Power BI dashboards adopted across the commercial organisation for weekly subscription and revenue performance tracking.',
      ],
    },
    {
      role: 'Business Analyst',
      company: 'Frontier Space Technologies',
      location: 'Birmingham, UK',
      period: 'Jun 2023 – Sep 2023',
      detail: [
        'Analysed behavioural and engagement patterns across customer cohorts using SQL and Python, improving campaign targeting accuracy by 18%.',
        'Conducted pricing and retention analyses that reduced churn by 11% while increasing customer engagement by 19%.',
        'Standardised KPI definitions and facilitated cross-functional workshops that aligned stakeholders on commercial performance metrics and improved decision-making.',
      ],
    },
    {
      role: 'Business Analyst',
      company: 'Brillio',
      location: 'India',
      period: '',
      detail: [
        'Translated business requirements into analytical solutions and ETL workflows, partnering with cross-functional stakeholders to deliver decision-ready data products.',
        'Standardised KPI definitions and data models across business units, improving the consistency and reliability of performance reporting.',
        'Analysed structured and unstructured datasets to identify operational inefficiencies, providing insights that informed product and business process improvements.',
      ],
    },
    {
      role: 'Data Analyst',
      company: 'Infosys',
      location: 'India',
      period: 'Sep 2019 – Apr 2022',
      detail: [
        'Automated SQL and Python ETL pipelines across large enterprise datasets, reducing manual processing effort by 30%.',
        'Delivered forecasting, anomaly detection, and trend analysis to support operational planning and data-driven decision-making for global enterprise clients.',
        'Performed root cause analysis and data validation to improve reporting accuracy, then developed Power BI dashboards and automated reporting solutions that enabled self-service KPI monitoring for business stakeholders.',
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
            Data and Product Analyst with 5+ years of experience across SaaS, media intelligence, finance,
            and IT consulting, complemented by finance analytics projects in forecasting, customer
            segmentation, and risk modelling.
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
                      {exp.period && (
                        <span className="text-sm text-indigo-300 bg-indigo-500/15 border border-indigo-400/20 px-3 py-1 rounded-full font-medium">
                          {exp.period}
                        </span>
                      )}
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