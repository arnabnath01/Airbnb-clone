"use client"
import {BiSearch} from 'react-icons/bi'
const Search = () => {
  return (
    <div className=' shadow-sm hover:shadow-md rounded-full py-2 transition'>
      <div className="cursor-pointer
      flex flex-row
      items-center w-full p-2 rounded bg-gray-10
      ">
        <div className="text-sm font-semibold px-6">
      Anywhere
        </div>
        <div className="text-sm 
        font-semibold
         px-4
         border-x-[1px]
         text-center
         flex-1
         ">
      Any week
        </div>
        <div className="
        text-sm  
        pl-6
        pr-2
        text-gray-500
        items-center
        font-semibold
         p-2
         mr-3
       ">
      Any guest
        </div>
        <div className='p-auto mt-1'>
          <BiSearch size={18}/>
          
        </div>
      </div>

    
    </div>
  )
}

export default Search
