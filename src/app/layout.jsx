import './globals.css'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

export const metadata = {
  metadataBase: new URL('https://www.weilaimali.com'),
  title: {
    default: '未来码力 WEILAIMALI | 企业级小程序与软件定制开发',
    template: '%s | 未来码力'
  },
  description: '未来码力专注微信小程序、商城系统、企业数字化软件、AI 应用与数据中台开发，提供从咨询、设计、研发到上线运维的一站式交付。',
  keywords: ['小程序开发', '软件定制开发', '商城系统', '企业数字化', '微信小程序', '未来码力', 'WEILAIMALI'],
  openGraph: {
    title: '未来码力 WEILAIMALI',
    description: '百万级企业软件开发公司官网，高端科技感软件定制服务。',
    type: 'website',
    locale: 'zh_CN'
  },
  robots: {
    index: true,
    follow: true
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
