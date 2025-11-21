import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-8 py-24">
          <div className="">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance • 2025
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Web Designer crafting playful, modern interfaces
            </h1>
            <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
              I blend interaction, motion, and design systems to build memorable web experiences. Let's bring your product to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/10">See work</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-white/90 hover:bg-white/15">Get in touch</a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-950" />
    </section>
  )
}
