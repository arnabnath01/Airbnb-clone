'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from 'query-string'


interface CatagoryBoxProps {

    label: string;
    icon: IconType;
    description?: string;
    selected?: boolean;

}
const CatagoryBox: React.FC<CatagoryBoxProps> = ({
    label,
    icon: Icon,
    description,
    selected = false
}) => {

    const router = useRouter();
    const params = useSearchParams();       //extracts the current search parameters from the URL


    // ! THIS CODE CHANGES THE QUERY (URL ) ACCORDING TO THE CLICK
    const handleClick = useCallback(
        () => {

            let currentQuery = {};

            if (params) {
                currentQuery = qs.parse(params.toString());
            }

            const updateQuery: any = {
                ...currentQuery,
                catagory: label
            }

            //if any parameter is present there, then the 'catagory' part will be deleted from updatequery  , else currrent label will be added to the query
            if (params?.get('catagory') === label) {
                delete updateQuery.catagory;
            }

            const url = qs.stringifyUrl({
                url: '/',
                query: updateQuery,

            }, {
                skipNull: true
            })

            router.push(url)

        },
        [params, label, router]
    )


    return (
        <div
            onClick={handleClick}
            className={`
    flex
    flex-col
    items-center
    justify-center
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer
    ${selected ? `border-b-neutral-800 ` : `border-transparent`}
    ${selected ? `text-neutral-800 ` : `text-neutral-500`}
    `}>
            <Icon size={26} />
            <div

                className="
       font-medium
       text-sm

       ">{label}</div>
        </div>
    )
}

export default CatagoryBox
