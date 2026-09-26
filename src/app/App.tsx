import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { AIPractice } from './components/AIPractice';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen" id="top">
      {/* Keyboard users should not have to tab the whole nav to reach the page. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-gradient focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      {/*
        Order follows how the page is actually read. Recruiter scan studies put
        most attention in the top third, so proof of work leads and the
        biographical section — the weakest use of prime space — moves to last.
      */}
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <AIPractice />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
