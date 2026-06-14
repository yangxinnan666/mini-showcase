'use client'

import { motion } from 'framer-motion'
import { BarChart3, CalendarCheck, ChevronLeft, ChevronRight, Home, ShoppingBag, Sparkles, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function IphoneMockup({ items, autoPlay = true }) {
  const [active, setActive] = useState(0)
  const item = items[active]
  const gradient = item.color || item.coverGradient || 'from-blue-700 to-sky-400'
  const title = item.label || item.title

  useEffect(() => {
    if (!autoPlay) return undefined
    const timer = setInterval(() => setActive(current => (current + 1) % items.length), 3600)
    return () => clearInterval(timer)
  }, [autoPlay, items.length])

  return (
    <div className="relative">
      <motion.div
        className="phone-3d relative mx-auto h-[560px] w-[292px] rounded-[3.4rem] bg-slate-950 p-3 shadow-[0_50px_110px_rgba(37,99,235,0.32)]"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative h-full overflow-hidden rounded-[2.7rem] bg-white">
          <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
          <div className="h-full bg-gradient-to-b from-blue-50 via-white to-sky-50 px-4 pb-4 pt-12">
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className={`rounded-[1.7rem] bg-gradient-to-br ${gradient} p-5 text-white shadow-xl shadow-blue-500/25`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold opacity-85">{title}</span>
                <Sparkles size={18} />
              </div>
              <div className="mt-7 text-3xl font-black">{item.metric}</div>
              <div className="mt-1 text-xs opacity-80">{item.industry || '实时业务数据'}</div>
            </motion.div>
            <div className="mt-4 grid grid-cols-4 gap-2.5">
              {(item.features || ['商城', '会员', '订单', '数据']).slice(0, 4).map(label => (
                <div key={label} className="grid aspect-square place-items-center rounded-2xl bg-white px-1 text-center text-[10px] font-black leading-tight text-blue-700 shadow-sm ring-1 ring-blue-100">{label}</div>
              ))}
            </div>
            <div className="mt-4 space-y-2.5">
              {(item.screens || ['首页', '详情', '中心']).slice(0, 3).map((screen, line) => (
                <div key={screen} className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-xs font-black text-white`}>{line + 1}</div>
                    <div className="flex-1">
                      <div className="text-xs font-black text-slate-900">{screen}</div>
                      <div className="mt-1 h-2 w-24 rounded-full bg-blue-100" />
                    </div>
                    <div className="text-xs font-black text-blue-600">{line === 0 ? '热' : '进'}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 border-t border-slate-100 bg-white/95 px-5 py-3 text-slate-400">
              <Home size={17} className="mx-auto text-blue-600" />
              <ShoppingBag size={17} className="mx-auto" />
              <CalendarCheck size={17} className="mx-auto" />
              <UserRound size={17} className="mx-auto" />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-8 flex justify-center gap-3">
        <button aria-label="上一个" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white" onClick={() => setActive((active + items.length - 1) % items.length)}>
          <ChevronLeft size={19} />
        </button>
        <button aria-label="下一个" className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white" onClick={() => setActive((active + 1) % items.length)}>
          <ChevronRight size={19} />
        </button>
      </div>
    </div>
  )
}
