import { useEffect, useRef } from 'react'

// Top progress bar driven by a rAF poll (not scroll events) so it works in
// every embedding environment, with a soft lerp for spring-like motion.
export default function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let cur = 0
    let raf

    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const target = max > 0 ? window.scrollY / max : 0
      cur += (target - cur) * 0.16
      el.style.transform = `scaleX(${cur.toFixed(4)})`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={ref}
      style={{ transform: 'scaleX(0)' }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-300"
    />
  )
}
