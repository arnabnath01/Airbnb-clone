'use client'
import currentUser from '@/app/actions/getCurrentUser'
import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'
// import {BiSolidUserCircle} from 'react-icons/bi'

interface ProfileProps{
  src:string | null | undefined;
}

const Profile: React.FC<ProfileProps> = ({
  src
}) => {
  return (
    <div className="rounded-2xl
    flex 
    flex-row items-center
     cursor-pointer
    bg-white hover:shadow-sm 
     mx-3 mr-[27px]
     py-[33px]">
      <div className='pr-3'>
        <AiOutlineMenu/>
      </div>
      <div>
      <Image 
      className='rounded-full'
      alt='user_img'  
      src= {src || "/images/placeholder.jpg"}    
      height={30}
      width={30}
      />
      </div>
    </div>
  )
}

export default Profile
