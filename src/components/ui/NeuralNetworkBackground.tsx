'use client'

import React, { useRef, useEffect, useCallback } from 'react'

interface NeuralNetworkBackgroundProps {
  className?: string
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  interface Particle {
    x: number
    y: number
    originX: number
    originY: number
    vx: number
    vy: number
    radius: number
    isTextParticle: boolean
  }

  const getTextPositions = useCallback((canvas: HTMLCanvasElement, text: string, fontSize: number): { x: number; y: number }[] => {
    const offscreen = document.createElement('canvas')
    offscreen.width = canvas.width
    offscreen.height = canvas.height
    const ctx = offscreen.getContext('2d')!
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${fontSize}px "Microsoft YaHei", "PingFang SC", sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const positions: { x: number; y: number }[] = []
    const step = 4

    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        const i = (y * canvas.width + x) * 4
        if (imageData.data[i + 3] > 128) {
          positions.push({ x, y })
        }
      }
    }

    return positions
  }, [])

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = []
    const text = 'WEILAIMALI'
    const fontSize = Math.min(canvas.width, canvas.height) * 0.12
    const textPositions = getTextPositions(canvas, text, fontSize)

    const sampleRate = Math.max(1, Math.floor(textPositions.length / 800))
    const sampledTextPositions = textPositions.filter((_, i) => i % sampleRate === 0)

    sampledTextPositions.forEach(pos => {
      particles.push({
        x: pos.x + (Math.random() - 0.5) * 10,
        y: pos.y + (Math.random() - 0.5) * 10,
        originX: pos.x,
        originY: pos.y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 1,
        isTextParticle: true,
      })
    })

    const freeParticleCount = Math.floor((canvas.width * canvas.height) / 15000)
    for (let i = 0; i < freeParticleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        originX: Math.random() * canvas.width,
        originY: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.2 + 0.5,
        isTextParticle: false,
      })
    }

    return particles
  }, [getTextPositions])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      particlesRef.current = initParticles(canvas)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      ctx.clearRect(0, 0, width, height)

      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#0a1628')
      gradient.addColorStop(1, '#1a365d')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const connectionDistance = 120
      const mouseRadius = 150

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (p.isTextParticle) {
          const dx = p.originX - p.x
          const dy = p.originY - p.y
          p.vx += dx * 0.001
          p.vy += dy * 0.001
          p.vx *= 0.95
          p.vy *= 0.95
        }

        const mdx = mouse.x - p.x
        const mdy = mouse.y - p.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < mouseRadius) {
          const force = (mouseRadius - mDist) / mouseRadius
          p.vx -= (mdx / mDist) * force * 0.8
          p.vy -= (mdy / mDist) * force * 0.8
        }

        p.x += p.vx
        p.y += p.vy

        if (!p.isTextParticle) {
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
          p.x = Math.max(0, Math.min(width, p.x))
          p.y = Math.max(0, Math.min(height, p.y))
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.3
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        const alpha = p.isTextParticle ? 0.9 : 0.6
        ctx.fillStyle = p.isTextParticle ? `rgba(96, 165, 250, ${alpha})` : `rgba(56, 189, 248, ${alpha})`
        ctx.fill()

        if (p.isTextParticle) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(96, 165, 250, 0.1)`
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  )
}

export default NeuralNetworkBackground
