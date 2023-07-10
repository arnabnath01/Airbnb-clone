'use client';

import React from "react";
import { IconType } from "react-icons";

interface CatagoryinputProps {
  onClick: (value: string) => void;
  label: string;
  icon: IconType ,
  selected?: boolean;

}

const Catagoryinput: React.FC<CatagoryinputProps> = ({
  icon: Icon, // remapping the icon to use this as component later om
  onClick,
  label,   
  selected
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
    rounded-xl
    border-2
    flex
    flex-col  
    gap-3
    hover:border-black
    transition
    cursor-pointer
    ${selected ? 'border-black' : 'border-neutral-200'}
    `}>
     <Icon size={30}/>
    <div className="font-semibold">
      {label}  
    </div>
    

    </div>
  )
}

export default Catagoryinput
