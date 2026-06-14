'use client'

import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(0, value, {
      duration: 1.35,
      ease: 'easeOut',
      onUpdate: latest => setDisplay(Math.round(latest))
    })
    return () => controls.stop()
  }, [inView, value])

  return <span ref={ref}>{display}{suffix}</span>
}
