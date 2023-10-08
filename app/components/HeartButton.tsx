"use client";

import React, { useState } from 'react';
import { SafeUser } from '../types';
import { AiFillHeart, AiOutlineAlert, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser
}) => {
  const [hasFavourited, setHasFavourited] = useState(false);

  const toggleFavourite = () => {
    setHasFavourited(!hasFavourited);
  };

  return (
    <div
      onClick={toggleFavourite}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      {/* <AiOutlineHeart
        size={28}
        className='fill-white absolute top-[2px] right-[2px] z-[-999]'
      /> */}
      <AiFillHeart
        size={28}
        className={
          hasFavourited ? 'fill-rose-500 scale-110 transition-all' : 'fill-neutral-200'
          
        }
      />
    </div>
  );
};

export default HeartButton;