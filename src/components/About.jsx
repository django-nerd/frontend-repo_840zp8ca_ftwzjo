import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              Sono un web designer focalizzato su esperienze interattive. Amo creare interfacce che sembrano vive — dall\'hover iniziale all\'ultima transizione. Processo: brand, UX e motion per sistemi scalabili.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-slate-300/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-white font-semibold">Tooling</p><p>Figma, After Effects, Framer, Spline, Webflow</p></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-white font-semibold">Stack</p><p>React, Tailwind, GSAP/Framer Motion</p></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-white font-semibold">Industries</p><p>SaaS, E‑com, Agencies, Startups</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
