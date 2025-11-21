import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              I'm a web designer focused on interactive experiences. I love crafting playful interfaces that feel alive — from the first hover to the last transition. My process blends brand, UX, and motion to design systems that scale.
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
