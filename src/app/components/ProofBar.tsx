import { AnimatedNumber } from './AnimatedNumber';

/**
 * Hard numbers, placed in the hero.
 *
 * Eye-tracking research on recruiter screening finds roughly 80% of viewing
 * time lands in the top third of a document, scanned in an F-pattern down the
 * left margin. Lipsa's quantified results previously sat four screens down in
 * the Experience section, where a short first pass would never reach them.
 * Every figure here is the same one stated in its Experience bullet.
 */
const metrics = [
  { value: 5, suffix: '+', label: 'Years in analytics & BA', prefix: '' },
  { value: 32, suffix: '%', label: 'Reporting accuracy gained', prefix: '↑' },
  { value: 45, suffix: '%', label: 'Manual reporting effort cut', prefix: '↓' },
  { value: 11, suffix: '%', label: 'Subscriber churn reduced', prefix: '↓' },
];

export function ProofBar() {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden bg-gray-200/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10">
      {metrics.map((m) => (
        <div key={m.label} className="bg-white/80 dark:bg-gray-950/60 backdrop-blur px-4 py-3.5">
          <dt className="sr-only">{m.label}</dt>
          <dd>
            <span className="block text-2xl font-extrabold tracking-tight text-gradient leading-none">
              {m.prefix}
              <AnimatedNumber value={m.value} />
              {m.suffix}
            </span>
            <span className="mt-1.5 block text-[11px] leading-tight text-gray-600 dark:text-gray-400">
              {m.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
