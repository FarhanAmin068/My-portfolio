// Fixed full-page backdrop: drifting aurora fields, a slow rotating color
// sheen, and a twinkling star layer — all pure CSS for smooth, cheap motion.
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(49,46,129,0.4),transparent_60%)]" />
      <div className="aurora-sheen" />
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      <div className="aurora-blob aurora-4" />
      <div className="aurora-stars" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_55%,rgba(4,6,15,0.9)_100%)]" />
    </div>
  )
}
