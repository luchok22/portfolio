import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Uluk Portfolio',
  description: 'Hi! I`m Uluk and i Front-end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>{children}</body>
    </html>
  )
}
