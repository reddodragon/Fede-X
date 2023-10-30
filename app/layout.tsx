import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

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
    <html lang="en" className='dark'>
      <body>
      <Providers>
        {children}
      </Providers>

      </body>
    </html>
  )
}
