import ClientOnly from './components/ClientOnly'
import Modals from './components/modals/Modals'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ToasterProvider from './provider/ToasterProvider'
import LogInModal from './components/modals/LogInModal'
import { getCurrentUser } from './actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIRBNB CLONE',
  description: 'This is the best airbnb clone ever',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //we can use getCurrentuser here, for nice file str. its moved to a file

  const currentuser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider/>
          <Navbar  currrentUser={currentuser}/> 
          <LogInModal/>
          <RegisterModal/>
          
        </ClientOnly>
      
        {children}</body>
    </html>
  )
}
