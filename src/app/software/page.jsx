import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { process, softwareCapabilities, techStack } from '@/data/site'

export const metadata = {
  title: '软件开发',
  description: '企业软件定制开发，覆盖业务中台、CRM、OA、数据看板、权限系统和云端部署。'
}

export default function SoftwarePage() {
  return (
    <main className="page-shell pt-20">
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        <Reveal>
          <span className="section-label">软件开发</span>
          <h1 className="hero-title mt-7 max-w-5xl text-slate-950">企业级软件<br /><span className="text-gradient">从流程到数据的系统化重构</span></h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">未来码力为企业搭建 CRM、OA、ERP、业务中台、数据看板和 AI 自动化应用，帮助组织减少重复劳动。</p>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {softwareCapabilities.map(item => {
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
      </section>
      <section className="relative z-10 bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <span className="section-label border-blue-300/20 bg-blue-400/10 text-blue-100">开发流程</span>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {process.map(item => (
              <div key={item.num} className="glass-dark rounded-[2rem] p-7">
                <div className="text-sm font-black text-sky-300">{item.num}</div>
                <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
        <span className="section-label">技术栈</span>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {techStack.map(item => <div key={item} className="glass rounded-2xl p-4 text-sm font-black text-slate-800">{item}</div>)}
        </div>
        <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-black text-white">咨询软件项目 <ArrowRight size={17} /></Link>
      </section>
    </main>
  )
}
