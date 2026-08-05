export const heroLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const heroRight = {
  hidden: {
    opacity: 0,
    x: 70,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 1,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
