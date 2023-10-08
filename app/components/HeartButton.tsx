"use client";

import React, { useState } from 'react';
import { SafeUser } from '../types';
import { AiFillHeart, AiOutlineAlert, AiOutlineHeart } from 'react-icons/ai';
import useFavorite from '../hooks/useFavorites';

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser
}) => {
  const {hasFavorited,toggleFavorite}= useFavorite({listingId, currentUser});

  return (
    <div
      onClick={toggleFavorite}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      {/* <AiOutlineHeart
        size={28}
        className='fill-white absolute top-[2px] right-[2px] z-[-999]'
      /> */}
      <AiFillHeart
        size={28}
        className={
          hasFavorited ? 'fill-rose-500 scale-110 transition-all' : 'fill-neutral-200'
          
        }
      />
    </div>
  );
};

export default HeartButton;