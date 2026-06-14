'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import IphoneMockup from '@/components/ui/IphoneMockup'
import { cases } from '@/data/site'

const categories = ['商城', '教育', '医疗', '企业服务', '预约系统']

export default function MiniappShowcase() {
  const [active, setActive] = useState('商城')
  const selected = useMemo(() => cases.find(item => item.category === active) || cases[0], [active])

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="glass h-fit rounded-[2rem] p-4">
        <div className="px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-600">案例分类导航</div>
        <div className="mt-2 space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`w-full rounded-2xl px-4 py-4 text-left text-sm font-black transition ${active === category ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white/70 text-slate-700 hover:bg-blue-50 hover:text-blue-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>
      <div className="glass overflow-hidden rounded-[2.5rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <motion.div key={selected.slug} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
            <span className="section-label">{selected.category}</span>
            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950">{selected.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{selected.desc}</p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {selected.resultData.map(data => (
                <div key={data} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
                  <div className="text-lg font-black text-blue-700">{data}</div>
                  <div className="mt-1 text-xs font-bold text-slate-500">成果数据</div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {selected.stack.slice(0, 5).map(stack => <span key={stack} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">{stack}</span>)}
            </div>
          </motion.div>
          <IphoneMockup items={cases.map(item => ({ ...item, label: item.title, color: item.coverGradient }))} />
        </div>
      </div>
    </div>
  )
}
