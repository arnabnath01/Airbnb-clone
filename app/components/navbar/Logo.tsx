'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <div >
      <Image
      alt='logo'
      src='/images/logo.png'
      height='100'
      width='100'
      className="  cursor-pointer sm:hidden "
      />
      
    </div>
  )
}

export default Logo
