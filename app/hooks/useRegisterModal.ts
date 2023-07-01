import {create } from 'zustand'

interface LogInrModalStore {
    isOpen : boolean;
    onOpen:()=>void;
    onClose:()=>void;
}
const  useRegisterModal = create<LogInrModalStore> ((set)=>
    ({
        isOpen:false,
        onOpen:()=> set({isOpen:true}),
        onClose:()=> set({isOpen:false}),

    })
);

export default useRegisterModal;