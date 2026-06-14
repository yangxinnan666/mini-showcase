import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { solutions } from '@/data/site'

export const metadata = {
  title: '解决方案',
  description: '未来码力行业解决方案，覆盖商城、教育、医疗、餐饮、企业服务、本地生活。'
}

export default function SolutionPage() {
  return (
    <main className="page-shell pt-20">
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        <Reveal>
          <span className="section-label">行业解决方案</span>
          <h1 className="hero-title mt-7 max-w-5xl text-slate-950">按行业场景<br /><span className="text-gradient">规划可落地的软件系统</span></h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">从业务流程、用户角色、交易闭环、运营后台和数据指标出发，避免只做“好看的页面”。</p>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.id} delay={index * 0.04}>
                <div className="glass rounded-[2rem] p-7">
                  <Icon className="text-blue-600" size={32} />
                  <h2 className="mt-7 text-2xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <ul className="mt-6 space-y-3 text-sm font-bold text-slate-600">
                    {['用户端小程序', '管理后台', '数据看板'].map(point => <li key={point} className="flex gap-2"><CheckCircle2 className="text-blue-600" size={17} />{point}</li>)}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Link href="/contact" className="mt-12 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-black text-white">咨询行业方案 <ArrowRight size={17} /></Link>
      </section>
    </main>
  )
}
