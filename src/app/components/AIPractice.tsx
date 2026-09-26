import { FileCheck2, Gauge, ShieldCheck, UserCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

/**
 * Positions Lipsa as a BA who can specify and govern AI systems, not only use
 * AI tools. This is the layer most BA portfolios leave out.
 */
export function AIPractice() {
  const practices = [
    {
      icon: FileCheck2,
      title: 'Requirements for systems that guess',
      body:
        'A deterministic feature either returns the right value or it does not. An AI feature returns a distribution. I write acceptance criteria that hold up against that: thresholds measured over a labelled test set, defined behaviour for low-confidence output, and an explicit answer to "what should it do when it does not know?"',
    },
    {
      icon: Gauge,
      title: 'Evaluate the system, not the model',
      body:
        'Retrieval, permissions, prompt, and generation each fail in their own way, and swapping the model fixes none of them. I map the full surface — what gets retrieved, who is allowed to see it, what the prompt asserts, what the output claims — so failures get traced to the stage that actually caused them.',
    },
    {
      icon: ShieldCheck,
      title: 'Governance the backlog can action',
      body:
        'Most AI policy is written by legal and risk teams and never reaches a sprint. I translate it: risk classification into scope decisions, fairness and bias checks into test cases, EU AI Act obligations into acceptance criteria, and traceability into logging requirements a developer can build against.',
    },
    {
      icon: UserCheck,
      title: 'Decide where the human stays',
      body:
        'The hardest question in an agentic workflow is not what the agent can do, it is what it may do unsupervised. I define the authority boundary — which steps execute automatically, which need approval, what gets logged for audit, and who is accountable when an agent acts on its own.',
    },
  ];

  return (
    <section
      id="ai-practice"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-950 via-indigo-950/40 to-gray-950 text-white"
    >
      <div aria-hidden className="bg-line-grid mask-fade-b pointer-events-none absolute inset-0 opacity-30" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <Reveal className="md:col-span-4 md:sticky md:top-24">
            <SectionHeader index="03" title="Working with AI" dark>
              Most analysts have learned to use AI tools. The harder, scarcer skill is specifying,
              evaluating, and governing the AI systems a business ships to its customers.
            </SectionHeader>
          </Reveal>

          <div className="md:col-span-8 space-y-4">
            {practices.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={i} delay={i} direction="left">
                  <div className="ring-gradient-hover group glass-dark rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/40 hover:-translate-y-1 transform-gpu">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500/25 to-violet-500/25 flex items-center justify-center group-hover:from-indigo-500 group-hover:to-violet-600 transition-all duration-300">
                        <Icon size={22} className="text-indigo-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-white mb-2 text-lg">{p.title}</h3>
                        <p className="text-gray-300/90 text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
