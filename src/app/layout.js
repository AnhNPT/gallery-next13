import '../../public/css/globals.css'
import { Hepta_Slab } from 'next/font/google'

const hepta_slab = Hepta_Slab({ subsets: ['latin'] })

export const metadata = {
  title: 'Project Gallery',
  description: 'Create by AnhNPT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hepta_slab.className}>{children}</body>
    </html>
  )
}
