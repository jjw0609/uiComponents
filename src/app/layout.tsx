import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'UI요소모음 | JJW',
  description: 'Vanilla / React로 UI요소 만들기',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
export default Layout
