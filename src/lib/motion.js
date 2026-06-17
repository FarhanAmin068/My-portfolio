// Shared animation vocabulary — GPU-friendly transforms only (opacity +
// translate). No animated blur/filter (that's what caused scroll jank).
export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
}

// Parent container that staggers its children.
export const stagger = (delayChildren = 0.08, staggerChildren = 0.09) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
})

export const viewport = { once: true, amount: 0.2 }
export const viewportLoose = { once: true, amount: 0.12 }
