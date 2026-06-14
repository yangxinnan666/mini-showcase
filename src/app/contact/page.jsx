import { CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/data/site'

export const metadata = {
  title: '联系我们',
  description: '联系未来码力，获取小程序与软件定制开发方案。'
}

export default function ContactPage() {
  return (
    <main className="page-shell pt-20">
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <div>
          <span className="section-label">联系我们</span>
          <h1 className="hero-title mt-7 text-slate-950">告诉我你的业务<br /><span className="text-gradient">我给你软件方案</span></h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">发送行业、预算范围、核心功能和期望上线时间，我们将提供功能清单、开发周期和报价建议。</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-[1.6rem] p-5">
              <Phone className="text-blue-600" size={26} />
              <div className="mt-4 text-sm text-slate-500">手机号</div>
              <a href={`tel:${contact.tel}`} className="mt-1 block text-2xl font-black text-slate-950">{contact.phone}</a>
            </div>
            <div className="glass rounded-[1.6rem] p-5">
              <MessageCircle className="text-blue-600" size={26} />
              <div className="mt-4 text-sm text-slate-500">微信</div>
              <div className="mt-1 text-2xl font-black text-slate-950">{contact.wechat}</div>
            </div>
          </div>
        </div>
        <div className="glass rounded-[2.5rem] p-7">
          <div className="grid gap-7 md:grid-cols-[260px_1fr] md:items-center">
            <div className="rounded-[2rem] bg-white p-5 shadow-card">
              <img src={contact.qr} alt="未来码力微信二维码" className="aspect-square w-full rounded-2xl object-contain" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-950">扫码加微信咨询</h2>
              <p className="mt-4 leading-8 text-slate-600">建议发送：行业类型、参考案例、核心功能、预算范围、期望上线时间。</p>
              <div className="mt-6 space-y-3">
                {['免费需求评估', '功能清单梳理', '开发周期建议', '预算报价参考'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="text-blue-600" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
