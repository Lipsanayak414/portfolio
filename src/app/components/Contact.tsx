import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

const EMAIL = 'lipsanayak414@gmail.com';
const LINKEDIN = 'https://linkedin.com/in/lipsanayak/';
const GITHUB = 'https://github.com/Lipsanayak414';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Static-host friendly: open the visitor's mail client with the message pre-filled.
  const compose = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'someone'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-gray-900 text-white overflow-hidden">
      {/* Subtle ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <Reveal className="mb-12 max-w-2xl">
          <SectionHeader index="05" title="Let's talk" dark />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal direction="right" className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
              <p className="text-gray-300 mb-6">
                Whether it's a role, a project, or a question about one of the projects, the quickest
                routes are below.
              </p>
            </div>

            <div className="space-y-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span>{EMAIL}</span>
              </a>

              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <span>linkedin.com/in/lipsanayak</span>
              </a>

              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Github size={20} />
                </div>
                <span>github.com/Lipsanayak414</span>
              </a>

            </div>

            <div className="flex gap-4 pt-4">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5 transform-gpu">
                <Linkedin size={24} />
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5 transform-gpu">
                <Github size={24} />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5 transform-gpu">
                <Mail size={24} />
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" delay={1} className="bg-gray-800/80 backdrop-blur p-6 rounded-2xl border border-gray-700/60 shadow-xl">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all text-white"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 transition-all text-white resize-none"
                  placeholder="A line about the role or problem..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={compose}
                className="btn-shimmer w-full bg-brand-gradient px-6 py-3 text-white font-medium rounded-lg transition-all shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5 transform-gpu"
              >
                Send message
              </button>
              <p className="text-xs text-gray-400 text-center">
                Opens your email app, pre-filled and ready to send.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm order-2 sm:order-1">© 2026 Lipsa Nayak</p>

          <div className="flex items-center gap-3 order-1 sm:order-2">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-brand-gradient flex items-center justify-center transition-all hover:-translate-y-0.5 transform-gpu">
              <Linkedin size={18} />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-brand-gradient flex items-center justify-center transition-all hover:-translate-y-0.5 transform-gpu">
              <Github size={18} />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="w-10 h-10 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-brand-gradient flex items-center justify-center transition-all hover:-translate-y-0.5 transform-gpu">
              <Mail size={18} />
            </a>
            <span className="w-px h-6 bg-gray-700 mx-1" />
            <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 whitespace-nowrap">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
