import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  const skillCategories = [
    {
      category: 'AI Systems & Governance',
      /** Featured: this is the differentiator, so it leads and spans the grid. */
      featured: true,
      note: 'Specifying and governing AI features, not just using AI tools',
      skills: [
        'AI Requirements & Acceptance Criteria',
        'Evaluation Design (test sets, thresholds)',
        'RAG System Analysis (retrieval, chunking, access control)',
        'Human-in-the-Loop & Escalation Design',
        'AI Risk Classification (EU AI Act)',
        'Bias, Fairness & Traceability Requirements',
        'Prompt Engineering & Task Decomposition',
        'Agentic Workflows (CrewAI, n8n, FastAPI)',
        'LLM Applications (ChatGPT, Claude)',
      ],
    },
    {
      category: 'Product Analytics',
      skills: ['Product Analytics', 'Experimentation & A/B Testing', 'Cohort & Retention Analysis', 'Funnel Analysis', 'Customer Segmentation', 'KPI Frameworks', 'Root Cause Analysis'],
    },
    {
      category: 'Data Analytics & Engineering',
      skills: ['SQL (Window Functions, CTEs, Complex Joins)', 'Python (Pandas, scikit-learn, statsmodels)', 'PostgreSQL', 'Databricks', 'ETL/ELT Pipelines', 'Data Modelling'],
    },
    {
      category: 'Business Intelligence',
      skills: ['Power BI (DAX)', 'Dashboard Development', 'Executive Reporting', 'Data Storytelling'],
    },
    {
      category: 'Business Analysis',
      skills: ['Requirements Gathering', 'User Stories', 'UAT', 'Agile/Scrum', 'Jira', 'Confluence', 'Stakeholder Management'],
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden glow-accents">
      <div aria-hidden className="bg-dot-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="md:col-span-4">
          <SectionHeader index="04" title="Core Skills">
            The capabilities behind the experience and the projects, led by the AI-system work that
            most analyst toolkits still leave out
          </SectionHeader>
        </Reveal>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal
              key={index}
              delay={index}
              className={`h-full ${category.featured ? 'sm:col-span-2' : ''}`}
            >
              <div
                className={`ring-gradient-hover group h-full glass p-6 rounded-2xl hover:shadow-2xl hover:shadow-indigo-600/10 transition-all duration-300 hover:-translate-y-1.5 transform-gpu ${
                  category.featured ? 'ring-2 ring-indigo-500/25 dark:ring-indigo-400/25' : ''
                }`}
              >
                <div className="mb-4 pb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b-2 border-transparent [border-image:linear-gradient(100deg,#4f46e5,#7c3aed,#c026d3)_1] inline-block">
                    {category.category}
                  </h3>
                  {category.note && (
                    <p className="mt-2 text-sm text-indigo-700/80 dark:text-indigo-300/80">
                      {category.note}
                    </p>
                  )}
                </div>

                <ul className={category.featured ? 'grid sm:grid-cols-2 gap-x-6 gap-y-2' : 'space-y-2'}>
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="w-2 h-2 mt-1.5 bg-indigo-600 rounded-full mr-3 shrink-0 transition-transform group-hover:scale-125"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
