import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData)
    try {
      // For now, simulate send – can be wired to backend endpoint later
      await new Promise((r) => setTimeout(r, 700))
      setStatus('Sent! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let's build something</h2>
          <p className="text-slate-300/80 mt-2">Tell me about your project and timeline.</p>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300 mb-1">Project details</label>
            <textarea name="message" rows="5" required className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="What are we building?" />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/10">
              <Send size={18} /> Send
            </button>
            <p className="text-sm text-slate-300/80">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
