import { useEffect, useRef } from 'react'

// Soft glow that trails the cursor with a gentle spring lag.
export default function CursorSpotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      x += (tx - x) * 0.1
      y += (ty - y) * 0.1
      if (el) el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none hidden md:block"
      style={{
        background:
          'radial-gradient(circle, rgba(129,140,248,0.1) 0%, rgba(56,189,248,0.05) 35%, transparent 70%)',
        mixBlendMode: 'screen',
        zIndex: 1,
      }}
    />
  )
}
