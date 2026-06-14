'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { cases } from '@/data/site'

const filters = ['全部', '商城', '教育', '医疗', '企业服务', '预约系统']

export default function CaseCenter() {
  const [active, setActive] = useState('全部')
  const visible = useMemo(() => active === '全部' ? cases : cases.filter(item => item.category === active), [active])

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full px-5 py-2.5 text-sm font-black transition ${active === filter ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-blue-50 hover:text-blue-700'}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {visible.map(item => (
          <Link key={item.slug} href={`/case/${item.slug}`} className="case-card group overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-slate-200 transition hover:-translate-y-2">
            <div className="grid md:grid-cols-[0.92fr_1.08fr]">
              <div className={`relative min-h-72 overflow-hidden bg-gradient-to-br ${item.coverGradient} p-7 text-white`}>
                <div className="absolute right-5 top-16 h-40 w-40 rounded-[2rem] border border-white/30 bg-white/15 backdrop-blur-xl" />
                <div className="absolute bottom-5 right-8 w-44 rounded-3xl bg-white/90 p-4 text-slate-950 shadow-2xl">
                  <div className="h-3 w-24 rounded-full bg-slate-200" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-xl bg-blue-100" />
                    <div className="h-12 rounded-xl bg-sky-100" />
                    <div className="h-12 rounded-xl bg-indigo-100" />
                  </div>
                </div>
                <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-black backdrop-blur-xl w-fit">{item.category}</div>
                <div className="mt-24 text-xl font-black opacity-80">{item.cover}</div>
                <div className="mt-2 text-4xl font-black">{item.metric}</div>
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <div className="text-xs font-bold text-slate-500">行业</div>
                    <div className="mt-1 font-black text-slate-950">{item.industry}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <div className="text-xs font-bold text-slate-500">开发周期</div>
                    <div className="mt-1 font-black text-slate-950">{item.cycle}</div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.slice(0, 4).map(stack => <span key={stack} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-black text-slate-700 ring-1 ring-slate-200">{stack}</span>)}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.features.slice(0, 4).map(feature => <span key={feature} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{feature}</span>)}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {item.resultData.map(data => <div key={data} className="rounded-xl bg-blue-50 p-2 text-center text-xs font-black text-blue-700">{data}</div>)}
                </div>
                <div className="mt-7 flex items-center gap-2 text-sm font-black text-blue-700">查看详情 <ArrowRight size={17} /></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
