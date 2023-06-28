'use client'
import { useCallback,useState } from "react"
import  {AiFillGithub} from 'react-icons/ai'
import  {FcGoogle} from 'react-icons/fc'
import axios from 'axios'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from "@/app/hooks/useRegisterModal"
import Modals from "./Modals"
import Heading from "../Heading"


const RegisterModal = () => {

const registerModal = useRegisterModal();
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
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        setIsLoading(false);
    })
    }
  
    
    const bodyContent = (
        <div className="flex 
        flex-col
        gap-4
        ">
           <Heading
           title="Welcome to airbnb "
           subtitle="Create your account"
           />
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
   />
  )
}

export default RegisterModal
