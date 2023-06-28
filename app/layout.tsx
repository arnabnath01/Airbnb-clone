import ClientOnly from './components/ClientOnly'
import Modals from './components/modals/Modals'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIRBNB CLONE',
  description: 'This is the best airbnb clone ever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <RegisterModal/>
         
      
        <Navbar/> 
        </ClientOnly>
      
        {children}</body>
    </html>
  )
}
