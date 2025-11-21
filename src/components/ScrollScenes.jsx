import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollScenes() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160])

  return (
    <section ref={ref} className="relative min-h-[220vh] py-40">
      {/* Parallax layers */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-x-0 top-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 opacity-70">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="h-24 rounded-xl bg-gradient-to-br from-violet-400/10 to-fuchsia-400/10 border border-white/10" />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="pointer-events-none absolute inset-x-0 top-52">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-5 gap-3 opacity-60">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-16 rounded-lg bg-gradient-to-br from-fuchsia-400/10 to-violet-400/10 border border-white/10" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Centerpiece */}
      <div className="sticky top-20">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            style={{ rotate, scale }}
            className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_50px_120px_-30px_rgba(217,70,239,0.25)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(139,92,246,0.18),transparent)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">Esperienza Parallax Multi-layer</h3>
                <p className="mt-3 text-slate-300/85 max-w-2xl mx-auto">Scrolla per trasformare la scena: layer che si muovono in profondità, rotazioni e scala sincronizzate.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
