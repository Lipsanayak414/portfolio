import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideViewerProps {
  title: string;
  embedUrl: string;
  onClose: () => void;
}

export function SlideViewer({ title, embedUrl, onClose }: SlideViewerProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-5xl flex flex-col rounded-2xl overflow-hidden shadow-2xl bg-gray-950 border border-gray-800"
          style={{ height: 'min(80vh, 640px)' }}
          initial={{ scale: 0.95, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800 shrink-0">
            <p className="text-sm font-medium text-gray-200 truncate">{title}</p>
            <button
              onClick={onClose}
              className="ml-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <iframe
            src={embedUrl}
            className="w-full flex-1 border-0"
            allowFullScreen
            title={title}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
