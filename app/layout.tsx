import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Satyapir Professional Portfolio',
  description: 'Satyapir Professional Portfolio',
  generator: 'Satyapir',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
