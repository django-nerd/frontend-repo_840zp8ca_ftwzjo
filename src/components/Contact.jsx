import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Invio...')
    try {
      await new Promise((r) => setTimeout(r, 700))
      setStatus('Inviato! Ti risponderò a breve.')
      e.currentTarget.reset()
    } catch {
      setStatus('Qualcosa è andato storto. Riprova.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_50%_0%,rgba(217,70,239,0.14),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Costruiamo qualcosa</h2>
          <p className="text-slate-300/80 mt-2">Raccontami progetto e tempistiche.</p>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Nome</label>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Il tuo nome" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="you@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300 mb-1">Dettagli progetto</label>
            <textarea name="message" rows="5" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Cosa costruiamo?" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/25 ring-1 ring-white/10">
              <Send size={18} /> Invia
            </button>
            <p className="text-sm text-slate-300/80">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
