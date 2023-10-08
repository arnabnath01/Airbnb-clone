"use client"

import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import Button from "../Button";



interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;

}

const Modals: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)


    }, [isOpen])


    const handleClose = useCallback(() => {
        if (disabled) return;


        setShowModal(false);
        setTimeout(() => {
            onClose()
        }, 300);

    }, [disabled, onClose])


    const handleSubmit = useCallback(() => {
        if (disabled) return;


        onSubmit();

    }, [disabled, onSubmit])



    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return;


        secondaryAction();
    }, [secondaryAction, disabled])


    if (!isOpen) return null;


    return (
        <>
            <div className="
     justify-self-center
     max-md:
     items-center
     flex
     overflow-hidden
     overflow-y-auto
     fixed
     inset-0 
     z-20
     outline-none
     focus:outline-none
    bg-neutral-500/70
    transition-all duration-300 ease-in-out
    shadow-xl
     ">
                <div className="
        relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto
        ">
                    {/* CONTENT */}
                    <div className=
                        {`
                        duration-300
                        h-full
                        ${showModal ? `translate-y-0 opacity-100` : `translate-y-full opacity-0`}
                       
                        `}
                    >
                        <div className="
                translate 
                -x-8
                h-auto
                lg:h-auto
                md:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-auto
                bg-white
                
                outline-none
                focus:outline-none
                
                " >

                            {/* HEADER */}
                            <div className="
                    flex
                
                    justify-center
                    p-3
                    rounded-t
                
                    relative
                    border-b-[1px]

                    ">
                                <button
                                    onClick={handleClose}
                                    className="
                        p-1
                        border-0
                        hover:opacity-70
                        transition
                        absolute
                        left-9
                        ">
                                    <AiOutlineClose size={18} />
                                </button>

                                {/* TITLE */}
                                <div className="
                    text-lg 
                    font-semibold
                    ">{title}
                                </div>

                            </div>
                            {/* BODY */}
                            <div className="
                    relative
                    p-6 
                    ">{body}
                            </div>
                            {/* FOOTER */}
                            <div
                                className="
                    flex flex-col
                    gap-2 p-6
                    ">
                                <div className="flex flex-row 
                        items-center 
                        gap-4
                        w-full
                        ">
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button
                                            outline
                                            disabled={disabled}
                                            label={secondaryActionLabel}
                                            onClick={handleSecondaryAction}
                                        />
                                    )}

                                    <Button
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                    />

                                </div>
                                {footer}

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modals
