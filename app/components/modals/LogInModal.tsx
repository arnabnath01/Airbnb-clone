'use client'
import { useCallback,useState } from "react"
import {signIn} from 'next-auth/react'
import  {AiFillGithub} from 'react-icons/ai'
import  {FcGoogle} from 'react-icons/fc'

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

import { toast } from "react-hot-toast"
import Button from "../Button"
import { BsFacebook } from "react-icons/bs"
import {  useRouter } from "next/navigation"


const LogInModal = () => {

const registerModal = useRegisterModal(); //we need this to switch the modals
const logInModal = useLogInModal();
const router =useRouter();
const [isLoading, setIsLoading] = useState(false)

const {
    register,
    handleSubmit,
    formState: { errors },

}=useForm<FieldValues>({
    defaultValues: {
        email:'',
        password:''

    }});

    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);

        signIn('credentials',{
            ...data,
            redirect:false,
        })
        .then((callback)=>{

            setIsLoading(false);


            if(callback?.ok) {
                toast.success('Logged In');
                router.refresh();
                logInModal.onClose();
            }
            if(callback?.error){
                toast.error(callback.error)
            }

        })
    }
  
    
    const bodyContent = (
        <div className="flex 
        flex-col
        gap-4
        ">
           <Heading
           title="Welcome back"
           subtitle="Log in to  your account"
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
               onClick={()=>{}}
               
               /> 
               <Button
               
               outline
               label="Continue with Github"
               icon={AiFillGithub}
               onClick={()=>{}}
               /> 
               <Button
               
               outline
               label="Continue with Facebook"
               icon={BsFacebook}
               onClick={()=>{}}
               /> 

               <div className="flex flex-row
               justify-center
                gap-2
                pl-4
                ">
            <div className="text-semibold
            text-black
            ">Do not have account ?
            </div>

            <div
            onClick={ registerModal.onOpen}
            className="text-grey-500
            cursor-pointer
            hover:underline

            ">Sign Up</div>

               </div>
            </div>
        )


  return (
   <Modals 
   disabled={isLoading}
   isOpen={logInModal.isOpen}
   title="Log In"
   actionLabel="continue"
   onClose={logInModal.onClose}
   onSubmit={handleSubmit(onSubmit)}
   body={bodyContent}
   footer={footerContent}
   />
  )
}

export default LogInModal
