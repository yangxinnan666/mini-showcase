import { notFound } from 'next/navigation'
import { CalendarDays, CheckCircle2, GitBranch, Layers3, Quote, Trophy } from 'lucide-react'
import IphoneMockup from '@/components/ui/IphoneMockup'
import Reveal from '@/components/ui/Reveal'
import { cases } from '@/data/site'

export function generateStaticParams() {
  return cases.map(item => ({ slug: item.slug }))
}

export function generateMetadata({ params }) {
  const item = cases.find(c => c.slug === params.slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.desc
  }
}

export default function CaseDetailPage({ params }) {
  const item = cases.find(c => c.slug === params.slug)
  if (!item) notFound()

  return (
    <main className="page-shell pt-20">
      <section className="relative z-10 mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-12">
        <Reveal>
          <span className="section-label">{item.category} 案例详情</span>
          <h1 className="hero-title mt-7 text-slate-950">{item.title}</h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">{item.desc}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.features.map(feature => <span key={feature} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">{feature}</span>)}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <IphoneMockup items={item.screens.map((screen, index) => ({ ...item, label: screen, metric: index === 0 ? item.metric : item.resultData[index % item.resultData.length], color: item.coverGradient }))} />
        </Reveal>
      </section>

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard icon={Layers3} title="项目背景" text={item.background} />
          <InfoCard icon={CalendarDays} title="开发周期" text={item.cycle} />
          <InfoCard icon={Trophy} title="项目成果" text={item.results.join(' / ')} />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass rounded-[2rem] p-7">
            <h2 className="text-3xl font-black text-slate-950">需求分析</h2>
            <div className="mt-6 space-y-3">
              {item.analysis.map(point => (
                <div key={point} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-700 ring-1 ring-slate-100">
                  <CheckCircle2 className="shrink-0 text-blue-600" size={18} />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-7">
            <h2 className="text-3xl font-black text-slate-950">UI 设计稿</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.screens.map((screen, index) => (
                <div key={screen} className={`relative h-48 overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${item.coverGradient} p-5 text-white`}>
                  <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-black w-fit">{screen}</div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 text-slate-950">
                    <div className="text-sm font-black">{item.title}</div>
                    <div className="mt-2 h-2 w-24 rounded-full bg-blue-100" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-xl bg-slate-100" />
                      <div className="h-10 rounded-xl bg-blue-100" />
                      <div className="h-10 rounded-xl bg-sky-100" />
                    </div>
                  </div>
                  <div className="absolute right-5 top-5 text-4xl font-black opacity-25">0{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[2rem] p-7">
            <h2 className="text-3xl font-black text-slate-950">系统架构</h2>
            <div className="mt-7 grid gap-3 md:grid-cols-5">
              {item.architecture.map((node, index) => (
                <div key={node} className="relative rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
                  <GitBranch className="mx-auto text-blue-600" size={22} />
                  <div className="mt-3 text-xs font-black leading-5 text-slate-700">{node}</div>
                  {index < item.architecture.length - 1 && <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-blue-200 md:block" />}
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-7">
            <h2 className="text-3xl font-black text-slate-950">技术栈</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.stack.map(stack => <span key={stack} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-700 ring-1 ring-slate-200">{stack}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[2rem] p-7">
            <h2 className="text-3xl font-black text-slate-950">成果数据</h2>
            <div className="mt-6 grid gap-3">
              {item.resultData.map(data => <div key={data} className="rounded-2xl bg-blue-50 p-5 text-2xl font-black text-blue-700">{data}</div>)}
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
            <Quote className="text-sky-300" size={34} />
            <h2 className="mt-6 text-3xl font-black">客户评价</h2>
            <p className="mt-5 text-lg leading-9 text-slate-300">{item.quote}</p>
            <div className="mt-7 text-sm font-black text-sky-200">{item.industry} / {item.category}</div>
          </div>
        </div>
      </section>
    </main>
  )
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="glass rounded-[2rem] p-7">
      <Icon className="text-blue-600" size={30} />
      <h2 className="mt-6 text-2xl font-black text-slate-950">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  )
}
