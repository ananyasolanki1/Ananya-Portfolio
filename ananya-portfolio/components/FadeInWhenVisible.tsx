'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function FadeInWhenVisible({ children }: { children: ReactNode }) {
 return (
   <motion.div
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5, delay: 0.2 }}
   >
     {children}
   </motion.div>
 )
}

