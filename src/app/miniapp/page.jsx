import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MiniappShowcase from '@/components/sections/MiniappShowcase'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: '小程序开发',
  description: '未来码力小程序开发服务，展示商城、教育、医疗、企业服务、预约系统 iPhone UI 案例。'
}

export default function MiniappPage() {
  return (
    <main className="page-shell pt-20">
      <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-70" />
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <Reveal>
          <span className="section-label">小程序开发</span>
          <h1 className="hero-title mt-7 max-w-5xl text-slate-950">不是空模型<br /><span className="text-gradient">是真实业务 UI 演示</span></h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">左侧切换行业分类，右侧 iPhone 设备自动切换案例 UI，支持轮播和自动播放，适合商务展示与方案沟通。</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-black text-white">咨询小程序开发 <ArrowRight size={17} /></Link>
        </Reveal>
        <div className="mt-12">
          <MiniappShowcase />
        </div>
      </section>
    </main>
  )
}
