import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950"
        >
          <motion.div
            initial={{ scale: 0.7, rotate: 0 }}
            animate={{ scale: [0.7, 1.05, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="relative h-24 w-24 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg,theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500),theme(colors.violet.500))] animate-spin [animation-duration:3s] opacity-70" />
            <div className="absolute inset-2 rounded-xl bg-slate-900 grid place-items-center border border-white/10">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-slate-300"
          >
            Loading experience…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
