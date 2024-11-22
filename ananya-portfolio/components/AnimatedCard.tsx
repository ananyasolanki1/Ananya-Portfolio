'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function AnimatedCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  )
}

