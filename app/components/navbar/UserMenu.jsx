"use client";

import { BsGlobe } from "react-icons/bs";
import Profile from "./Profile";
import { useCallback, useState } from "react";
import MenuItems from "./MenuItems";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  return (
    <div className="flex flex-row">
      <div className="max-md:hidden py-[32px] px-3 ">Airbnb your home</div>
      {/* <div className='py-[34px] px-2 hover:shadow-md rounded-full'>
        <BsGlobe />
        </div> */}
      <div
        onClick={toggleOpen}
        className="px-2
        md:py-1   
        md:px-2
        items-center
        gap-3
        transition
        "
      >
        <Profile />
      </div>

      {/* <UserMenuDropdown /> */}
      {open && (
        <div
          className="absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          bg-white 
          top-12
           right-0
          text-sm
          z-10"
        >
          <div
            className="flex
            flex-col
            cursor-pointer
            items-center
            "
          >
            <>
              <MenuItems onclick={() => {}} label="login " />
              <MenuItems onclick={() => {}} label="sign up " />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
