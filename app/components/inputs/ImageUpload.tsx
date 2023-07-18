'use client'

import { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { TbPhotoPlus } from 'react-icons/tb'
import { Value } from '@prisma/client/runtime'

declare global {
    var cloudinary: any;
}

interface ImageUploadProps {
    onChange: (Value: string) => void;
    value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
}) => {

    const handleUpload = useCallback(
        (result: any) => {
            onChange(result.info.secure_url);
        },
        [onChange],
    )

    return (
        <div>
            <CldUploadWidget

                onUpload={handleUpload}
                uploadPreset="jjxgyzwj"  // get this from cloudinary->upload->upload preset
                options={
                    {
                        maxFiles: 1
                    }
                }
            >
                {({ open }) => {
                    return (
                        <div
                            onClick={() => open?.()}
                            className='
                    relative
                    cursor-pointer
                    hover:opacity-75
                    transition
                    duration-200 ease-in-out
                    border-dashed
                    border-2
                    p-20
                    border-neutral-300
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-4
                    text-neutral-600
                    '
                        >
                            <TbPhotoPlus />
                            <div className="font-semibold text-lg">
                                Upload an image here.
                            </div>
                            {
                                value && (
                                    <div className='absolute insert-0 w-full h-full'>
                                        <Image
                                            alt='upload'
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            src={value}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
}

export default ImageUpload
