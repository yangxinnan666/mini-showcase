import Link from 'next/link'
import { ArrowRight, Code2, Headphones, ShieldCheck } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import Reveal from '@/components/ui/Reveal'
import { contact, stats } from '@/data/site'

export const metadata = {
  title: '关于我们',
  description: '未来码力是一家专注企业级小程序与软件定制开发的技术服务公司。'
}

export default function AboutPage() {
  const values = [
    { icon: Code2, title: '业务先行', desc: '先理解商业流程，再决定产品结构和技术方案。' },
    { icon: ShieldCheck, title: '交付可靠', desc: '用里程碑、验收标准和工程规范保障项目确定性。' },
    { icon: Headphones, title: '长期陪跑', desc: '上线不是结束，持续维护和迭代才是增长开始。' }
  ]

  return (
    <main className="page-shell pt-20">
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        <Reveal>
          <span className="section-label">关于我们</span>
          <h1 className="hero-title mt-7 max-w-5xl text-slate-950">未来码力<br /><span className="text-gradient">让商业软件更像增长资产</span></h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">我们专注微信小程序、商城系统、企业软件和 AI 应用开发，为客户提供从咨询、设计、研发到上线运维的一站式交付。</p>
        </Reveal>
        <div className="mt-14 grid gap-4 rounded-[2rem] border border-white/70 bg-white/72 p-4 shadow-card backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(item => (
            <div key={item.label} className="rounded-[1.5rem] bg-slate-50/80 p-6 text-center ring-1 ring-slate-200/70">
              <div className="text-4xl font-black text-slate-950"><CountUp value={item.value} suffix={item.suffix} /></div>
              <div className="mt-2 text-sm font-bold text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {values.map(item => {
            const Icon = item.icon
            return (
              <div key={item.title} className="glass rounded-[2rem] p-7">
                <Icon className="text-blue-600" size={30} />
                <h2 className="mt-6 text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-14 rounded-[2.5rem] bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-black">想确认我们能不能做你的项目？</h2>
          <p className="mt-4 text-slate-300">微信：{contact.wechat} / 手机：{contact.phone}</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-black text-blue-700">立即咨询 <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  )
}
