import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'
import ToasterProvider from './provider/ToasterProvider'
import LogInModal from './components/modals/LogInModal'
import getcurrentUser from './actions/getCurrentUser'
import RentalModal from './components/modals/RentModal'


const font = Nunito({ subsets: ['latin'] })

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
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RentalModal/>
          <LogInModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className='pb-20 pt-28'>
        {children}
          </div>
        </body>
    </html>
  )
}
