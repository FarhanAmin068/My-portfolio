// Shared animation vocabulary — every section speaks the same motion language.
export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -44, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 44, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

// Parent container that staggers its children.
export const stagger = (delayChildren = 0.1, staggerChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
})

export const viewport = { once: true, amount: 0.2 }
export const viewportLoose = { once: true, amount: 0.1 }
