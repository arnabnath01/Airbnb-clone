'use client'

import { Value } from "@prisma/client/runtime"
import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
    value: number;
    title: string;
    subtitle: string;
    onChange: (value: number) => void;

}

const Counter: React.FC<CounterProps> = ({
    title,
    subtitle,
    value,
    onChange
}) => {

    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange, value]);

    const onReduce = useCallback(() => {
        if (value == 1) {
            return;
        }
        onChange(value - 1);
    }, [onChange, value])
    return (
        <div
            className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
                {/* title  */}
                <div className="font-medium">
                    {title}
                </div>
                {/* subtitle  */}
                <div className='font-light text-gray-500'>

                    {subtitle}
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                    <div
                        onClick={onReduce}
                        className="
                    w-10
                    h-10
                    rounded-full
                    border-[1px]
                    border-neutral-400
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    text-neutral-600
                    hover:opacity-80
                    transition"
                    >
                        <AiOutlineMinus />

                    </div>
                    <div className="font-light
                    text-xl
                    text-neutral-600
                    items-center
                    ">
                        {value}
                    </div>
                    <div
                        onClick={onAdd}
                        className="
                        w-10
                        h-10
                        rounded-full
                        border-[1px]
                        border-neutral-400
                        flex
                        cursor-pointer
                        items-center
                        justify-center
                        text-neutral-600
                        hover:opacity-80
                        transition"
                    >
                        <AiOutlinePlus />

                    </div>

                </div>
        </div>
    )
}

export default Counter