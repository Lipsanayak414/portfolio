import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PROFILE } from '../../content/profile';

const links = [
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'ai-practice', label: 'Working with AI' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand mark — the old header had no identity anchor at all. */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0 group" aria-label="Back to top">
          <span className="w-8 h-8 rounded-lg bg-brand-gradient text-white text-xs font-bold flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            LN
          </span>
          <span className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-white">
            {PROFILE.name}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? 'true' : undefined}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === l.id
                  ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-500/15'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-indigo-300 dark:hover:bg-white/5'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <a
            href={PROFILE.cv}
            download
            aria-label="Download CV"
            className="hidden sm:flex h-9 items-center gap-1.5 px-3 rounded-lg text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-indigo-300 dark:hover:bg-white/10 transition-colors"
          >
            <Download size={16} />
            <span className="hidden md:inline">CV</span>
          </a>
          <a
            href="#contact"
            className="btn-shimmer bg-brand-gradient px-4 py-2 rounded-lg text-white text-sm font-medium transition-all shadow-sm hover:shadow-md hover:shadow-violet-600/30 hover:-translate-y-0.5 transform-gpu duration-200"
          >
            Get in touch
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="lg:hidden h-9 w-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation — the previous build simply hid the links below lg. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-gray-200/80 dark:border-gray-800/80"
          >
            <div className="px-6 py-3 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === l.id
                      ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-500/15'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={PROFILE.cv}
                download
                onClick={() => setMenuOpen(false)}
                className="sm:hidden px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
