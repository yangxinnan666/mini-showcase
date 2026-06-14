import CaseCenter from '@/components/sections/CaseCenter'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: '案例中心',
  description: '未来码力案例中心，支持商城、教育、医疗、企业服务筛选。'
}

export default function CasePage() {
  return (
    <main className="page-shell pt-20">
      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
        <Reveal>
          <span className="section-label">案例中心</span>
          <h1 className="hero-title mt-7 max-w-5xl text-slate-950">可筛选、可复用<br /><span className="text-gradient">真实业务案例库</span></h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">按商城、教育、医疗、企业服务筛选案例，查看项目背景、UI 截图、技术栈、周期和成果。</p>
        </Reveal>
        <CaseCenter />
      </section>
    </main>
  )
}
