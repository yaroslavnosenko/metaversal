import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

import '@/styles/tailwind.css'
// keep styles order
import '@/styles/index.css'

const font = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
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
      <body className="antialiased bg-background text-secondary pt-14">
        {children}
      </body>
    </html>
  )
}
