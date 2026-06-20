import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger index — multiplies the entrance delay so grids cascade in. */
  delay?: number;
  className?: string;
  /** Slide direction for the entrance. */
  direction?: 'up' | 'down' | 'left' | 'right';
}

const offset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

/**
 * Fades + slides its children into view the first time they enter the viewport.
 * Respects prefers-reduced-motion via Framer/Motion's built-in handling.
 */
export function Reveal({ children, delay = 0, className, direction = 'up' }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: delay * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
