import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'


import { SafeUser } from '@/app/types'
import Catagories from './Catagories'


interface NavbarProps{
  currentUser? : SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {

  console.log(currentUser)
  return (
    <div>
      <div className='fixed z-10 w-full bg-white  shadow-sm'>
      <div className="py-4 pb-[5px] border-b-[1px] ">

      <Container >
        <div className="
        flex
        flex-row
        justify-between
        items-center
        gap-3
        md:gap-0
        ">
          <Logo/>
          <Search/>
          <UserMenu currentUser={currentUser}/>
        </div>
    
      </Container>
      </div>
      <div>
        <Catagories/>
      </div>
      </div>
      
     
    </div>
  )
}

export default Navbar
