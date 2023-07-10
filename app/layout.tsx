import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ToasterProvider from './provider/ToasterProvider'
import LogInModal from './components/modals/LogInModal'
import getcurrentUser from './actions/getCurrentUser'
import RentalModal from './components/modals/RentModal'





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

  const currentUser = await getcurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider/>
          <Navbar currentUser={currentUser}/>
          <RentalModal/>
          <LogInModal/>
          <RegisterModal/>
          
        </ClientOnly>
      
        {children}</body>
    </html>
  )
}
