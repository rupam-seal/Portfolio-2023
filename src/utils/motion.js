export const navVariants = {
  hidden: {
    opacity: 0,
    top: -10,
  },
  show: {
    opacity: 1,
    top: 32,
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

export const scaleVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.5,
      delay: 1.5,
    },
  },
};
