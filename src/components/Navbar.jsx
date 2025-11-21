import { useState } from 'react'
import { Menu, X, Rocket, Mail, Github, Linkedin, Sparkles } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25 ring-1 ring-white/10 overflow-hidden">
                <span className="absolute inset-0 blur-xl opacity-40 bg-[conic-gradient(from_180deg,theme(colors.violet.400),theme(colors.fuchsia.400),theme(colors.indigo.500))] animate-spin [animation-duration:6s]" />
                <Rocket size={18} />
              </span>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-tight">Alex Rivera</p>
                <p className="text-[11px] text-slate-400 -mt-0.5">Web Designer • Frontend</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="mailto:hello@alexrivera.design" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 px-3 py-1.5 text-white hover:from-violet-400 hover:to-fuchsia-400 border border-white/10 shadow-lg shadow-fuchsia-500/20">
                <Mail size={16} /> Hire me
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <div className="flex flex-col gap-4">
                <NavLink href="#work" onClick={close}>Work</NavLink>
                <NavLink href="#skills" onClick={close}>Skills</NavLink>
                <NavLink href="#about" onClick={close}>About</NavLink>
                <NavLink href="#contact" onClick={close}>Contact</NavLink>
                <div className="flex gap-3 pt-2">
                  <a className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white" href="https://github.com" target="_blank" rel="noreferrer"><Github size={18} /></a>
                  <a className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </header>
  )
}
