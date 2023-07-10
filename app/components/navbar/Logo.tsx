'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

const Logo = () => {
  const router = useRouter()
  return (
    <div >
      <Image
      onClick={()=>router.push('/')}
      alt='logo'
      src='/images/logo.png'
      height='100'
      width='100'
      className="cursor-pointer ml-6"
      />
      
    </div>
  )
}

export default Logo
