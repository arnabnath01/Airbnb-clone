"use client";

import { BsGlobe } from "react-icons/bs";
import Profile from "./Profile";
import { useCallback, useState } from "react";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useloginModal from "@/app/hooks/useLoginModal";
import userentalmodal from "@/app/hooks/useRentModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

// import rentalModal from "../modals/rentalModal";


interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {

  const registerModal = useRegisterModal();
  const loginModal = useloginModal();
  const rentModal = userentalmodal();

  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen
    }

    //else show the rent
    return rentModal.onOpen

  },
    [loginModal, currentUser, rentModal])

  // const currentuser = await getCurrentUser();


  return (
    <div className="flex flex-row">
      <div
        onClick={onRent}

        // onClick={rentModal.onOpen}
        className="
      font-semibold
      text-justify
      pt-4 px-[33px]
      pb-[10px]
      transition
      cursor-pointer
      max-md:hidden">Airbnb your home</div>
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
        <Profile src={currentUser?.image} />
      </div>

      {/* <UserMenuDropdown /> */}
      {open && (
        <div
          className="absolute
          rounded-xl
          shadow-md
          w-[20vw]
          max-sm:w-3/4
          bg-white 
          overflow-hidden
          top-[110px]
           right-8
          text-sm
          transition
          z-10
          "
        >
          <div
            className="flex
            flex-col
            cursor-pointer
            items-center
            w-full
            "
          >

            {
              currentUser ?
                (<>
                  <MenuItems onclick={() => { }} label="My trips " />
                  <MenuItems onclick={() => { }} label="My favourites " />
                  <MenuItems onclick={() => { }} label="My properties " />
                  <MenuItems onclick={rentModal.onOpen} label="Airbnb my home" />
                  <MenuItems onclick={() => { }} label="My reservations " />
                  <hr />
                  <hr />
                  <hr />
                  <MenuItems onclick={() => signOut()} label="log out " />
                </>
                )

                : (
                  <>
                    <MenuItems onclick={loginModal.onOpen} label="log in " />
                    <MenuItems onclick={registerModal.onOpen} label="sign up " />
                  </>
                )
            }

          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
