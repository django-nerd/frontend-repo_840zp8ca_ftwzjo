import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay and copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
              Disponibile per freelance • 2025
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Interfacce moderne con un tocco fantasy/lofi
            </h1>
            <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
              Micro-interazioni, transizioni fluide e 3D giocoso. Progetto esperienze che fanno dire wow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/25 ring-1 ring-white/10">Guarda i lavori</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-white/90 hover:bg-white/15">Parliamo</a>
            </div>

            {/* Floating badges */}
            <div className="relative mt-10">
              <motion.div className="absolute -left-2 -top-6 hidden md:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="float-slow inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-2 text-fuchsia-200 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  Webflow-like interactions
                </div>
              </motion.div>
              <motion.div className="absolute left-32 -bottom-6 hidden md:block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="float-rev inline-flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-violet-200 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  Framer Motion magic
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/20 to-slate-950" />
      <div className="pointer-events-none grain absolute inset-0" />
    </section>
  )
}
