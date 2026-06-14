'use client'

import { useEffect, useRef, useState } from 'react'

export default function MouseGlow() {
  const glowRef = useRef(null)
  const trailRef = useRef([])
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    let rafId
    let mouseX = -200
    let mouseY = -200
    let currentX = -200
    let currentY = -200

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // 平滑跟随
      currentX += (mouseX - currentX) * 0.12
      currentY += (mouseY - currentY) * 0.12

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`
      }

      // 拖尾效果
      trailRef.current.push({ x: currentX, y: currentY, time: Date.now() })
      trailRef.current = trailRef.current.filter(t => Date.now() - t.time < 300)

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* 主光标光晕 */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-[300px] w-[300px] rounded-full opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(37,99,235,0.08) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      {/* 小光标点 */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/60 mix-blend-screen"
        style={{
          boxShadow: '0 0 20px rgba(56,189,248,0.5), 0 0 40px rgba(37,99,235,0.3)',
        }}
        id="cursor-dot"
      />
    </>
  )
}
