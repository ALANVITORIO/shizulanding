// Optimized animation variants for mobile devices
export const mobileVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  itemMobile: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  },

  floatingCard: {
    animate: {
      y: [-2, 2, -2],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animateMobile: {
      y: [-1, 1, -1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  image: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    visibleMobile: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  },

  // Variantes específicas para Solution/Promise
  solution: {
    benefitCard: {
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
      visibleMobile: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    progressBar: {
      hidden: { width: 0 },
      visible: {
        width: '100%',
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
      visibleMobile: {
        width: '100%',
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      },
    },

    featureCard: {
      hidden: { opacity: 0, y: 15, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    ctaButton: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: 'backOut',
        },
      },
      visibleMobile: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },
  },

  // Variantes específicas para ImageGallery
  gallery: {
    imageContainer: {
      hidden: { opacity: 0, y: 25, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
      visibleMobile: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    imageHover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },

    imageHoverMobile: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },

    overlay: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
      visibleMobile: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
        },
      },
    },
  },

  // Variantes específicas para HowItWorks
  howItWorks: {
    stepCard: {
      hidden: { opacity: 0, y: 25, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
      visibleMobile: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    stepNumber: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: 'backOut',
        },
      },
      visibleMobile: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    connectingLine: {
      hidden: { scaleY: 0 },
      visible: {
        scaleY: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      },
      visibleMobile: {
        scaleY: 1,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    ctaSection: {
      hidden: { opacity: 0, scale: 0.95, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
      visibleMobile: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      },
    },

    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
      visibleMobile: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
        },
      },
    },
  },
};
