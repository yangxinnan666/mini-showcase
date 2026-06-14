import Link from 'next/link'
import { contact, navItems } from '@/data/site'

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-blue-950/5 bg-white/70 py-10 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <div className="text-xl font-black text-slate-950">未来码力 WEILAIMALI</div>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">企业级小程序与软件定制开发，覆盖咨询、设计、研发、上线、运维和持续增长。</p>
          <p className="mt-3 text-sm font-bold text-slate-600">微信：{contact.wechat} / 手机：{contact.phone}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-500">
          {navItems.map(item => <Link key={item.href} href={item.href} className="hover:text-blue-700">{item.label}</Link>)}
          <Link href="/contact" className="hover:text-blue-700">联系我们</Link>
        </div>
      </div>
    </footer>
  )
}
