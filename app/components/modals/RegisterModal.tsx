'use client'
import { useState,useCallback } from "react"
import  {AiFillGithub} from 'react-icons/ai'
import  {FcGoogle} from 'react-icons/fc'
import axios from 'axios'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLogInModal from "@/app/hooks/useLoginModal"
import Modals from "./Modals"
import Heading from "../Heading"
import Input from "../inputs/Input"
import { error } from "console"
import { toast } from "react-hot-toast"
import Button from "../Button"
import { BsFacebook } from "react-icons/bs"
import { signIn } from "next-auth/react"


const RegisterModal = () => {

const registerModal = useRegisterModal();
const logInModal = useLogInModal();
const [isLoading, setIsLoading] = useState(false)

const {
    register,
    handleSubmit,
    formState: { errors },

    
    

}=useForm<FieldValues>({
    defaultValues: {
        name:' ',
        email:'',
        password:'',

    }});

    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);


        axios.post('/api/register',data)
    .then(()=>{
        registerModal.onClose();
        toast.success('Successfully created user!')
    })
    .catch((error)=>{
        toast.error('Something went wrong');
    })
    .finally(()=>{

        setIsLoading(false);
    })
    }

    const toggle = useCallback(()=>{
        registerModal.onClose;
        logInModal.onOpen;
        
    },
    [logInModal,registerModal])
  
    
    const bodyContent = (
        <div className="flex 
        flex-col
        gap-4
        ">
           <Heading
           title="Welcome to airbnb "
           subtitle="Create your account"
           />
           <Input 
           id="email"
           label="Email"
           type="email  "
           register={register}
           errors={errors}
           required
           />
           <Input 
           id="name"
           label="Name"
           register={register}
           errors={errors}
           required
           />
           <Input 
           id="password"
           type="password"
           label="Password"
           register={register}
           errors={errors}
           required
           />
        </div>
    )

        const footerContent=(
            <div className="
            flex flex-col gap-4 mt-3 
            ">
                <hr />
               <Button
               outline
               label="Continue with Google"
               icon={FcGoogle}
               onClick={()=>signIn('google')}
               
               /> 
               <Button
               
               outline
               label="Continue with Github"
               icon={AiFillGithub}
               onClick={()=>signIn('github')}
               /> 
               

               <div className="flex flex-row
               justify-center
                gap-2
                pl-4
                ">
            <div className="text-semibold
            text-black
            ">Already have account ?
            </div>

            <div
            onClick={toggle}
            className="text-grey-500
            cursor-pointer
            hover:underline

            ">Login</div>

               </div>
            </div>
        )


  return (
   <Modals 
   disabled={isLoading}
   isOpen={registerModal.isOpen}
   title="Register"
   actionLabel="continue"
   onClose={registerModal.onClose}
   onSubmit={handleSubmit(onSubmit)}
   body={bodyContent}
   footer={footerContent}
   />
  )
}

export default RegisterModal
