export const navVariants = {
  hidden: {
    opacity: 0,
    top: -50,
  },
  show: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
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

export const textVariant = (delay, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      delay: 0.2 + delay,
      ease: 'easeInOut',
    },
  },
});

export const opacityVariants = {
  hover: {
    opacity: 0.1,

    transition: {
      delay: 0.1,
    },
  },

  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 0.1,
  },
};

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

export const imageVariant = (value) => ({
  hidden: {
    opacity: 0,
    scale: 0.7,
    // x: `${value}50`,
  },
  show: {
    opacity: 1,
    scale: 1,
    // x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      type: 'spring',
      damping: 8,
      stiffness: 100,
    },
  },
});

/**
 * Image Layer Variants
 */
export const yearVariants = {
  hover: {
    opacity: 1,
    scale: 1,

    transition: {
      delay: 0.5,
      type: 'spring',
      damping: 10,
      stiffness: 200,
    },
  },

  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

export const circleVariation = {
  hover: {
    scale: 1,

    transition: {
      duration: 0.4,
      delay: 0.2,
      type: 'spring',
      damping: 8,
      stiffness: 100,
    },
  },

  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

export const rotateIconVariation = {
  hover: {
    opacity: 1,
    scale: 1,
    rotate: -360,

    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 100,
    },
  },

  hidden: {
    opacity: 0,
    scale: 0,
    rotate: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: -360,
  },
};
