import Link from 'next/link'
import { ArrowRight, CheckCircle2, Play, Quote, Star } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import GsapScroll from '@/components/ui/GsapScroll'
import IphoneMockup from '@/components/ui/IphoneMockup'
import MouseGlow from '@/components/ui/MouseGlow'
import Reveal from '@/components/ui/Reveal'
import NeuralNetworkBackground from '@/components/ui/NeuralNetworkBackground'
import { cases, miniappScreens, services, stats, testimonials } from '@/data/site'

export default function Page() {
  return (
    <main className="page-shell pt-20">
      <MouseGlow />
      <GsapScroll />

      {/* ===== HERO: 粒子神经网络背景 ===== */}
      <section className="relative z-10 mx-auto min-h-[calc(100vh-5rem)] max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
          <NeuralNetworkBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/80" />
          {/* 顶部光晕 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 grid min-h-[calc(100vh-5rem-3.5rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="section-label"><span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />百万级企业软件定制服务商</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="hero-title mt-7 text-white">未来码力<br /><span className="text-gradient">重构商业软件体验</span></h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300">为成长型企业打造小程序、SaaS 平台、AI 应用与数据中台，用设计与工程能力推动业务增长。</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky px-8 py-4 text-base font-black text-white shadow-glow transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                  获取项目方案 <ArrowRight className="transition group-hover:translate-x-1" size={19} />
                </Link>
                <Link href="/case" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-black text-white shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white/20">
                  <Play size={18} /> 查看案例
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18} className="relative min-h-[610px]">
            <div className="absolute inset-10 rounded-[4rem] bg-blue-400/20 blur-3xl animate-pulse" />
            <IphoneMockup items={miniappScreens} />
          </Reveal>
        </div>
      </section>

      {/* ===== 数据背书: 玻璃拟态 + 光晕 ===== */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/72 p-4 shadow-card backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={item.label} className="group relative overflow-hidden rounded-[1.5rem] bg-slate-50/80 p-6 text-center ring-1 ring-slate-200/70 transition-all duration-500 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 hover:ring-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-sky-500/5 transition-all duration-500" />
              <div className="relative">
                <div className="text-4xl font-black text-slate-950 group-hover:text-blue-700 transition-colors duration-300">
                  <CountUp value={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-2 text-sm font-bold text-slate-500">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 核心服务 ===== */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
        <Reveal><SectionHead label="核心服务" title="像顶级云厂商一样可靠，像 Stripe 一样优雅" /></Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <Link href={item.href} className="glass group block min-h-[280px] rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200/50">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-white shadow-lg shadow-blue-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"><Icon size={27} /></span>
                  <h3 className="mt-9 text-2xl font-black text-slate-950 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <div className="mt-7 flex items-center gap-2 text-sm font-black text-blue-700">了解服务 <ArrowRight className="transition group-hover:translate-x-1" size={17} /></div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ===== Apple 风格案例展示: Sticky 滚动 ===== */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
        <Reveal><SectionHead label="案例预览" title="用真实业务模型展示交付深度" /></Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.slice(0, 3).map((item, index) => (
            <Link key={item.slug} href={`/case/${item.slug}`} className="case-card group overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 hover:ring-blue-200">
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${item.coverGradient} p-6 text-white`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-5 right-5 w-36 rounded-2xl bg-white/90 p-3 text-slate-950 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                  <div className="h-2 w-20 rounded-full bg-slate-200" />
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <div className="h-8 rounded-lg bg-blue-100 transition-colors group-hover:bg-blue-200" />
                    <div className="h-8 rounded-lg bg-sky-100 transition-colors group-hover:bg-sky-200" />
                    <div className="h-8 rounded-lg bg-indigo-100 transition-colors group-hover:bg-indigo-200" />
                  </div>
                </div>
                <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-black backdrop-blur-xl w-fit">{item.category}</div>
                <div className="mt-16 text-lg font-black opacity-80">{item.cover}</div>
                <div className="mt-2 text-4xl font-black">{item.metric}</div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black text-slate-950 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl bg-slate-50 p-3 font-black text-slate-700 ring-1 ring-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300">周期：{item.cycle}</div>
                  <div className="rounded-xl bg-slate-50 p-3 font-black text-slate-700 ring-1 ring-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300">{item.industry}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.slice(0, 3).map(stack => <span key={stack} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700 group-hover:bg-blue-100 transition-colors duration-300">{stack}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== 客户评价 ===== */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
        <Reveal><SectionHead label="客户评价" title="客户看重的不是页面，而是可交付的确定性" /></Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((quote, index) => (
            <div key={index} className="glass rounded-[2rem] p-7 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
              <Quote className="text-blue-600" size={30} />
              <p className="mt-6 text-base leading-8 text-slate-700">{quote}</p>
              <div className="mt-6 flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function SectionHead({ label, title }) {
  return (
    <div className="mb-12 max-w-4xl">
      <span className="section-label"><CheckCircle2 size={14} />{label}</span>
      <h2 className="section-title mt-5 text-slate-950">{title}</h2>
    </div>
  )
}
