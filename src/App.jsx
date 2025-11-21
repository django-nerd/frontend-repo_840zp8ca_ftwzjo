import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Global purple/lofi vibes */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-15%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.22),transparent)] blur-3xl" />
        <div className="absolute right-[-10%] top-[30%] h-[520px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(236,72,153,0.16),transparent)] blur-2xl" />
        <div className="aurora absolute -bottom-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 opacity-70" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Alex Rivera — Web Designer</p>
            <p className="text-slate-500">Crafted with motion, detail, and a bit of magic ✨</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
