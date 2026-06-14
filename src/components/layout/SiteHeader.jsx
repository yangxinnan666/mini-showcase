'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '@/data/site'

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="未来码力首页">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky text-lg font-black text-white shadow-lg shadow-blue-500/25">W</span>
          <span>
            <span className="block text-lg font-black text-slate-950">未来码力</span>
            <span className="block text-[10px] font-black tracking-[0.24em] text-blue-600">WEILAIMALI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/70 p-1 shadow-sm lg:flex">
          {navItems.map(item => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-xl shadow-blue-950/10 transition hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex">
          <MessageCircle size={17} />
          立即咨询
        </Link>
        <button aria-label="菜单" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <div className="mx-5 mb-4 rounded-3xl border border-blue-100 bg-white p-3 shadow-2xl lg:hidden">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-black text-slate-700 hover:bg-blue-50">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-black text-white">
            <MessageCircle size={17} />
            立即咨询
          </Link>
        </div>
      )}
    </header>
  )
}
