import { Variants } from "framer-motion";

export const EASING = [0.2, 0.8, 0.2, 1];

export const DURATION = {
  short: 0.28,
  base: 0.6,
  long: 0.9,
};

export const STAGGER = {
  small: 0.06,
  base: 0.12,
  large: 0.18,
};

const baseFade = (y = 12, x = 0): Variants => ({
  initial: { opacity: 0, y, x, transition: { duration: DURATION.base, ease: EASING } },
  animate: { opacity: 1, y: 0, x: 0, transition: { duration: DURATION.base, ease: EASING } },
  exit: { opacity: 0, y: y / 2, transition: { duration: DURATION.short, ease: EASING } },
});

export const variants: Record<string, Variants> = {
  fadeIn: baseFade(0),
  fadeUp: baseFade(12, 0),
  fadeDown: baseFade(-12, 0),
  fadeLeft: baseFade(0, 12),
  fadeRight: baseFade(0, -12),
  scaleIn: {
    initial: { opacity: 0, scale: 0.96, transition: { duration: DURATION.base, ease: EASING } },
    animate: { opacity: 1, scale: 1, transition: { duration: DURATION.base, ease: EASING } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: DURATION.short, ease: EASING } },
  },
  // Blur reveal is optional and should degrade on mobile / prefers-reduced-motion
  blurReveal: {
    initial: { opacity: 0, filter: 'blur(8px)', y: 8, transition: { duration: DURATION.base, ease: EASING } },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: DURATION.base, ease: EASING } },
    exit: { opacity: 0, filter: 'blur(6px)', y: 4, transition: { duration: DURATION.short, ease: EASING } },
  },
  // Container for staggered children
  staggerContainer: {
    initial: {},
    animate: { transition: { staggerChildren: STAGGER.base, delayChildren: 0 } },
  },
};

export const TRANSITIONS = {
  soft: { duration: DURATION.base, ease: EASING },
  fast: { duration: DURATION.short, ease: EASING },
};

export default variants;
