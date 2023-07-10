'use client'

import {TbBeach, TbMountain} from 'react-icons/tb'
import {GiBarn, GiCactus, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import {FaSkiing} from 'react-icons/fa'
import {IoDiamond} from 'react-icons/io5'

import { usePathname, useSearchParams } from 'next/navigation'
import { BsSnow } from 'react-icons/bs'
import CatagoryBox from '../CatagoryBox'

export const catagories =[
  {
      label: 'Beach',
      icon:TbBeach,
      description:'The property has beach!'
  },
  {
      label: 'windmills', 
      icon:GiWindmill,
      description:'The property has windmill!'
  },
  {
      label: 'modern',
      icon:MdOutlineVilla,
      description:'The property is modern!'
  },
  {
      label: 'mountain',
      icon:TbMountain,
      description:'The property is in countryside!'
  },
  {
      label: 'Island',
      icon:GiIsland,
      description:'The property is on an Island!'
  },
  {
      label: 'Lake',
      icon:MdOutlineVilla,
      description:'The property has lake!'
  },
  {
      label: 'skiing',
      icon:FaSkiing,
      description:'The property has skiing activities!'
  },
  {
      label: 'Camping',
      icon:GiForestCamp,
      description:'The property has camping activities!'
  },
  {
      label: 'Arctic',
      icon:BsSnow,
      description:'The property has skiing activities!'
  },
  {
      label: 'Cave',
      icon:GiCaveEntrance,
      description:'The property has skiing activities!'
  },
  {
      label: 'Desert',
      icon:GiCactus,
      description:'The property has skiing activities!'
  },
  {
      label: 'Barns',
      icon:GiBarn,
      description:'The property has skiing activities!'
  },
  {
      label: 'Lux',
      icon:IoDiamond,
      description:'The property has skiing activities!'
  }
]

const Catagories = () => {


  // getting the catagory name from the URL 
  const params= useSearchParams();
  const catagory = params ?.get('catagory');
  const pathname=usePathname();

  const mainpage= pathname==='/'

  return (
    <>

    <div 
    className="
    pt-4
    flex
    flex-row
    items-center
    justify-between
    overflow-x-auto
    ">
      {catagories.map((items)=>
        (<CatagoryBox
        key={items.label}
        label={items.label}
        icon={items.icon}
        selected={catagory===items.label}   // if catagory matches with the label then field will be selected
        /> 
        ))}
    </div>

    </>
  )
}

export default Catagories
