import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fede-X',
  description: 'Clon de twitter o X'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
