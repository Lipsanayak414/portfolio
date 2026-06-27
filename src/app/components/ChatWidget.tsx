import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send } from 'lucide-react';

interface Message {
  from: 'bot' | 'user';
  text: string;
}

const GREETING: Message = {
  from: 'bot',
  text: "Hi! I'm Lipsa's assistant 👋 Ask me about her case studies, skills or how to get in touch.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    // Placeholder reply — wire this to a real backend / Claude API later.
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: "Thanks for your message! This assistant isn't connected yet. In the meantime, reach Lipsa directly at lipsanayak414@gmail.com.",
        },
      ]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-[20rem] sm:w-[22rem] origin-bottom-right rounded-2xl overflow-hidden bg-white shadow-2xl shadow-indigo-900/20 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-brand-gradient px-4 py-3 flex items-center gap-3 text-white">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-white" />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-sm">Lipsa's assistant</p>
                <p className="text-xs text-white/80">Usually replies in a few hours</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      m.from === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-sm'
                        : 'bg-white text-gray-700 border border-gray-200 rounded-bl-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 bg-white flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type a message…"
                className="flex-1 px-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"
              />
              <button
                onClick={send}
                aria-label="Send message"
                className="w-9 h-9 shrink-0 rounded-lg bg-brand-gradient text-white flex items-center justify-center hover:-translate-y-0.5 transition-transform transform-gpu"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button + label */}
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 300, damping: 20 }}
              className="hidden sm:block bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap"
            >
              Lipsa's assistant
            </motion.span>
          )}
        </AnimatePresence>

        {/* Gentle floating bob wraps the button */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open Lipsa's assistant"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 18 }}
            whileHover={{ scale: 1.1, rotate: -4 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-[1.6rem] rounded-br-md bg-brand-gradient text-white shadow-lg shadow-indigo-600/40 flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="dots"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex items-end gap-1"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
