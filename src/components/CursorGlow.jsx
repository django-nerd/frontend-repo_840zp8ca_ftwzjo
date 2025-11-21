import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [vel, setVel] = useState({ x: -100, y: -100 })

  useEffect(() => {
    let raf
    const handle = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    const smooth = () => {
      setVel((v) => ({ x: v.x + (pos.x - v.x) * 0.12, y: v.y + (pos.y - v.y) * 0.12 }))
      raf = requestAnimationFrame(smooth)
    }
    window.addEventListener('mousemove', handle)
    raf = requestAnimationFrame(smooth)
    return () => {
      window.removeEventListener('mousemove', handle)
      cancelAnimationFrame(raf)
    }
  }, [pos.x, pos.y])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen">
      <div
        className="absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/20 blur-2xl"
        style={{ left: vel.x, top: vel.y }}
      />
      <div
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-2xl"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70"
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  )
}
