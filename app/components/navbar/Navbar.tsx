import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {
  return (
    <div>
      <div className='fixed z-10 W-full shadow-sm'>
      <div className="py-4 border-b-2">

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

        </div>
    <div className="flex-row">
      <Search/>
    </div>
      </Container>
      </div>
      </div>
     
    </div>
  )
}

export default Navbar
