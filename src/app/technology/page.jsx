import { CheckCircle2 } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { techStack, technologyStrengths } from '@/data/site'

export const metadata = {
  title: '技术实力',
  description: '未来码力技术实力，覆盖前端工程、后端架构、云原生部署、安全合规、体验设计与 AI 集成。'
}

export default function TechnologyPage() {
  return (
    <main className="page-shell pt-20">
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <Reveal>
          <span className="section-label">技术实力</span>
          <h1 className="hero-title mt-7 max-w-5xl text-slate-950">商业交付背后<br /><span className="text-gradient">是稳定的工程体系</span></h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">从架构、性能、安全、运维到体验设计，未来码力用工程规范保证项目不是一次性页面，而是可扩展的软件资产。</p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologyStrengths.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="glass rounded-[2rem] p-7">
                  <Icon className="text-blue-600" size={32} />
                  <h2 className="mt-7 text-2xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="glass rounded-[2.5rem] p-7">
          <div className="flex items-center gap-2 text-sm font-black text-blue-700"><CheckCircle2 size={17} />标准技术栈</div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techStack.map(stack => <div key={stack} className="rounded-2xl bg-slate-50 p-4 text-sm font-black text-slate-800 ring-1 ring-slate-100">{stack}</div>)}
          </div>
        </div>
      </section>
    </main>
  )
}
