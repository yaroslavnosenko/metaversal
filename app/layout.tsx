import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import './styles/tailwind.css'

import './styles/index.css'

const font = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  axes: [
    'GRAD',
    'XOPQ',
    'XTRA',
    'YOPQ',
    'YTAS',
    'YTDE',
    'YTFI',
    'YTLC',
    'YTUC',
    'slnt',
    'wdth',
  ],
})

export const metadata: Metadata = {
  title: 'Front End Dev Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
