export const navVariants = {
  hidden: {
    opacity: 0,
    top: -10,
  },
  show: {
    opacity: 1,
    top: 24,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3 + delay,
      ease: 'easeInOut',
    },
  },
});
