import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Two-digit section index, e.g. "01". A pure visual device. */
  index: string;
  title: string;
  /** Optional supporting line under the title. */
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}

/**
 * Left-aligned section header: index + gradient rule + title + optional subtitle.
 * Replaces the old centered heading pattern to break the page's vertical symmetry.
 */
export function SectionHeader({ index, title, children, dark = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-sm font-bold text-gradient">{index}</span>
        <span
          className={`h-px w-14 bg-gradient-to-r to-transparent ${
            dark ? 'from-indigo-400' : 'from-indigo-500 dark:from-indigo-400'
          }`}
        />
      </div>
      <h2
        className={`text-4xl md:text-5xl font-bold tracking-tight ${
          dark ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-4 text-lg max-w-md ${
            dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
}
