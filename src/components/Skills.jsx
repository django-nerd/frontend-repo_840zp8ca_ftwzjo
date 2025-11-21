import { motion } from 'framer-motion'
import { Code2, Palette, Sparkles, PenTool, Layout, MousePointerClick } from 'lucide-react'

const skills = [
  { icon: Palette, name: 'Visual Design', level: 'Expert', tags: ['Color', 'Typography', 'Layout'] },
  { icon: Sparkles, name: 'Motion', level: 'Advanced', tags: ['Micro-interactions', 'Transitions'] },
  { icon: Layout, name: 'UI/UX', level: 'Advanced', tags: ['Wireframes', 'Prototyping'] },
  { icon: MousePointerClick, name: 'Interaction', level: 'Advanced', tags: ['Gestures', 'A11y'] },
  { icon: Code2, name: 'Frontend', level: 'Advanced', tags: ['React', 'Tailwind'] },
  { icon: PenTool, name: 'Brand', level: 'Advanced', tags: ['Identity', 'Guidelines'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_220px_at_10%_0%,rgba(139,92,246,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills & Superpowers</h2>
            <p className="text-slate-300/80 mt-2">A blend of design thinking, motion, and interface craft.</p>
          </div>
          <div className="hidden md:block text-right text-slate-400 text-sm">
            <p>5+ years crafting for web</p>
            <p>Based in Barcelona</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, name, level, tags }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/80 to-fuchsia-400/80" />
                  <div className="absolute -inset-3 rounded-2xl bg-fuchsia-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon size={20} className="relative" />
                </div>
                <span className="text-xs text-slate-400">{level}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80">{t}</span>
                ))}
              </div>
              {/* glow orb */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
