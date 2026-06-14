'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function GsapScroll() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const ctx = gsap.context(() => {
      // ===== 视差滚动效果 =====
      gsap.utils.toArray('.parallax-slow').forEach(el => {
        gsap.to(el, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        })
      })

      gsap.utils.toArray('.parallax-fast').forEach(el => {
        gsap.to(el, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        })
      })

      // ===== 3D 倾斜入场 =====
      gsap.utils.toArray('.tilt-in').forEach(el => {
        gsap.from(el, {
          rotateX: 15,
          rotateY: -10,
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        })
      })

      // ===== 文字逐行揭示 =====
      gsap.utils.toArray('.text-reveal').forEach(el => {
        const chars = el.textContent.split('')
        el.innerHTML = chars.map(char => `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`).join('')
        gsap.to(el.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        })
      })

      // ===== 卡片 stagger 入场 =====
      gsap.utils.toArray('.stagger-cards').forEach(container => {
        const cards = container.querySelectorAll('.stagger-card')
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          rotateX: 10,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        })
      })

      // ===== 水平滚动展示 =====
      gsap.utils.toArray('.horizontal-scroll').forEach(section => {
        const container = section.querySelector('.horizontal-container')
        if (container) {
          gsap.to(container, {
            x: () => -(container.scrollWidth - window.innerWidth + 100),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${container.scrollWidth}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            }
          })
        }
      })

      // ===== 图片缩放视差 =====
      gsap.utils.toArray('.img-parallax').forEach(img => {
        gsap.from(img, {
          scale: 1.3,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        })
      })

      // ===== 分割线动画 =====
      gsap.utils.toArray('.line-reveal').forEach(line => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        })
      })

      // ===== 背景色渐变过渡 =====
      gsap.utils.toArray('.bg-transition').forEach(section => {
        const fromColor = section.dataset.from || '#ffffff'
        const toColor = section.dataset.to || '#f8fafc'
        gsap.to(section, {
          backgroundColor: toColor,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        })
      })

      // ===== 数字计数增强 =====
      gsap.utils.toArray('.counter-glow').forEach(el => {
        gsap.from(el, {
          textShadow: '0 0 0px rgba(37,99,235,0)',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            onEnter: () => {
              gsap.to(el, {
                textShadow: '0 0 30px rgba(37,99,235,0.3)',
                duration: 0.5,
                yoyo: true,
                repeat: 3,
              })
            }
          }
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
